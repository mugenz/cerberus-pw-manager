import React, { useState, useEffect } from "react";
import MainContext from "./main-context";
import { getAllMethod } from "../helpers/services";

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState({
    records: [],
    modalOpen: false,
    modalData: {},
    editMode: false,
    showPassword: false,
  });

  useEffect(() => {
    let mounted = true;

    getAllMethod("http://localhost:3030/passwords/get")
      .then((result) => {
        if (mounted) {
          setData({ ...data, records: result });
        }
      })
      .catch((err) => console.log(err));

    return () => {
      mounted = false;
    };
  }, []);

  console.log(data);
  return (
    <MainContext.Provider value={{ data, setData }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
