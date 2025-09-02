"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { User, Mail, Phone, Check, UserCheck } from "lucide-react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

import { OwnerDetails, RoomWithMedia } from "@/app/types/types";
import { getOwnerDetails } from "./ServerAction/OwnerDetailsSection";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import { Button } from "@/app/components/ui/button";
import { FormField } from "@/app/components/ui/form-field";

interface OwnerDetailsSectionProps {
  id: string | undefined;
  errors: FieldErrors<RoomWithMedia & Partial<OwnerDetails>>;
  register: UseFormRegister<RoomWithMedia & Partial<OwnerDetails>>;
  setValue: UseFormSetValue<RoomWithMedia & Partial<OwnerDetails>>;
}

const OwnerDetailsSection: React.FC<OwnerDetailsSectionProps> = ({
  id,
  errors,
  register,
  setValue,
}) => {
  const [selectedOwnerId, setSelectedOwnerId] = useState<string>("");

  const { data } = useQuery<OwnerDetails[]>({
    queryKey: ["owner_details"],
    queryFn: async () => getOwnerDetails(),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const selectOwnerDetail = (ownerId: string, listerOwnerId: string) => {
    setValue("ownerId", ownerId);
    setValue("listerOwnerId", listerOwnerId);
    setSelectedOwnerId(ownerId);
  };

  const clearOwnerDetails = () => {
    setValue("ownerId", "");
    setValue("listerOwnerId", "");
    setSelectedOwnerId("");
  };

  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg py-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <User className="h-5 w-5" />
          Owner Details
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 space-y-2">
        {(data?.length ?? 0) > 0 && (
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-2 rounded-xl border border-blue-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserCheck className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    Saved Owner Details
                  </h3>

                  <p className="text-sm text-blue-600">
                    {data?.length} saved contacts
                  </p>
                </div>
              </div>

              {selectedOwnerId && (
                <Button
                  size="sm"
                  type="button"
                  variant="outline"
                  onClick={clearOwnerDetails}
                  className="text-orange-600 border-orange-300 hover:bg-orange-50 shadow-sm"
                >
                  Clear Selection
                </Button>
              )}
            </div>

            <div className="flex gap-4 overflow-x-auto">
              {data?.map((detail) => (
                <div
                  key={detail.ownerId}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg group min-w-[220px] flex-shrink-0 ${
                    selectedOwnerId === detail.ownerId
                      ? "border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg ring-2 ring-green-200"
                      : "border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
                  }`}
                  onClick={() =>
                    selectOwnerDetail(detail.ownerId, detail.listerOwnerId)
                  }
                >
                  {selectedOwnerId === detail.ownerId && (
                    <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1.5 shadow-lg">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          selectedOwnerId === detail.ownerId
                            ? "bg-green-100"
                            : "bg-blue-100 group-hover:bg-blue-200"
                        }`}
                      >
                        <User
                          className={`h-4 w-4 ${
                            selectedOwnerId === detail.ownerId
                              ? "text-green-600"
                              : "text-blue-600"
                          }`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate text-sm">
                          {detail.name}
                        </h4>

                        {/* <p className="text-xs text-gray-500">Owner</p> */}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-gray-500 flex-shrink-0" />

                        <span className="text-xs text-gray-700 font-medium">
                          {detail.number}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-gray-500 flex-shrink-0" />

                        <span
                          title={detail.email}
                          className="text-xs text-gray-700 truncate"
                        >
                          {detail.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  {selectedOwnerId === detail.ownerId && (
                    <div className="absolute inset-0 rounded-xl bg-green-500/5 pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-blue-600 bg-blue-100/50 px-3 py-2 rounded-lg inline-block">
                Click on any card to auto-fill the form below
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4 bg-blue-50 p-2 rounded-lg border border-blue-200">
          <div className="bg-white p-4 rounded-lg border border-blue-300">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">
                Are you the owner?
              </span>

              <Switch
                checked={selectedOwnerId ? selectedOwnerId === id : false}
                onCheckedChange={(enabled: boolean) => {
                  if (enabled) {
                    setValue("ownerId", id ?? "");
                    setValue("listerOwnerId", "");
                    setSelectedOwnerId(id ?? "");
                  } else {
                    setValue("ownerId", "");
                    setSelectedOwnerId("");
                  }
                }}
                className="data-[state=checked]:bg-green-600"
              />
            </div>
          </div>

          <div>
            <FormField
              required
              type="text"
              name="ownerId"
              errors={errors}
              label="Owner ID"
              register={register}
              disabled={!!selectedOwnerId}
              placeholder="Enter owner's ID"
              validation={{
                required: "Owner ID is required",
                pattern: {
                  // value: /^[a-f\d]{24}$/i,
                  value: /^[0-9a-fA-F]{24}$/,
                  message: "Enter valid Owner ID",
                },
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OwnerDetailsSection;
