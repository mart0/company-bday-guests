import { readJSON } from "../utils";
import { findClosePartners } from "./closePartners";
import { FILE_PATH } from "../utils/constants";
import { InvitedPartner } from "../contracts";

export async function sendInvitations(): Promise<InvitedPartner[]> {
    const allPartners = readJSON(`${process.cwd()}${FILE_PATH}`);

    const closePartners = await findClosePartners(allPartners);
    if (!closePartners.length) {
        console.warn("No inviations will be send, no nearby partners");
        return [];
    }

    return closePartners.map(p => {
        return {
            name: p.name,
            partner_id: p.partner_id
        };
    }).sort((a, b) => Number(a.partner_id) - Number(b.partner_id));
}



