import * as fs from "fs";

export function readJSON(filePath: string): string[] {
    // tslint:disable-next-line:no-any
    let content: any;
    try {
        content = readFile(filePath);
    } catch (e) {
        content = { error: e };
    }

    return content;
}

function readFile(filePath: string, encoding: string = "utf8") {
    // tslint:disable-next-line:no-any
    let content: any = { error: `File '${filePath}' doesn't exist.` };
    if (fs.existsSync(filePath)) {
        try {
            content = fs.readFileSync(filePath, encoding);
        } catch (e) {
            content = { error: e };
        }
    }

    // Create an array with all partners
    return content.split(/\r?\n/);
}