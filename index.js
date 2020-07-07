// const welcomRouter = require("");

const server = require("./server");

const PORT = process.env.PORT || 5001;

// server.use("", welcomRouter);

server.listen(PORT, () => console.log(`\n** Running on port ${PORT} **\n`));
