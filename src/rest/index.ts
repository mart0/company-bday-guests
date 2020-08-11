import * as http from "http";
import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";

import { createAppRouter } from "./appRouter";
import { createServiceRouter } from "./serviceRouter";


export function main(): http.Server {
    const app: Koa = new Koa();
    const appRouter = createAppRouter();
    const serviceRouter = createServiceRouter();

    app.use(serviceRouter.routes());

    app.use(bodyParser());
    app.use(appRouter.routes());

    return http.createServer(app.callback());
}
