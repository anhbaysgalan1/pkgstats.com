const path = require('path');
const express = require('express');
const nextJS = require('next');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const NPMService = require('./src/store/services/NPMService');
const npm = require('./services/npm');

const secureRedirect = require('./middleware/secureRedirect');

const app = nextJS({ dev, dir: './src' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // Secure redirect
  if (!dev) {
    server.use(secureRedirect);
  }

  // Favicon
  server.use('/favicon.ico', express.static(path.join(__dirname, 'src', 'static', 'images', 'favicon.ico')));

  // Static assets
  server.use('/static', express.static(path.join(__dirname, 'src', 'static')));

  // server.use((req, res, next) => {
  //   const {
  //     hostname,
  //     protocol,
  //   } = req;

  //   NPMService.origin = `${protocol}://${hostname}:${port}/npm`;

  //   // console.debug(NPMService.origin);

  //   next();
  // });

  // NPM routes
  server.use('/npm', npm);

  // Routes
  server.use(handler);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
  });
});
