import dayjs from "dayjs";
import axios from "axios";

const today = dayjs().format("YYYYMMDD");
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = `https://tpb.vn/CMCWPCoreAPI/api/public-service/get-currency-rate?filename=${today}`;
const username = "wpstpb2018";
const password = "WPStpb20181212";
// const auth = "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

export const getTodayEuroRate = () => {
  return axios
    .get(proxyurl + url, {
      auth: {
        username,
        password
      }
    })
    .then(({ data }) => {
      return data.rate_currency.find(
        ({ ten }: { ten: string }) => ten === "Euro"
      );
    });
};
