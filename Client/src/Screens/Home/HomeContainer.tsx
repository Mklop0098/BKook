
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";
import {Home} from "./Home";
import { Text, View } from "react-native";

export const HomeContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);
  
  return (
    <>
      <Home data={data} isLoading={isLoading} />
    </>
  )
};
