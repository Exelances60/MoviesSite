/* "use client";
import { createContext, useEffect, useState, lazy } from "react";
import PopularMovie from "../app/[locale]/MoviePage/components/PopularMovie/PopularMovie";

export const DenemeContext = createContext();

export const useDenemeContext = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const response = await fetch(
      "https://6440b8a8-99eb-4f30-b015-a484d2a001cb.mock.pstmn.io/denene2"
    );
    const result = await response.json();
    result.data[0].path = "components/PopularMovie/PopularMovie";

    setData(result.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export const ComponentProvider = ({ children }) => {
  const data = useDenemeContext();

  if (!data) {
    return <div>Loading...</div>;
  }

  const Component = lazy(() =>
    import("../app/[locale]/MoviePage/components/PopularMovie/PopularMovie")
  );

  return (
    <DenemeContext.Provider value={{ Component }}>
      {children}
    </DenemeContext.Provider>
  );
}; */
