import { FILE_PATH } from "../../src/utils/constants";
import { unsuccessfulResponse } from "../../src/utils";
import { configureCtxMock } from "../mocks/context.mock";

describe("Unit tests suite for testing sendInvitations function", () => {
    let sendInvitationsTest: any;
    let ctx: any;
    const basePath: string = "/__utests__/data/";

    beforeAll(() => {
        sendInvitationsTest = require("../../src/app/sendInvitations").sendInvitations;
        ctx = configureCtxMock();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should return an unsuccessful response because the passed path leads to non-existent file", async () => {
        // Arrange
        FILE_PATH = undefined;
        // Act
        const result = await sendInvitationsTest(ctx);
        // Assert
        expect(result).toBeDefined();
        expect(result).toEqual(unsuccessfulResponse);
    });

    test("should return an unsuccessful response because no nearby partners were found", async () => {
        // Arrange
        FILE_PATH = `${basePath}noNearbyPartners.json`;
        // Act
        const result = await sendInvitationsTest(ctx);
        // Assert
        expect(result).toBeDefined();
        expect(result).toEqual(unsuccessfulResponse);
    });

    test("should return successful response with ordered by partner_id guests", async () => {
        // Arrange
        FILE_PATH = `${basePath}nearbyPartners.json`;
        // Act
        const result = await sendInvitationsTest(ctx);
        // Assert
        expect(result).toBeDefined();
        expect(result.length).toEqual(3);
        expect(result).toEqual([
            { name: "Jamelia Waller", partner_id: 1 },
            { name: "Gracie-Leigh Mccallum", partner_id: 3 },
            { name: "Margot Mckay", partner_id: 5 }
        ]);
    });
});
