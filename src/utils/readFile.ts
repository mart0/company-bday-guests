import * as fs from "fs-extra";
import { PartnerInfo } from "../contracts";

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
        content = readFile(filePath, log, requestId);
    } catch (e) {
        log.error("An error occurred while reading the partners file", requestId, e);
        content = [];
    }

    if (!content.length) return [];
    return content;
}

function readFile(filePath: string, log: any, requestId: string, encoding: string = "utf8") {
    let content: string;

    try {
        content = fs.readFileSync(filePath, encoding);
    } catch (e) {
        log.error(`File '${filePath}' doesn't exist.`, requestId);
        content = "";
    }

    // Create an array with all partners or return empty one if
    // the file path wasn't resolved successfuly
    return content !== "" ?
        content.split(/\r?\n/).filter(p => p !== "") :
        [];
}
