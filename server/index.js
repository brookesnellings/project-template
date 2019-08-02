const app = require('./app.js');

const host = process.env.host || '0.0.0.0';
const port = process.env.port || '3000';

app.listen(port, host, () => {
  console.log(`Shenanigans happening on aisle ${port}`);
});
