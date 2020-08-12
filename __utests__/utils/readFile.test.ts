import { configureCtxMock } from "../mocks/context.mock";
import { FILE_PATH } from "../../src/utils/constants";

describe("Unit tests suite for testing readPartnersFile function", () => {
    let readPartnersFileTest: any;
    let ctx: any;
    let remotePartnersCoordinates = {};
    let nearbyPartnersCoordinates = {};

    beforeAll(() => {
        readPartnersFileTest = require("../../src/utils/readFile").readPartnersFile;
        ctx = configureCtxMock();

        remotePartnersCoordinates = { latitude: "42.1268151", longitude: "24.7234766" };
        nearbyPartnersCoordinates = { latitude: "42.6264989", longitude: "23.4097679" };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should return empty array because something went wrong when reading the partners file", async () => {
        // Act
        const result = await readPartnersFileTest(undefined, ctx.log, ctx.reqId);
        // Assert
        expect(result).toEqual([]);
    });

    test("should return array from type PartnerInfo[] containing a couple of partner names, coordinates, etc", async () => {
        // Act
        const result = await readPartnersFileTest(`${process.cwd()}${FILE_PATH}`, ctx.log, ctx.reqId);
        // Assert
        expect(result).toBeTruthy();
        expect(result.length).toEqual(32); // The count of all partners (despite their location) is 32
    });
});
