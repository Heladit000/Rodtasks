import { useState } from "react";
import { createContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [viewModal, setViewModal] = useState(false);

  const enableModal = () => {
    setViewModal(true);
  };

  const disableModal = () => {
    setViewModal(false);
  };

  const toggleModal = () => {
    //Change true -> false   and    false -> true
    setViewModal((prevState) => !prevState);
  };

  return (
    <ModalContext.Provider
      value={{
        viewModal,
        setViewModal,
        enableModal,
        disableModal,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
