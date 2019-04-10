const path = require('path');
const express = require('express');
const nextJS = require('next');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextJS({ dev, dir: './src' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // Static assets
  server.use('/static', express.static(path.join(__dirname, 'src', 'static')));

  // Routes
  server.use(handler);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
  });
});