import { PartnerInfo } from "../../src/contracts/app/partners";

describe("Unit tests suite for testing findClosePartners function", () => {
    let findClosePartnersTest: any;
    let nearbyPartnersList = [];
    let remotePartnersList = [];
    let nearbyPartnersNames: string[] = [];
    let remotePartnersNames: string[] = [];

    beforeAll(() => {
        findClosePartnersTest = require("../../src/app/closePartners").findClosePartners;

        remotePartnersList = [
            '{ "latitude": "42.1268151", "partner_id": 2, "name": "Devon Mac", "longitude": "24.7234766" }',
            '{ "latitude": "41.9279411", "partner_id": 7, "name": "Lorna Montgomery", "longitude": "25.9083249" }'
        ];

        nearbyPartnersList = [
            '{ "latitude": "42.7034111", "partner_id": 1, "name": "Jamelia Waller", "longitude": "23.4862259" }',
            '{ "latitude": "42.6264989", "partner_id": 3, "name": "Gracie-Leigh Mccallum", "longitude": "23.4097679" }'
        ];

        nearbyPartnersNames = ["Jamelia Waller", "Gracie-Leigh Mccallum"];
        remotePartnersNames = ["Devon Mac", "Lorna Montgomery"];
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should return an empty partners list because all of them are remote", async () => {
        // Act
        const result = await findClosePartnersTest(remotePartnersList);
        // Assert
        expect(result).toBeDefined();
        expect(result.length).toEqual(0);
    });

    test("should filter some of the partners and return a list with close ones", async () => {
        // Act
        const result = await findClosePartnersTest([...remotePartnersList, ...nearbyPartnersList]);
        // Assert
        expect(result).toBeDefined();
        expect(result.length).toEqual(2);
        result.forEach(partner => {
            expect(nearbyPartnersNames.includes(partner.name)).toBeTruthy();
            expect(remotePartnersNames.includes(partner.name)).toBeFalsy();
        });
    });

    test("should return a list with close partners only", async () => {
        // Act
        const result = await findClosePartnersTest(nearbyPartnersList);
        // Assert
        expect(result).toBeDefined();
        expect(result.length).toEqual(2);
    });
});
