import React, { useState, useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { FormButton } from "../components/reusables/FormButton";
import { DataStore } from "@aws-amplify/datastore";
import { Storage } from "@aws-amplify/storage";
import { JobsModel } from "../models";
import { useNavigate } from "react-router-dom";
import { useFormErrors } from "../hooks/useFormErrors";

const CreateJobs = ({ user }) => {
  const [formData, setFormData] = useState({
    owner: user.attributes.email,
    position: "",
    location: "",
    company: "",
    type: "",
    tags: "",
    description: "",
  });
  const [selectedFile, setSelectedFile] = useState();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const navigate = useNavigate();

  useEffect(() => {
    async function postForm() {
      try {
        const filename = `${Date.now()}-${selectedFile.name}`;
        const accessUrl = await Storage.put(filename, selectedFile, {
          contentType: selectedFile.type,
        });
        //console.log("accessUrl", accessUrl);
        const job = await DataStore.save(
          new JobsModel({
            owner: formData.owner,
            position: formData.position,
            location: formData.location,
            type: formData.type,
            company: formData.company,
            logo: accessUrl.key,
            tags: formData.tags.split(","),
            description: formData.description,
          })
        );

        navigate(`/gigs/${job.id}`);
      } catch (error) {
        console.log(error);
      }
    }
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      postForm();
    }
  }, [formErrors]);

  async function submitForm(event) {
    event.preventDefault();
    //set form errors
    setFormErrors(validate(formData, selectedFile));
    setIsSubmit(true);
  }

  const { validate } = useFormErrors();

  return (
    <div className="block grid p-6 rounded-lg shadow-lg bg-white max-w-xl mx-auto">
      <form
        className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-x-10"
        onSubmit={submitForm}
      >
        <div className="form-group mb-6">
          <label
            htmlFor="owner"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Email
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-bold"
            name="owner"
            disabled
            value={formData.owner}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="position"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Position
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            placeholder="positon"
          />
          <p className="text-red-600 font-bold mt-2">{formErrors.position}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            placeholder="Remote, Country, State"
          />
          <p className="text-red-600 font-bold mt-2">{formErrors.location}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="type"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Type
          </label>
          <select
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            id="type"
            value={formData.type}
            name="type"
            onChange={handleChange}
          >
            <option value="">-- Choose Job Type --</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          <p className="text-red-600 font-bold mt-2">{formErrors.type}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="company"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Company
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="company Name"
          />
          <p className="text-red-600 font-bold mt-2">{formErrors.company}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="logo"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Company Logo
          </label>
          <input
            type="file"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            name="logo"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <p className="text-red-600 font-bold mt-2">{formErrors.logo}</p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="tags"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Tags - Seprate by commas
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Javascript, NodeJs, mySQL"
          />
          <p className="text-red-600 font-bold mt-2">{formErrors.tags}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            placeholder="Include Salary, Tasks, Expectations"
          />
          <p className="text-red-600 font-bold mt-2 mb-2">
            {formErrors.description}
          </p>
        </div>
        <div className="mb-6">
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default withAuthenticator(CreateJobs);
