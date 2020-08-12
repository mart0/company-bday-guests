import * as Router from "koa-router";
import * as HttpStatusCodes from "http-status-codes";

import { sendInvitations } from "../../app/sendInvitations";

let isWorking = false;

export function createAppRouter(): Router {
    const router: Router = new Router();

    router.get("SendInvitation", "/sendInvitations", async (ctx, next) => {
        let isErrorResponse = false;
        let result;

        if (!isWorking) {
            isWorking = true;
            result = await sendInvitations(ctx);
        }

        try {
            ctx.body = result;
            ctx.status = HttpStatusCodes.OK;
        } catch (err) {
            isErrorResponse = true;
            ctx.body = err;
            ctx.status = HttpStatusCodes.INTERNAL_SERVER_ERROR;
        }

        isWorking = false;
        ctx.response.set("Content-Type", "application/json");
    });

    return router;
}
