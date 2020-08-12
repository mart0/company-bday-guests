import * as http from "http";
import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as koaBunyanLogger from "koa-bunyan-logger";

import { createAppRouter } from "./appRouter";
import { createServiceRouter } from "./serviceRouter";


export function main(): http.Server {
    const app: Koa = new Koa();

    // Main routers
    const appRouter = createAppRouter();
    const serviceRouter = createServiceRouter();

    // Logger middleware
    app.use(koaBunyanLogger())
        .use(koaBunyanLogger.requestIdContext())
    app.use(serviceRouter.routes());

    // Helper middlewares
    app.use(bodyParser());

    app.use(appRouter.routes());

    return http.createServer(app.callback());
}
