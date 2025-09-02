"use client";

import React from "react";
import { Home, Users, MapPin, Calendar } from "lucide-react";

import { FurnishingStatus } from "@/app/types/types";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/app/components/ui/card";

interface RoomDetailsMainProps {
  hall: number;
  bedroom: number;
  kitchen: number;
  bathroom: number;
  roomType: string;
  description: string;
  minCapacity: number;
  maxCapacity: number;
  direction: string | null;
  furnishingStatus: FurnishingStatus;
}

const RoomDetailsMain: React.FC<RoomDetailsMainProps> = ({
  hall,
  bedroom,
  kitchen,
  bathroom,
  roomType,
  direction,
  minCapacity,
  maxCapacity,
  description,
  furnishingStatus,
}) => (
  <Card className="shadow-sm border border-gray-200">
    <CardHeader className="bg-gray-50 border-b">
      <CardTitle className="flex items-center gap-3 text-xl">
        <div className="p-2 bg-green-100 rounded-lg">
          <Home className="h-5 w-5 text-green-600" />
        </div>
        Room Details
      </CardTitle>
    </CardHeader>

    <CardContent className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-xl transition-all hover:bg-green-100 hover:scale-105 cursor-pointer">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {bedroom}
          </div>
          <div className="text-sm text-gray-600">
            {bedroom > 1 ? "Bedrooms" : "Bedroom"}
          </div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-xl transition-all hover:bg-green-100 hover:scale-105 cursor-pointer">
          <div className="text-2xl font-bold text-green-600 mb-1">{hall}</div>
          <div className="text-sm text-gray-600">
            {hall > 1 ? "Halls" : "Hall"}
          </div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-xl transition-all hover:bg-green-100 hover:scale-105 cursor-pointer">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {kitchen}
          </div>
          <div className="text-sm text-gray-600">
            {kitchen > 1 ? "Kitchens" : "Kitchen"}
          </div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-xl transition-all hover:bg-green-100 hover:scale-105 cursor-pointer">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {bathroom}
          </div>
          <div className="text-sm text-gray-600">
            {bathroom > 1 ? "Bathrooms" : "Bathroom"}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Room Type", value: roomType, icon: Home },
          {
            icon: Users,
            label: "Capacity",
            value: `${minCapacity} - ${maxCapacity} people`,
          },
          {
            icon: Calendar,
            label: "Furnishing",
            value: furnishingStatus.replace("_", " "),
          },
          { label: "Direction", value: direction, icon: MapPin },
        ].map((item, idx) => (
          <div key={idx} className="p-3 bg-gray-50 rounded-lg">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
              <item.icon className="h-4 w-4 text-green-600" />
              {item.label}
            </label>
            <p className="text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>

      <hr className="my-2" />

      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className={`text-gray-700 leading-relaxed`}>{description}</div>
      </div>
    </CardContent>
  </Card>
);

export default React.memo(RoomDetailsMain);
