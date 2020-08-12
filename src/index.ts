import * as http from "http";
import * as REST from "./rest";
import * as constants from "../src/utils/constants";

function startService() {
    const server: http.Server = REST.main();
    const port: number = constants.APP_PORT;

    console.info(`Starting server on port ${port}...`);
    server.listen(port);

    console.info(`Application started. Please, navigate to ${constants.HOSTNAME}:${port}/sendInvitations
    in order to see a list with nearby people which will be invited to the party.`);
}

startService();
