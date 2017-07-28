import { FlightModel, IFlight } from '../models/flight.model';
import * as winston from 'winston';
import * as express from 'express';

interface Callback<T> {
  (err: any, res?: T): void
}

export class FlightsController {
  get(cb: (err: any, res?: IFlight[]) => void) {
    return FlightModel.find((err, flights) => {
      if (err) {
        return cb(err);
      }

      winston.debug('flights found', flights);

      return cb(null, flights);
    });
  }

  post(flight: IFlight, cb: Callback<string>) {
    let model = new FlightModel(flight);
    return model.save((err) => cb(err, model._id));
  }
}

let ctrl = new FlightsController();
export let FlightsRouter = express.Router();
FlightsRouter.get('/flights', (req, res, next) => {
  ctrl.get((err, flights) => {
    if (err) {
      return next(err);
    }

    res.json(flights);
  });
});

FlightsRouter.post('/flights', (req, res, next) => {
  let flight = req.body;
  winston.debug('got flight request', flight);

  ctrl.post(flight, (err, id) => {
    if (err) {
      return next(err);
    }

    res.json({id});
  });
});
