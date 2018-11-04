const carlo = require('carlo');

(async () => {
  const app = await carlo.launch();

  app.on('exit', () => process.exit());

  app.serveFolder(__dirname);

  await app.exposeFunction('env', _ => process.env);

  await app.load('index.html');
})();
