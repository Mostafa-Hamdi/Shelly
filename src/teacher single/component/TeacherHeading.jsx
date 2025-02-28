import React from "react";

const TeacherHeading = ({ pageName, path, nestedPage }) => {
  return (
    <section className="page-name relative">
      <div className="container mx-auto text-center  p-[75px_0_85px]">
        <h1 className="capitalize text-[65px] leading-[52px] mb-4 text-[var(--text-color)]">
          {pageName}
        </h1>
        <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--orange-color)] opacity-[0.05] text-[100px] sm:text-[160px] font-bold capitalize tracking-[2px]">
          shelly
        </h2>
        <p className="capitalize flex justify-center items-center gap-[30px] sm:text-[var(--gray-color)]">
          <span className="relative">
            <a href="/">Home</a>
          </span>
          <span>{path}</span>
          <span className="nested-page relative">{nestedPage}</span>
        </p>
      </div>
    </section>
  );
};

export default TeacherHeading;
