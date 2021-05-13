import React from "react";
import { Link } from "gatsby";
import { PAGINATION } from "../constants";

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}) => {
  const prevClass = paginationClass(hasPrevPage);
  const nextClass = paginationClass(hasNextPage);

  return (
    <div className="pt-4 grid grid-flow-col grid-cols-2 items-center">
      <div className="grid justify-items-start">
        <Link
          rel="prev"
          to={hasPrevPage ? prevPagePath : "/"}
          className={`${prevClass}`}
        >
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
      <div className="grid justify-items-end">
        <Link
          rel="next"
          to={hasNextPage ? nextPagePath : "/"}
          className={`${nextClass}`}
        >
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;

function paginationClass(hasPage) {
  const color = hasPage ? "text-gray-900 hover:text-blue-600" : "text-gray-100";
  return `text-xl ${color}`;
}
