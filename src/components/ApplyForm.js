import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";
import "../assets/css/button.css";
import { ImLinkedin } from "react-icons/im";
import { ApplicantsModel } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { Storage } from "@aws-amplify/storage";
import { useNavigate, useParams } from "react-router-dom";
import { useFormErrors } from "../hooks/useFormErrors";

const ApplyForm = ({ user }) => {
  const { gigsId } = useParams();

  const [formdata, setFormdata] = useState({
    applicant: user.attributes.email,
    jobId: gigsId,
    fullname: "",
    linkedinUrl: "",
  });

  const [selectedFile, setSelectedFile] = useState();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function postApplication() {
      try {
        const filename = `${Date.now()}-${selectedFile.name}`;
        const fileAccessUrl = await Storage.put(filename, selectedFile, {
          contentType: selectedFile.type,
        });
        //save applicant form to db
        await DataStore.save(
          new ApplicantsModel({
            jobId: formdata.jobId,
            applicantMail: formdata.applicant,
            fullname: formdata.fullname,
            linkedIn: formdata.linkedinUrl,
            resumePdf: fileAccessUrl.key,
            company: "Google",
            jobPosition: "React Dev",
          })
        );
        navigate("/");
        //console.log(form);
      } catch (error) {
        console.log("e=>", error);
      }
    }

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      postApplication();
    }
  }, [formErrors]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const { validateApplicant } = useFormErrors();

  async function submitForm(event) {
    event.preventDefault();
    //set form errors
    setFormErrors(validateApplicant(formdata, selectedFile));
    setIsSubmit(true);
  }

  return (
    <div className="block grid p-6 rounded-lg shadow-lg bg-white max-w-xl mx-auto">
      <form className="gap-x-10" onSubmit={submitForm}>
        <div className="form-group mb-6">
          <label
            htmlFor="applicant"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Applicant Mail
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-bold"
            name="applicant"
            value={formdata.applicant}
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="JobId"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Job Id
          </label>
          <input
            type="text"
            name="jobId"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-bold"
            value={formdata.jobId}
            disabled
            placeholder="positon"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Full-name"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Full-Name
          </label>
          <input
            type="text"
            name="fullname"
            value={formdata.fullname}
            onChange={handleChange}
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            placeholder="John Doe.."
          />
          <p className="text-red-600 font-bold mt-2">{formErrors.fullname}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="LinkedIn"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            <span className="flex items-center gap-2">
              LinkedIn Url <ImLinkedin />
            </span>
          </label>
          <input
            type="text"
            name="linkedinUrl"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            value={formdata.linkedinUrl}
            onChange={handleChange}
            placeholder="LinkedIn Url"
          />
          <p className="text-red-600 font-bold mt-2">
            {formErrors.linkedinUrl}
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="resume"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Resume
          </label>
          <input
            type="file"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            name="resume"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <p className="text-red-600 font-bold mt-2">{formErrors.resume}</p>
        </div>

        <div className="mb-6 text-center">
          <button className="form-Button font-bold">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default withAuthenticator(ApplyForm);
