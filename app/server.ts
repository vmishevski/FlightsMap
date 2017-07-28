import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as winston from 'winston';
import { Configuration } from './settings/configuration';
import { FlightsRouter } from './controllers/flights.controller';

import './db/db';

console.log('loglevel', Configuration.logLevel);
// (<any>winston).level = Configuration.logLevel;
winston.configure({
  level: Configuration.logLevel,
  transports: [new winston.transports.Console()]
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  winston.debug('debug', 'request received');
  next();
});

app.get('/', (req, res) => {
  res.json('Hello world!');
});

app.use('/', FlightsRouter);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  winston.debug('server listening on port ', port);
});
