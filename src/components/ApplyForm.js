import React from "react";
import "../assets/css/button.css";

export const ApplyForm = () => {
  return (
    <div className="block grid p-6 rounded-lg shadow-lg bg-white max-w-xl mx-auto">
      <form className="gap-x-10">
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
            name="applicant"
            value="tylerjusy1@dev.com"
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="position"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Job Id
          </label>
          <input
            type="text"
            name="jobId"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-bold"
            value="345-5536Au8-Ion766"
            disabled
            placeholder="positon"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Full-Name
          </label>
          <input
            type="text"
            name="location"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            placeholder="John Doe.."
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="logo"
            className="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Resume
          </label>
          <input
            type="file"
            className="form-control block w-full px-3 py-2 rounded border border-solid border-black font-medium"
            name="logo"
          />
        </div>

        <div className="mb-6 text-center">
          <button className="form-Button font-bold">Apply</button>
        </div>
      </form>
    </div>
  );
};
