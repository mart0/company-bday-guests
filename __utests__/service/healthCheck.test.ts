import * as pkg from "pjson";

import { APP_NAME } from "../../src/utils/constants";
import { configureCtxMock } from "../mocks/context.mock";

describe("Unit tests suite for testing processHealthCheck function", () => {
    let processHealthCheckTest: any;
    let ctx: any;

    beforeAll(() => {
        processHealthCheckTest = require("../../src/service/healthCheck").processHealthCheck;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should return a successful response containing app version, app name, reqId and harcoded message", async () => {
        // Arrange 
        ctx = configureCtxMock();
        // Act
        const result = await processHealthCheckTest(ctx);
        // Assert
        expect(result).toBeDefined();
        expect(result).toEqual({
            isSuccessful: true,
            result: {
                version: pkg.version,
                source: APP_NAME,
                requestId: "someRequestId",
                message: "It's alive!"
            }
        });
    });
});
