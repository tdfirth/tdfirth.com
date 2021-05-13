import React from "react";
import { Link } from "gatsby";
import { PAGINATION } from "../constants";

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}) => {
  // TODO sort out prev/next class names
  // const prevClassName = cx({
  //   "pagination__prev-link": true,
  //   "pagination__prev-link--disable": !hasPrevPage,
  // });

  // const nextClassName = cx({
  //   "pagination__next-link": true,
  //   "pagination__next-link--disable": !hasNextPage,
  // });

  return (
    <div className="">
      <div className="">
        <Link rel="prev" to={hasPrevPage ? prevPagePath : "/"} className="">
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
      <div className="">
        <Link rel="next" to={hasNextPage ? nextPagePath : "/"} className="">
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
