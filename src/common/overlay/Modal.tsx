import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IBeer } from "../../interface";
import { capitalizeWords, generateRandomId } from "../../utils";

const Modal = ({ isOpen, closeModal, onSave }) => {
  const [beer, setBeer] = useState<IBeer>({
    id: generateRandomId(),
    name: "",
    tagline: "",
    description: "",
    image_url: "src/assets/beer.png",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBeer((prevForm) => ({ ...prevForm, [name]: capitalizeWords(value) }));
  };

  const handleSave = () => {
    // e.preventDefault();
    // Pass the beer information to the onSave callback
    onSave(beer);

    // Clear the form
    setBeer({
      id: generateRandomId(),
      name: "",
      tagline: "",
      description: "",
      image_url: "src/assets/beer.png",
    });

    // Close the modal
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left shadow-xl transition-all">
                {/* Dialog Title */}
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-6">
                  Add a New Beer
                </Dialog.Title>

                {/* Image on Left */}
                <img
                  src={beer.image_url}
                  alt="Beer"
                  className="w-24 h-24 border mb-4 object-contain" // Adjusted the styles to center the image
                />

                {/* Form */}
                <form onSubmit={handleSave}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={beer.name}
                      onChange={handleInputChange}
                      placeholder="Beer Name*"
                      required
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="tagline"
                      id="tagline"
                      value={beer.tagline}
                      onChange={handleInputChange}
                      placeholder="Genre*"
                      required
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="description"
                      id="description"
                      value={beer.description}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Description*"
                      required
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                  {/* Buttons */}
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      className="mr-2 inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
