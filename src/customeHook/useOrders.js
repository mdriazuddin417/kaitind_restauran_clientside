import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../component/Loading";

const useOrders = (value) => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery(
    `${value}`,
    async () =>
      await axios.get(`https://kaitind-server.herokuapp.com/${value}`),
  );
  if (isLoading) {
    <Loading />;
  }
  const orders = parts?.data;
  return [orders, refetch, isLoading];
};

export default useOrders;
