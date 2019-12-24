import * as React from "react";
import { useState } from "react";
import { getTodayEuroRate } from "../api";

export const App = () => {
  const [exRate, setExRate] = useState<any>(0);
  getTodayEuroRate().then(data => {
    console.debug("DEBUG| data, data: ", data);
    setExRate(data);
  });
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 p-5">{exRate.chuyen || "Đang lấy giá"}</div>
    </div>
  );
};
