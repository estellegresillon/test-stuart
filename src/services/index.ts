import axios from "axios";
import { ILocation } from "model/ILocation";

interface IAddresses {
  pickup: string;
  dropoff: string;
}

const api = axios.create({
  baseURL: process.env.STUART_API_URL,
});

const geocode = (address: string, callback: (value: ILocation) => void) => {
  return api
    .post("/geocode", {
      address,
    })
    .then((res) => callback(res.data))
    .catch(() => callback({ status: "error" }));
};

const createJob = (addresses: IAddresses) => {
  return api.post("/jobs", {
    addresses,
  });
};

export default {
  geocode,
  createJob,
};
