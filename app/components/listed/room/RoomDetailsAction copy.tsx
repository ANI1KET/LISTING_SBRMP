"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Role } from "@/app/types/types";

interface RoomDetailsActionrProps {
  city: string;
  title: string;
  price: number;
  postedBy: Role;
  ratings: number;
  location: string;
  verified: boolean;
  available: boolean;
  listerName: string;
  primaryContact: string;
  secondaryContact: string;
}

const RoomDetailsAction: React.FC<RoomDetailsActionrProps> = ({
  city,
  title,
  price,
  ratings,
  verified,
  postedBy,
  location,
  available,
  listerName,
  primaryContact,
  // secondaryContact,
}) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-col flex-wrap">
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

              <div className="flex items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
                {location}, {city}
              </div>
            </div>

            <div className="flex gap-3 mr-2">
              <button
                title="Share"
                className="p-2 text-blue-500 hover:bg-blue-50 hover:scale-105 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-4 h-4 mr-1"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {ratings} Rating
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {available ? "Available" : "Occupied"}
              </span>

              {verified && (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  Verified
                </span>
              )}
            </div>

            <div className="text-right bg-green-50 px-4 py-1 rounded-lg border-2 border-green-200">
              <span className="text-2xl font-bold text-green-600">
                ₹&nbsp;{price.toLocaleString()}
              </span>

              <span className="text-gray-500 block text-sm text-center">
                per month
              </span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800">Contact Details</h3>

              <p className="text-sm">
                Listed by {postedBy} • {listerName}
              </p>
            </div>

            <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              <Phone className="h-4 w-4 text-green-600" />
              +977-{primaryContact}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(RoomDetailsAction);
