import { useState } from "react";

export const usePaginate = (JobsArray) => {
  const [pageNum, setPageNum] = useState(0);

  const pPerPage = 5;
  const pVisited = pageNum * pPerPage;

  const displayJobs = JobsArray.slice(pVisited, pVisited + pPerPage);

  let pagecount = Math.ceil(JobsArray.length / pPerPage);

  const pageChange = ({ selected }) => {
    setPageNum(selected);
  };

  return { displayJobs, pagecount, pageChange };
};
