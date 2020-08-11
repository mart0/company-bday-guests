import * as pkg from "pjson";

import { HealthCheckResponse } from "../contracts";
import { APP_NAME } from "../utils/constants";

export async function processHealthCheck(): Promise<HealthCheckResponse> {
    return {
        isSuccessful: true,
        result: {
            version: pkg.version,
            source: APP_NAME,
            message: "It's alive!"
        }
    };
}
