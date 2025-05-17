import { Dialog, Transition } from "@headlessui/react";
import { useGodStore } from "../store";
import { God } from "../types/types";
import { Fragment } from "react";
import { GodStats } from "./GodStats";
import { GodAttributes } from "./GodAttributes";

type GodModalProps = {
  god: God;
};

// This component displays a modal with detailed information about a selected god.
// It includes the god's name, image, stats, abilities, and items.
// The modal uses Headless UI's Transition and Dialog components for accessibility and animations.
// The modal visibility is controlled via global state managed by Zustand (useGodStore).
export const GodModal = ({ god }: GodModalProps) => {
  // Get the modal open/close state from the global store
  const modal = useGodStore((state) => state.modal);
  // Get the function to close the modal from the global store
  const closeModal = useGodStore((state) => state.closeModal);

  return (
    // Transition component handles enter/exit animations for the modal
    <Transition appear show={modal} as={Fragment}>
      {/* Dialog component provides accessible modal container */}
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* Background overlay with fade-in/out transition */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"   // Animation when modal appears
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"    // Animation when modal disappears
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Fixed full-screen overlay with blur effect */}
          <div className="fixed inset-0 backdrop-blur-sm"></div>
        </Transition.Child>

        {/* Container to center the modal content vertically and horizontally */}
        <div className="fixed inset-0">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            {/* Transition for the modal panel (scaling and opacity) */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* Modal panel container with styling */}
              <Dialog.Panel
                className="w-[80%] max-h-full transform overflow-hidden rounded-2xl bg-background-primary p-6 text-left align-middle shadow-xl transition-all border border-gold"
              >
                {/* Modal title with god's name and bottom border */}
                <Dialog.Title
                  as="div"
                  className="p-7 text-center border-b border-gold"
                >
                  <h3 className="text-scarlet-red text-4xl">{god.name}</h3>
                </Dialog.Title>

                {/* Main content wrapper with fixed height */}
                <div className="flex justify-center my-2 gap-5 h-[500px]">
                  {/* Container for god's image */}
                  <div className="w-80 h-full flex items-stretch">
                    <img
                      className="h-full w-auto object-cover rounded-md"
                      src={god.image}
                      alt="God Image"
                    />
                  </div>

                  {/* Container for textual info and stats
                      overflow-y-auto allows vertical scrolling if content overflows
                      pr-2 adds padding so the scrollbar does not overlap content */}
                  <div className="flex flex-col space-y-6 w-full text-center overflow-y-auto pr-2">
                    {/* Stats section */}
                    <div className="border-b border-gold py-5">
                      <h2 className="text-gold text-2xl mb-2">Stats</h2>
                      {/* Display each stat using the GodStats component */}
                      <div className="flex gap-3 justify-center px-4">
                        <GodStats stat="Attack" value={god.attack} />
                        <GodStats stat="Defense" value={god.defense} />
                        <GodStats stat="Speed" value={god.speed} />
                        <GodStats stat="Health" value={god.health} />
                        <GodStats stat="Mana" value={god.mana} />
                      </div>
                    </div>

                    {/* Abilities section */}
                    <div className="border-b border-gold">
                      <h2 className="text-gold text-2xl">Abilities</h2>
                      <div className="space-y-5 py-5">
                        {/* List all abilities with GodAttributes component */}
                        {god.abilities.map((ability) => (
                          <GodAttributes
                            key={ability._id}
                            attribute={ability.name}
                            description={ability.description}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Items section */}
                    <div>
                      <h2 className="text-gold text-2xl">Items</h2>
                      <div className="space-y-5 py-5">
                        {/* List all items with GodAttributes component */}
                        {god.items.map((item) => (
                          <GodAttributes
                            key={item._id}
                            attribute={item.name}
                            description={item.description}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
