import React from "react";
import { ImLinkedin } from "react-icons/im";
import { usePdfLink } from "./hooks/usePdfLink";

export const ApplicantComponent = ({ fullname, linkedIn, email, pdf }) => {
  const { signedURL } = usePdfLink(pdf);
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
        <th
          scope="row"
          className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap dark:text-black"
        >
          {fullname}
        </th>
        <td className="py-4 px-6 text-black font-medium">{email}</td>
        <td className="py-4 px-6 text-black font-medium">
          <a href={signedURL} target="_blank" rel="noreferrer">
            Download
          </a>
        </td>
        <td className="py-4 px-6 text-black">
          <button className="ApplicantsComponentBtn">
            {/* 👇️ If you need to simply link to external URL */}
            <a
              href={`${linkedIn}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              LinkedIn <ImLinkedin />
            </a>
          </button>
        </td>
      </tr>
    </tbody>
  );
};
