import React from "react";

const Pagination = () => {
  return (
    <div className="pagination w-[140px] ml-auto flex justify-between mt-3 mr-[30px]">
      <a href="" className="page-num">
        1
      </a>
      <a href="" className="page-num">
        2
      </a>
      <a href="" className="page-num active">
        3
      </a>
      <a href="" className="page-num">
        4
      </a>
      <a href="" className="page-num">
        ...
      </a>
      <a href="" className="page-num">
        15
      </a>
    </div>
  );
};

export default Pagination;
