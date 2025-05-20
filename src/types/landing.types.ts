import { IconType } from "react-icons";

export interface categoryType {
  id: string;
  name: string;
}

export interface HouseLocationType {
  lat: number;
  lng: number;
}

export interface House {
  id: string;
  title: string;
  address: string;
  photos: [string];
  rate: string;
  price: string;
  tags: [string];
  last_updated: string;
  capacity: number;
  location: HouseLocationType;
  categories: categoryType;
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  transaction_type: string;
  sellerId: string;
  sellerName: string;
  caption: null;
}

export interface CardBodyType {
  title: string;
  address: string;
  rooms: string;
  parking: string;
  bathrooms: string;
  yard_type: string;
  price: string;
  icon1?: any;
  icon2?: any;
  icon3?: any;
  icon4?: any;
}

export interface commentType {
  id: string;
  userFullName: string; // یا user: { fullName: string }
  message: string;
  createdAt: string; // اگر API به شکل created_at ارسال می‌کنه، با Zod یا map تغییرش بده
}
