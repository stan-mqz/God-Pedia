import { Dialog, Transition } from "@headlessui/react";
import { useGodStore } from "../store";
import { God } from "../types/types";
import { Fragment } from "react";

type GodModalProps = {
  god: God;
};

export const GodModal = ({ god }: GodModalProps) => {
  const modal = useGodStore((state) => state.modal);
  const closeModal = useGodStore((state) => state.closeModal);

  return (
    // Apply transition to animate the entire modal when it appears/disappears
    <Transition appear show={modal} as={Fragment}>
      {/* Main modal container */}
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* Apply transition to the blurred background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm"></div>
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
              <Dialog.Panel className="w-[60%] max-h-[600px] transform overflow-hidden rounded-2xl bg-background-primary p-6 text-left align-middle shadow-xl transition-all border border-gold">
                <Dialog.Title
                  as="div"
                  className="p-7 text-center border-b border-gold"
                >
                  <h3 className="text-scarlet-red text-4xl">{god.name}</h3>
                </Dialog.Title>

                <div className="flex justify-center my-2">
                  <div className="w-3xs h-full">
                    <img className="w-full" src={god.image} alt="God Image" />
                  </div>

                  <div className="w-full text-center">
                    <div>
                      <h2 className="text-scarlet-red">Stats</h2>
                    </div>

                    <div>
                      <h2 className="text-scarlet-red">Abilities</h2>
                    </div>

                    <div>
                      <h2 className="text-scarlet-red">Items</h2>
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
