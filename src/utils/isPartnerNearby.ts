import { SOFIA_LAT, SOFIA_LONG, DEFAULT_RANGE } from "./constants";
import { PartnerInfo } from "../contracts/app/partners";

/**
 * Calculates if a partner is nearby, i.e. within 100km of Sofia office
 * based on given coordinates (Sofia's coordinates and range
 * are constants).
 *
 * DEV NOTE: I would like to thank to Göran Andersson from Sweden for
 * showing me this algorithm. Reference - http://jsfiddle.net/Guffa/57gQa/.
 *
 * @param {PartnerInfo} partnersCoordinates
 */
export function isPartnerNearby({ latitude: lat, longitude: lng }: PartnerInfo) {
    const sofiaCoordinates = { lat: SOFIA_LAT, lng: SOFIA_LONG };
    const ky = 40000 / 360;
    const kx = Math.cos(Math.PI * sofiaCoordinates.lat / 180.0) * ky;
    const dx = Math.abs(sofiaCoordinates.lng - Number(lng)) * kx;
    const dy = Math.abs(sofiaCoordinates.lat - Number(lat)) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= <number>DEFAULT_RANGE;
}
