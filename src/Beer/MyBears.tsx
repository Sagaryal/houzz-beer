import { useEffect, useState } from "react";
import MyModal from "../common/overlay/Modal";
import CardLayout from "../common/cards/CardLayout";
import { IBeer } from "../interface";

const MyBeers = ({ isModalOpen, openModal, closeModal }) => {
  const storageItems = localStorage.getItem("beers");
  const initialBeers = storageItems ? JSON.parse(storageItems) : [];

  const [beers, setBeers] = useState<IBeer[]>(initialBeers);

  const onSave = (beer: IBeer) => {
    // Save the beer to the list
    setBeers((prevBeers) => [...prevBeers, beer]);
  };

  useEffect(() => {
    // Save the beers to local storage whenever it changes
    localStorage.setItem("beers", JSON.stringify(beers));
  }, [beers]);

  console.log("Mybeer tabs re-rendered");

  return (
    <>
      {beers.length === 0 ? (
        <div className={`min-h-screen max-h-50vh flex items-center bg-gray-100 justify-center`}>
          <div className="text-center">
            <p className="text-lg mb-2">Nothing to see yet.</p>
            <p className="mb-4">
              <button className="text-blue-500" onClick={openModal}>
                Click here
              </button>{" "}
              to add your first beer!
            </p>
          </div>
        </div>
      ) : (
        <CardLayout cards={beers} />
      )}

      <MyModal isOpen={isModalOpen} closeModal={closeModal} onSave={onSave} />
    </>
  );
};

export default MyBeers;
