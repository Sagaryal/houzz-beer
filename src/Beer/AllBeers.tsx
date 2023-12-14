import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IBeer } from "../interface";
import CardLayout from "../common/cards/CardLayout";
import { fetchBeers } from "../apis/queries";

function AllBeers() {
  const { status, error, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["beers"],
    queryFn: ({ pageParam }) => fetchBeers(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length ? lastPageParam + 1 : undefined;
    },
  });

  console.log("All beer tab re-rendered");

  return (
    <>
      {status === "pending" ? (
        <span>Loading....</span>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.pages.map((page: IBeer[], index) => (
            <React.Fragment key={index}>
              <CardLayout cards={page} />
            </React.Fragment>
          ))}
          <div className="flex flex-col items-center">
            <button
              className="text-blue-500 px-4 py-2 mt-4 flex items-center"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage ? (
                "Loading more..."
              ) : hasNextPage ? (
                <>
                  Load More
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </>
              ) : (
                "Nothing more to load"
              )}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default AllBeers;
