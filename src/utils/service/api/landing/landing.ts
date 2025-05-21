"use client";
import axiosInstance from "../../interceptor/axiosInstance";

//Offer
export const getOffers = async () => {
  const data = await axiosInstance.get("/houses?transactionType=");
  console.log("تست من :::::", data.data);
  return data.data;
};

//mortgage
export const getMortgage = async () => {
  const data = await axiosInstance.get("/houses?transactionType=mortgage");
  console.log("تست رهن", data.data);
  return data.data;
};

//HouseRent
export const getHouseRent= async () => {
  const data = await axiosInstance.get("/houses?transactionType=rental");
  console.log("تست اجاره", data.data);
  return data.data;
};

//BuyHouse
export const getBuyHouse = async () => {
  const data = await axiosInstance.get("/houses?transactionType=direct_purchase");
  console.log("تست خرید", data.data);
  return data.data;
};