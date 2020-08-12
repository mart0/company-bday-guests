import * as Koa from "koa";
import * as Router from "koa-router";
import * as HttpStatusCodes from "http-status-codes";

import { processHealthCheck } from "../service/healthCheck";


export function createServiceRouter(): Router {
    const router: Router = new Router();

    router.get("/_healthcheck", async (ctx: Koa.Context) => {
        //tslint:disable-next-line:no-any no-unsafe-any
        const res = await processHealthCheck(ctx);

        if (res?.isSuccessful) {
            ctx.status = HttpStatusCodes.OK;
        } else {
            ctx.status = HttpStatusCodes.INTERNAL_SERVER_ERROR;
        }

        ctx.body = res ? res.result : { error: "An error occurred" };
        ctx.response.set("Content-Type", "application/json");
    });

    return router;
}
