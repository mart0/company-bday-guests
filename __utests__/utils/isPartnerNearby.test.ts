describe("Unit tests suite for testing isPartnerNearby function", () => {
    let isPartnerNearbyTest: any;
    let remotePartnersCoordinates = {};
    let nearbyPartnersCoordinates = {};

    beforeAll(() => {
        isPartnerNearbyTest = require("../../src/utils/isPartnerNearby").isPartnerNearby;

        remotePartnersCoordinates = { latitude: "42.1268151", longitude: "24.7234766" };
        nearbyPartnersCoordinates = { latitude: "42.6264989", longitude: "23.4097679" };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should return true when passed coordinates are within 100km from Sofia", async () => {
        // Act
        const result = await isPartnerNearbyTest(nearbyPartnersCoordinates);
        // Assert
        expect(result).toBeTruthy();
    });

    test("should return false when passed coordinates are not within 100km from Sofia", async () => {
        // Act
        const result = await isPartnerNearbyTest(remotePartnersCoordinates);
        // Assert
        expect(result).toBeFalsy();
    });
});
