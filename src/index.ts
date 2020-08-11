import * as http from "http";
import * as REST from "./rest";
import * as constants from "../src/utils/constants";

async function startService() {
    const server: http.Server = REST.main();

    console.info("Starting server...", { port: constants.APP_PORT });
    server.listen(constants.APP_PORT);

    console.info("Application started", { healthCheck: `${constants.HOSTNAME}:${constants.APP_PORT}/_healthcheck` });
}

startService();
