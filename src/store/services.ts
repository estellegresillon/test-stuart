import axios, { AxiosResponse } from "axios";
import { ILocation, IAddresses } from "model/ILocation";

const api = axios.create({
  baseURL: process.env.STUART_API_URL,
});

const geocode = (address: string): Promise<AxiosResponse<ILocation>> => {
  return api.post("/geocode", {
    address,
  });
};

const createJob = (addresses: IAddresses): Promise<AxiosResponse> => {
  return api.post("/jobs", addresses);
};

export default {
  geocode,
  createJob,
};
