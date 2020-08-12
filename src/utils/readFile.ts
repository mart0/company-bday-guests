import * as fs from "fs";
import { PartnerInfo } from "src/contracts";

export function readPartnersFile(filePath: string, log: any, requestId: string): PartnerInfo[] {
    // tslint:disable-next-line:no-any
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

    // Create an array with all partners
    return content !== "" ?
        content.split(/\r?\n/).filter(p => p !== "") :
        [];
}