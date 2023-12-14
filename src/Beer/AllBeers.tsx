import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { TBeer } from "../types";
import CardLayout from "../components/cards/CardLayout";
import { fetchBeers } from "../apis/queries";

const AllBeers: React.FC = (): JSX.Element => {
  const { status, error, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["beers"],
    queryFn: ({ pageParam }) => fetchBeers(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      /**
       * If previous Page data is empty (i.e lastPage) then
       * no need to fetch further pages.
       */
      return lastPage.length ? lastPageParam + 1 : undefined;
    },
  });

  return (
    <>
      {status === "pending" ? (
        <span>Loading....</span>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.pages.map((page: TBeer[], index) => (
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
};

export default AllBeers;
