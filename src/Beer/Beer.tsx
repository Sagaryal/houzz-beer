import { useState } from "react";
import { Tab } from "@headlessui/react";
import AllBeers from "./AllBeers";
import MyBeers from "./MyBears";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Beer = () => {
  let [selectedTab, setSelectedTab] = useState(1);
  let [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  console.log("Beer comonenet re-rendered");
  return (
    <div className="mx-auto max-w-[1000px] p-4">
      <Tab.Group as="div" className="flex flex-col" selectedIndex={selectedTab} onChange={setSelectedTab}>
        <div className="flex justify-between">
          <Tab.List className="flex space-x-1">
            <Tab
              className={({ selected }) =>
                `text-lg ${
                  selected ? "font-extrabold px-4 py-2 text-black focus:outline-none" : "px-4 py-2 text-gray-600"
                }`
              }
            >
              All Beers
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-lg ${
                  selected ? "font-extrabold px-4 py-2 text-black focus:outline-none" : "px-4 py-2 text-gray-600"
                }`
              }
            >
              My Beers
            </Tab>
          </Tab.List>
          {selectedTab === 1 && (
            <button
              onClick={openModal}
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
            >
              Add a new beer
            </button>
          )}
        </div>
        <Tab.Panels className="mt-4">
          <Tab.Panel className={classNames("bg-white p-4 rounded-lg", "focus:outline-none")}>
            <QueryClientProvider client={queryClient}>
              <AllBeers />
            </QueryClientProvider>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white p-4 rounded-lg", "focus:outline-none")}>
            <MyBeers isModalOpen={isModalOpen} closeModal={closeModal} openModal={openModal} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Beer;
