import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // if the user is logged in, this code will run
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // if the user is not logged in, the code below will run instead
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };
    handleMount();
  }, [history, userAuthStatus]);
};
