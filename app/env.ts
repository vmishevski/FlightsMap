import * as winston from 'winston';
import { Configuration } from './settings/configuration';

export default () => {
  winston.configure({
    level: Configuration.logLevel
  });
}
