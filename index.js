import server from "./src";
require("dotenv").config();

server.listen(process.env.PORT, () => {
  console.log(`🚀 [Server]: Running on port ${process.env.PORT}`);
});
