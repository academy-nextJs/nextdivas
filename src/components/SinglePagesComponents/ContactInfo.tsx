"use client";

import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Jane Cooper",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    deposit: "50,000,000 تومان",
    rent: "5,000,000 تومان",
  },
];

export default function ContactInfo() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  return (
    <ul role="list" className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-[#393939] text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-white">
              {person.name}
            </h3>
            <div className="mt-2 text-sm text-white">
              <p>{date}</p>
              <p>{time}</p>
            </div>
            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <div className="flex flex-row-reverse justify-between">
                <span className="font-medium text-white">:رهن</span>
                <span className="text-white">{person.deposit}</span>
              </div>
              <div className="flex flex-row-reverse justify-between">
                <span className="font-medium text-white">:اجاره</span>
                <span className="text-white">{person.rent}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 p-4">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-[#8CFF45] px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
              Email
            </a>
            <a
              href={`tel:${person.telephone}`}
              className="inline-flex items-center justify-center rounded-md border border-white text-white  px-4 py-2 text-sm font-medium  shadow-sm hover:bg-gray-900"
            >
              <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
              Call
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
