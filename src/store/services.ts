import axios, { AxiosResponse } from "axios";
import { ILocation } from "model/ILocation";

interface IAddresses {
  pickup: string;
  dropoff: string;
}

const api = axios.create({
  baseURL: process.env.STUART_API_URL,
});

const geocode = (address: string): Promise<AxiosResponse<ILocation>> => {
  return api.post("/geocode", {
    address,
  });
};

const createJob = (addresses: IAddresses): Promise<AxiosResponse<any>> => {
  return api.post("/jobs", {
    addresses,
  });
};

export default {
  geocode,
  createJob,
};
