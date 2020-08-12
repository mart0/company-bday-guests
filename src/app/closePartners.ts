import { PartnerInfo } from "../contracts/app/partners";
import { isPartnerNearby } from "../utils";

/**
 * Fetches a list with a partners which will attend the birthday, i.e.
 * are within 100km from Sofia's office.
 *
 * It also uses isPartnerNearby() which calculates partner's coordinates.
 *
 * @param {PartnerInfo[]} partners
 */
export async function findClosePartners(partners: PartnerInfo[]) {
    const closePartners = [] as PartnerInfo[];

    partners.forEach(partner => {
        const partnerJson = JSON.parse(partner.toString()) as PartnerInfo;
        if (isPartnerNearby(partnerJson)) {
            closePartners.push(partnerJson);
        }
    });

    return closePartners;
}
