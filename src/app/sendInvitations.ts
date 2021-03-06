import * as Koa from "koa";

import { readPartnersFile, unsuccessfulResponse } from "../utils";
import { findClosePartners } from "./closePartners";
import { FILE_PATH } from "../utils/constants";
import { InvitedPartner, UnsuccessfulResponse } from "../contracts";

export async function sendInvitations({ log: logger, reqId: requestId }: Koa.Context): Promise<InvitedPartner[] | UnsuccessfulResponse> {
    const allPartners = readPartnersFile(`${process.cwd()}${FILE_PATH}`, logger, requestId);
    if (!allPartners.length) return unsuccessfulResponse;

    const closePartners = await findClosePartners(allPartners);
    if (!closePartners.length) {
        logger.warn("No nearby partners, therefore no invitations will be send", requestId);
        return unsuccessfulResponse;
    }

    // Map only the props we need and sort the partners list by partner_id (ASC)
    return closePartners.map(p => {
        return {
            name: p.name,
            partner_id: p.partner_id
        };
    }).sort((a, b) => a.partner_id - b.partner_id);
}

