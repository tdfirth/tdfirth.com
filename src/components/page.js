import React, { useRef, useEffect } from "react";

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className="">
      <div className="">
        {title && <h1 className="">{title}</h1>}
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Page;
