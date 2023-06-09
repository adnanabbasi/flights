/* tslint:disable */
/* eslint-disable */
import { TimePlaceRm } from './time-place-rm';
export interface FlightRm {
  airlines?: null | string;
  arrival?: TimePlaceRm;
  departure?: TimePlaceRm;
  id?: string;
  price?: null | string;
  remainingNumberOfSeats?: number;
}
