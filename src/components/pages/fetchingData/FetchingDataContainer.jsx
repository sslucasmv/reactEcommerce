import { useEffect, useState } from "react";
import { FetchingData } from "./FetchingData";

export const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getData = fetch("https://jsonplaceholder.typicode.com/users");

    getData
      .then((data) => data.json())
      .then((res) => {
        // guardo en mi variable users la respuesta
        setUsers(res);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  const updateUser = () => {
    let obj = {
      phone: "2236833606",
    };

    let tarea = fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "PATCH",
      body: JSON.stringify(obj),
    });
    tarea
      .then((res) => {
        console.log("respuesta ", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <FetchingData updateUser={updateUser} />
    </div>
  );
};
