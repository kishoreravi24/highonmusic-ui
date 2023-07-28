import React, { useState, useEffect, createContext } from 'react';

const MyContext = createContext();

const Apiprovider = ({children}) => {
  const [data, setData] = useState([]);
  const songsApiUrl = "http://localhost:5000/songs/getSongs";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(songsApiUrl);
      if (!response.ok) {
        console.log("Network failure");
        return;
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return(
    <MyContext.Provider value={{data,setData}}>
        {children}
    </MyContext.Provider>
  )
};

export {MyContext,Apiprovider};
