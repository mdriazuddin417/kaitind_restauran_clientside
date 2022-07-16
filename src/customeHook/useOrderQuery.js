import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../component/Loading";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const useOrderQuery = (value) => {
  const [user, loading] = useAuthState(auth);

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery(
    `${value}`,
    async () =>
      await axios.get(`https://kaitind-server.herokuapp.com/${value}`),
  );
  if ((isLoading, loading)) {
    <Loading />;
  }
  const orders = parts?.data;
  return [orders, refetch, isLoading];
};

export default useOrderQuery;
