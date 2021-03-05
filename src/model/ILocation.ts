export interface ILocation {
  address?: string;
  longitude?: number;
  latitude?: number;
  status?: string;
}

export interface IAddresses {
  pickup: string;
  dropoff: string;
}
