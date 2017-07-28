import * as config from 'config';

class Settings {
  db: string;
  logLevel: string = config.get('logLevel');

  constructor() {
    let host = config.get('mongoDatabase.host');
    let port = config.get('mongoDatabase.port');
    let database = config.get('mongoDatabase.database');
    let username = config.get('mongoDatabase.user');
    let password = config.get('mongoDatabase.password');
    this.db = `mongodb://${username}:${password}@${host}:${port}/${database}`;
  }
}

export const Configuration = new Settings();
