"use client";

import {
  Car,
  Home,
  Wifi,
  Bike,
  Sofa,
  Waves,
  Trees,
  House,
  Flame,
  Droplet,
  Factory,
  DoorOpen,
  Snowflake,
  ShowerHead,
  ArrowUpDown,
  Refrigerator,
  FlameKindling,
  WashingMachine,
  BatteryCharging,
} from "lucide-react";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { cn } from "@/app/lib/utils";
import { useImageModalControl } from "./hooks";
import { ListedRoom, RoomAmenities } from "@/app/types/types";

import RoomImageModal from "@/app/components/listed/room/RoomImageModal";
import RoomDetailsMain from "@/app/components/listed/room/RoomDetailsMain";
import RoomAmenitiesLayout from "@/app/components/listed/room/RoomAmenities";
import RoomDetailsAction from "@/app/components/listed/room/RoomDetailsAction";
import OptimizedRoomGallery from "@/app/components/listed/room/OptimizedRoomGallery";

const Room = () => {
  const queryClient = useQueryClient();

  const roomData = queryClient.getQueryData<ListedRoom>([
    "CategoryDetails",
    "room",
  ]) as ListedRoom;

  const { open, next, prev, close, isOpen, currentIndex } =
    useImageModalControl(roomData.photos.length);

  const amenityIcons: Record<string, React.ElementType> = {
    WIFI: Wifi,
    SOFA: Sofa,
    POOL: Waves,
    GARDEN: Trees,
    AC: Snowflake,
    TERRACE: House,
    "CAR PARK": Car,
    CHIMNEY: Factory,
    "BIKE PARK": Bike,
    BALCONY: DoorOpen,
    LIFT: ArrowUpDown,
    GEYSER: ShowerHead,
    OVEN: FlameKindling,
    FRIDGE: Refrigerator,
    "FIRE SAFETY": Flame,
    "24/7 WATER": Droplet,
    "POWER BACKUP": BatteryCharging,
    "WASHING MACHINE": WashingMachine,
  };

  const getAmenityIcon = (amenity: RoomAmenities, size: number) => {
    const Icon = amenityIcons[amenity.toUpperCase()] || Home;
    return <Icon size={size} />;
  };

  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div
            style={{ animationDelay: "100ms" }}
            className="overflow-hidden shadow-2xl border border-green-100/50 rounded-3xl bg-white/95 backdrop-blur-sm hover:shadow-green-200/40 transition-shadow duration-300 animate-fade-in"
          >
            <OptimizedRoomGallery
              title={roomData.title}
              onImageModalOpen={open}
              photos={roomData.photos}
              videos={roomData.videos}
            />
          </div>

          <div
            style={{ animationDelay: "200ms" }}
            className={cn("grid gap-3 animate-fade-in grid-cols-1")}
          >
            <div className={cn("col-span-1")}>
              <div className="space-y-8">
                <RoomDetailsAction
                  city={roomData.city}
                  title={roomData.title}
                  price={roomData.price}
                  ratings={roomData.ratings}
                  postedBy={roomData.postedBy}
                  location={roomData.location}
                  verified={roomData.verified}
                  listerName={roomData.listerName}
                  primaryContact={roomData.primaryContact}
                  secondaryContact={roomData.secondaryContact}
                />

                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-100/50 overflow-hidden hover:shadow-green-200/40 transition-all duration-300">
                  <RoomDetailsMain
                    hall={roomData.hall}
                    bedroom={roomData.bedroom}
                    kitchen={roomData.kitchen}
                    bathroom={roomData.bathroom}
                    roomType={roomData.roomType}
                    direction={roomData.direction}
                    minCapacity={roomData.minCapacity}
                    maxCapacity={roomData.maxCapacity}
                    description={roomData.description}
                    furnishingStatus={roomData.furnishingStatus}
                  />
                </div>

                <RoomAmenitiesLayout
                  amenities={roomData.amenities}
                  getAmenityIcon={getAmenityIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <RoomImageModal
        onNext={next}
        onPrev={prev}
        isOpen={isOpen}
        onClose={close}
        title={roomData.title}
        photos={roomData.photos}
        currentImageIndex={currentIndex}
      />
    </div>
  );
};

export default Room;
