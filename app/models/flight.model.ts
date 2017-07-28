import { Schema, Document, model }  from 'mongoose';

export interface IFlight {
  icao: string,
  lat: number,
  long: number
}

export interface IFlightModel extends IFlight, Document {

}

const flightSchema: Schema = new Schema({
  icao: String,
  lat: Number,
  long: Number
});

export const FlightModel = model<IFlightModel>('Flight', flightSchema);


