export type PartnerInfo = {
    latitude: string;
    longitude: string;
} & InvitedPartner;

export type InvitedPartner = {
    name: string;
    partner_id: number;
};