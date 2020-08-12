import * as config from "config";

// Server related constants
export const HOSTNAME: string = config.get("host") || "http://localhost";
export const APP_NAME: string = config.get("appName") || "company-bday-guests";
export const APP_PORT: number = config.get("appPort") || 3001;

// App related constants
export const SOFIA_LAT: number = Number(config.get("SofiaCoordinates.latitude")) || 42.6665921;
export const SOFIA_LONG: number = Number(config.get("SofiaCoordinates.longtitude")) || 23.351723;
export const DEFAULT_RANGE: number = Number(config.get("defaultRange")) || 100; // in kilometers
export const FILE_PATH: string = config.get("partnersFilePath") || "/src/data/partners.json";
