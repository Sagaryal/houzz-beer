import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import AllBeers from "./AllBeers";
import MyBeers from "./MyBeers";

const Beer: React.FC = (): JSX.Element => {
  let [selectedTab, setSelectedTab] = useState(0);
  let [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <div className="mx-auto max-w-[1000px] p-4">
      <Tab.Group as="div" className="flex flex-col" selectedIndex={selectedTab} onChange={setSelectedTab}>
        <div className="flex justify-between">
          <Tab.List className="flex space-x-1">
            <Tab
              className={({ selected }) =>
                `text-sm sm:text-lg ${
                  selected ? "font-extrabold px-4 py-2 text-black focus:outline-none" : "px-4 py-2 text-gray-600"
                }`
              }
            >
              All Beers
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-sm sm:text-lg ${
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
              className="text-sm sm:text-lg px-4 py-2 bg-blue-500 text-white font-medium rounded-[0.200rem] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
            >
              Add a new beer
            </button>
          )}
        </div>
        <Tab.Panels className="mt-4">
          {/**
           * Other tabs are being re-rendered when changing the tab
           * So only rendered the selectedTab
           */}
          <Tab.Panel className="p-4">{selectedTab === 0 && <AllBeers />}</Tab.Panel>
          <Tab.Panel className="p-4">
            {selectedTab === 1 && <MyBeers isModalOpen={isModalOpen} closeModal={closeModal} openModal={openModal} />}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Beer;
