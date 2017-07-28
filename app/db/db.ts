import * as mongoose from 'mongoose';
(<any>mongoose).Promise = Promise;
import { Configuration } from '../settings/configuration';
import * as winston from 'winston';

let connection = mongoose.connect(Configuration.db, {useMongoClient: true});

connection.then(() => {
  winston.debug('connection established');
});

connection.catch((err) => {
  winston.error('connection error:', err);
  process.exit(1);
});
