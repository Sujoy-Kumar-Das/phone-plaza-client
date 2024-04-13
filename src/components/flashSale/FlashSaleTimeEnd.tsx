"use client";
import { useEffect, useState } from "react";

interface TimeFormat {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function FlashSaleTimeEnd() {
  // states
  const [endTime, setEndTime] = useState<Date | null>(null);

  useEffect(() => {
    const calculateEndTime = (): Date => {
      // present time
      const now = new Date();

      // offer ends time
      const endDate = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate()
      );
      return endDate;
    };

    const timer = setInterval(() => {
      setEndTime(calculateEndTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (endTime: Date | null): TimeFormat => {
    if (!endTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const diff = endTime.getTime() - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  return (
    <div className="flex justify-start lg:justify-end items-center mb-10 w-full lg:w-2/5">
      {endTime && (
        <div className="flex items-center">
          <p className="font-bold mr-2 text-textPrimary">Ends Offer:</p>
          <div className="flex items-center">
            <div className="bg-primary px-3 py-1 text-textPrimary rounded-sm mr-2">
              {`${formatTime(endTime).days > 0 ? formatTime(endTime).days : 0}`}
              d
            </div>

            <div className="bg-primary px-3 py-1 text-textPrimary rounded-sm mr-2">
              {`${
                formatTime(endTime).hours > 0 ? formatTime(endTime).hours : 0
              }`}
              h
            </div>

            <div className="bg-primary px-3 py-1 text-textPrimary rounded-sm mr-2">
              {`${
                formatTime(endTime).minutes > 0
                  ? formatTime(endTime).minutes
                  : 0
              }`}
              m
            </div>

            <div className="bg-primary px-3 py-1 text-textPrimary rounded-sm mr-2">
              {`${
                formatTime(endTime).seconds > 0
                  ? formatTime(endTime).seconds
                  : 0
              }`}
              s
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
