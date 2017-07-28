import * as express from 'express';

let app = express();

let port = process.env.PORT || 8080;

app.use((req, res, next) => {
  console.log('request received');
  next();
});

app.get('/', (req, res) => {
  res.json('Hello world!');
});

app.listen(port, () => {
  console.log('server listening on port ', port);
});
