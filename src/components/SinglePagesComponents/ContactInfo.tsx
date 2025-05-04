"use client";

import React from "react";

const ContactInfo = () => {
  return (
    <div className="sm:mr-40 sm:pr-6">
      <h3 className="sr-only">Your information</h3>

      {/* Addresses */}
      <h4 className="sr-only">Addresses</h4>
      <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
        <div>
          <dt className="font-medium text-gray-900">Shipping address</dt>
          <dd className="mt-2 text-gray-700">
            <address className="not-italic">
              <span className="block">Kristin Watson</span>
              <span className="block">7363 Cynthia Pass</span>
              <span className="block">Toronto, ON N3Y 4H8</span>
            </address>
          </dd>
        </div>
        <div>
          <dt className="font-medium text-gray-900">Billing address</dt>
          <dd className="mt-2 text-gray-700">
            <address className="not-italic">
              <span className="block">Kristin Watson</span>
              <span className="block">7363 Cynthia Pass</span>
              <span className="block">Toronto, ON N3Y 4H8</span>
            </address>
          </dd>
        </div>
      </dl>

      {/* Payment info */}
      <h4 className="sr-only">Payment</h4>
      <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
        <div>
          <dt className="font-medium text-gray-900">Payment method</dt>
          <dd className="mt-2 text-gray-700">
            <p>Apple Pay</p>
            <p>Mastercard</p>
            <p>
              <span aria-hidden="true">••••</span>
              <span className="sr-only">Ending in </span>1545
            </p>
          </dd>
        </div>
        <div>
          <dt className="font-medium text-gray-900">Shipping method</dt>
          <dd className="mt-2 text-gray-700">
            <p>DHL</p>
            <p>Takes up to 3 working days</p>
          </dd>
        </div>
      </dl>

      {/* Summary */}
      <h3 className="sr-only">Summary</h3>
      <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
        <div className="flex justify-between">
          <dt className="font-medium text-gray-900">Subtotal</dt>
          <dd className="text-gray-700">$36.00</dd>
        </div>
        <div className="flex justify-between">
          <dt className="flex font-medium text-gray-900">
            Discount
            <span className="ml-2 rounded-full bg-gray-200 py-0.5 px-2 text-xs text-gray-600">
              STUDENT50
            </span>
          </dt>
          <dd className="text-gray-700">-$18.00 (50%)</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium text-gray-900">Shipping</dt>
          <dd className="text-gray-700">$5.00</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium text-gray-900">Total</dt>
          <dd className="text-gray-900">$23.00</dd>
        </div>
      </dl>
    </div>
  );
};

export default ContactInfo;
