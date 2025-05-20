import AcceptInfo from "@/components/reserve-house/AcceptInfo";
import PassengerInfo from "@/components/reserve-house/PassengerInfo";
import ReservationDone from "@/components/reserve-house/ReservationDone";
import React from "react";

const page = () => {
  return (
    <div className="grid justify-items-center py-10 max-sm:px-1">
      <main>
        <PassengerInfo />
        {/* <AcceptInfo /> */}
        {/* <ReservationDone /> */}
      </main>
    </div>
  );
};

export default page;
