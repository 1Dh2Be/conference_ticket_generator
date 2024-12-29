import { createContext, useContext, useEffect, useState } from "react";
import uploadIcon from "../../assets/images/icon-upload.svg";

const INITIAL_FORM_STATE = {
  fullName: "",
  email: "",
  git: "",
};

export const ticketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : INITIAL_FORM_STATE;
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const handleUpdate = (name, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  //State for route protection
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [image, setImage] = useState(() => {
    const savedImage = localStorage.getItem("image");
    return savedImage ? savedImage : uploadIcon;
  });

  useEffect(() => {
    localStorage.setItem("image", image);
  }, [image]);

  const handleImageChange = (e, handleChange) => {
    handleChange(e);
    const file = e.target.files[0];

    const newImageUrl = URL.createObjectURL(file);
    setImage(newImageUrl);
  };

  const resetImage = () => {
    setImage(uploadIcon);
  };

  return (
    <ticketContext.Provider
      value={{
        userData,
        image,
        setUserData,
        handleUpdate,
        handleImageChange,
        resetImage,
        isFormSubmitted,
        setIsFormSubmitted,
      }}
    >
      {children}
    </ticketContext.Provider>
  );
};

export const useDataUser = () => {
  const context = useContext(ticketContext);

  if (!context) {
    throw new Error("useDataUser must be used within a TicketProvider");
  }

  return context;
};
