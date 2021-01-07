import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    type: null,
    text: null,
    number: null,
    found: null,
    status: "idle",
  });

  useEffect(() => {
    setState({ data: null, status: "pending" });
    fetch(url)
      .then((data) => data.json())
      .then((fact) => {
        if (fact.text.toLowerCase().includes("invalid type")) {
          setState({
            status: "rejected",
            found: false,
            text: "There was an error trying to receive this fact. Try again!",
          });
        } else {
          setState({
            type: fact.type,
            text: fact.text,
            number: fact.number,
            found: fact.found,
            status: "resolved",
          });
        }
      });
  }, [url]);

  return state;
};
