import * as fs from "fs-extra";

import { PartnerInfo } from "../contracts";
import { UTF8_ENCODING } from "../utils/constants";

/**
 * Reads partners file content using fs-extra package.
 * If for some reason file reading was unsuccsessful, return
 * an empty array and log the corresponding error.
 *
 * @param {string} filePath
 * @param {any} log
 * @param {string} requestId
 */
// tslint:disable:no-any
export function readPartnersFile(filePath: string, log: any, requestId: string): PartnerInfo[] {
    let content: any;
    try {
        content = fs.readFileSync(filePath, <string>UTF8_ENCODING);
    } catch (e) {
        log.error(`File '${filePath}' doesn't exist.`, requestId);
        content = "";
    }

    if (!content || !content.length) return [];
    // Create an array with all partners
    return content
        .split(/\r?\n/)
        .filter((p: string) => p !== "");
}

