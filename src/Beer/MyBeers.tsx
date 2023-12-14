import { useEffect, useState } from "react";
import Modal from "../components/overlay/Modal";
import CardLayout from "../components/cards/CardLayout";
import { IMyBeersProps, TBeer } from "../types";

const MyBeers: React.FC<IMyBeersProps> = ({ isModalOpen, openModal, closeModal }): JSX.Element => {
  const storageItems = localStorage.getItem("beers");
  const initialBeers: TBeer[] = storageItems ? JSON.parse(storageItems) : [];

  const [beers, setBeers] = useState<TBeer[]>(initialBeers);

  const onSave = (beer: TBeer) => {
    // Save the beer to the list
    setBeers((prevBeers) => [...prevBeers, beer]);
  };

  useEffect(() => {
    // Save the beers to local storage whenever it changes
    localStorage.setItem("beers", JSON.stringify(beers));
  }, [beers]);

  return (
    <>
      {!beers.length ? (
        <div className={`h-[80vh] flex items-center bg-gray-100 justify-center`}>
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

      <Modal isModalOpen={isModalOpen} closeModal={closeModal} onSave={onSave} />
    </>
  );
};

export default MyBeers;
