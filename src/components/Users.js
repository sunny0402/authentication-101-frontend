import { useState, useEffect } from "react";
// import axios from "../api/axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

// testing useRefreshToken hook
// import useRefreshToken from "../hooks/useRefreshToken";

const Users = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();

  // testing useRefreshToken hook
  // const refresh = useRefreshToken();

  //only run when Users component loads
  useEffect(() => {
    let isMounted = true;

    //for axios, instead of cancelation tokens
    //used to cancel request if component unmounts
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getUsers();

    //clean up function of useEffect ... runs as component unmounts
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => {
            return <li key={i}>{user?.username}</li>;
          })}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
      {/* testing useRefreshToken hook */}
      {/* <button onClick={() => refresh()}>Refresh</button> */}
      <br />
    </article>
  );
};

export default Users;
