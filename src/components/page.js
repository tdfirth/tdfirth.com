import React, { useRef, useEffect } from "react";

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className="py-4 px-8 md:py-8 md:px-16">
      <div>
        {title && <h1 className="font-bold">{title}</h1>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Page;
