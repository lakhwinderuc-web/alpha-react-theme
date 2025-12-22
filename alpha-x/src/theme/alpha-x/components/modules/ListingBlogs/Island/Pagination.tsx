import React from "react";
import { usePageUrl } from "@hubspot/cms-components";

const Pagination = ({
  currentPageNumber,
  previousPageNumber,
  nextPageNumber,
  totalPageCount,
}) => {
  if (!totalPageCount || totalPageCount <= 1) return null;

  const { pathname } = usePageUrl();

  // Remove /page/n if present
  const basePath = pathname.replace(/\/page\/\d+$/, "");

  const pageUrl = (page) =>
    page === 1 ? basePath : `${basePath}/page/${page}`;

  const pages = [-2, -1, 0, 1, 2]
    .map(n => currentPageNumber + n)
    .filter(p => p > 0 && p <= totalPageCount);

  return (
    <>
    <style>
      {
        `.next-link.disabled {
  opacity: 0.4;
  pointer-events: none;
  cursor: default;
}
  .prev-link.disabled {
  opacity: 0.4;
  pointer-events: none;
  cursor: default;
}
`
      }
    </style>
    <nav className="blog-pagination">
     {previousPageNumber ? (
    <a href={pageUrl(previousPageNumber)} className="prev-link">❮</a>
  ) : (
    <span className="prev-link disabled">❮</span>
  )}

  {pages.map(page => (
    <a
      key={page}
      href={pageUrl(page)}
      className={page === currentPageNumber ? "active" : ""}
    >
      {page}
    </a>
  ))}

  {nextPageNumber ? (
    <a href={pageUrl(nextPageNumber)} className="next-link">❯</a>
  ) : (
    <span className="next-link disabled">❯</span>
  )}


    </nav>
    </>
  );
};

export default Pagination;
