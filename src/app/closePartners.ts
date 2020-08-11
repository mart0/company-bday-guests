import { PartnerInfo } from "../contracts/app/partners";
import { isPartnerNearby } from "../utils";

export async function findClosePartners(partners: string[]) {
    const closePartners = [] as PartnerInfo[];

    partners.forEach(partner => {
        // Filter out invalid parsed partner records
        if (!partner) return;

        const partnerJson = JSON.parse(partner) as PartnerInfo;
        if (isPartnerNearby(partnerJson)) {
            closePartners.push(partnerJson);
        }
    });

    return closePartners;
}
