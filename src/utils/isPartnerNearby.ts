import { SOFIA_LAT, SOFIA_LONG, DEFAULT_RANGE } from "./constants";
import { PartnerInfo } from "../contracts/app/partners";

/**
 * Calculates if a partner is nearby, i.e. within 100km of Sofia office 
 * based on given partner's coordinates (Sofia's coordinates and range
 * are constants).
 * 
 * @param {PartnerInfo} partnersCoordinates
 */
export function isPartnerNearby({ latitude: lat, longitude: lng }: PartnerInfo) {
    const sofiaCoordinates = { lat: SOFIA_LAT, lng: SOFIA_LONG };
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * sofiaCoordinates.lat / 180.0) * ky;
    var dx = Math.abs(sofiaCoordinates.lng - Number(lng)) * kx;
    var dy = Math.abs(sofiaCoordinates.lat - Number(lat)) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= <number>DEFAULT_RANGE;
}