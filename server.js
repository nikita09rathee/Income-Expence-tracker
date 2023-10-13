const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require("cors");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: 'http://localhost:4200', // Update with your Angular app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Allow credentials
};

server.use(cors(corsOptions));
server.options("*", cors()); // Respond to OPTIONS requests
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
