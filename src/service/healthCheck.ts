import * as pkg from "pjson";
import * as Koa from "koa";

import { HealthCheckResponse } from "../contracts";
import { APP_NAME } from "../utils/constants";

/**
 * This endpoint indicates if the application is up and running.
 * Also prints the current app version and name, requestId and informative message.
 *
 * @param {Koa.Context} ctx
 */
export async function processHealthCheck(ctx: Koa.Context): Promise<HealthCheckResponse> {
    ctx.log.info("Got a request from %s for %s", ctx.hostname, ctx.path);
    return {
        isSuccessful: true,
        result: {
            version: pkg.version,
            source: APP_NAME,
            requestId: <string>ctx.reqId,
            message: "It's alive!"
        }
    };
}
