import * as Router from "koa-router";
import * as HttpStatusCodes from "http-status-codes";

import { sendInvitations } from "../app/sendInvitations";

export function createAppRouter(): Router {
    const router: Router = new Router();

    router.get("SendInvitation", "/sendInvitations", async (ctx, next) => {
        try {
            const result = await sendInvitations(ctx);
            ctx.body = result;
            ctx.status = HttpStatusCodes.OK;
        } catch (err) {
            ctx.body = err;
            ctx.status = HttpStatusCodes.INTERNAL_SERVER_ERROR;
        }

        ctx.response.set("Content-Type", "application/json");
    });

    return router;
}
