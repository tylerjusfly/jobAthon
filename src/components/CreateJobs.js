import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormButton } from "./reusables/FormButton";
import { DataStore } from "@aws-amplify/datastore";
import { JobsModel } from "../models";
//import { useNavigate } from 'react-router-dom';

const CreateJobs = ({ user }) => {
  const [formData, setFormData] = React.useState({
    owner: user.attributes.email,
    position: "",
    location: "",
    company: "",
    type: "",
    tags: "",
    logo: "",
    description: ""
  });

  const [postMessage, setPostMesssage] = React.useState();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  //const navigate = useNavigate();

  async function submitForm(event) {
    try {
      event.preventDefault();
      await DataStore.save(
        new JobsModel({
          owner: formData.owner,
          position: formData.position,
          location: formData.location,
          type: formData.type,
          company: formData.company,
          logo: formData.logo,
          tags: formData.tags.split(","),
          description: formData.description
        })
      );
      setPostMesssage("Data Stored");
    } catch (error) {
      console.log(error);
      setPostMesssage("data not Saved");
    }
  }

  //console.log(formData);
  const notify = () => {
    toast(postMessage);
  };

  return (
    <div className="block grid p-6 rounded-lg shadow-lg bg-white max-w-xl mx-auto">
      <form className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-x-10" onSubmit={submitForm}>
        <div className="form-group mb-6">
          <label htmlFor="owner" className="form-label inline-block mb-2 text-gray-700 font-semibold">
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
          <label htmlFor="position" className="form-label inline-block mb-2 text-gray-700 font-semibold">
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
        </div>
        <div className="mb-6">
          <label htmlFor="location" className="form-label inline-block mb-2 text-gray-700 font-semibold">
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
        </div>
        <div className="mb-6">
          <label htmlFor="type" className="form-label inline-block mb-2 text-gray-700 font-semibold">
            Type
          </label>
          <select
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            id="type"
            value={formData.type}
            name="type"
            onChange={handleChange}>
            <option value="">-- Choose Job Type --</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="company" className="form-label inline-block mb-2 text-gray-700 font-semibold">
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
        </div>
        {/* <div className="mb-6">
          <label
            htmlFor="logo"
            className="form-label inline-block mb-2 text-gray-700 font-semibold">
            Company Logo
          </label>
          <input
            type="file"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            name="logo"
          />
        </div> */}
        <div className="mb-6">
          <label htmlFor="logo" className="form-label inline-block mb-2 text-gray-700 font-semibold">
            Company Logo
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="tags" className="form-label inline-block mb-2 text-gray-700 font-semibold">
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
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="form-label inline-block mb-2 text-gray-700 font-semibold">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            placeholder="Include Salary, Tasks, Expectations"
          />
        </div>
        <div className="mb-6">
          <FormButton onClick={notify} />
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default withAuthenticator(CreateJobs);
