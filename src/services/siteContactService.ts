import { apiPost } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export interface SiteContactRequestPayload {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    terms_accepted: boolean;
}

export interface SiteContactResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        created_at: string;
    };
}

export async function submitSiteContact(payload: SiteContactRequestPayload): Promise<SiteContactResponse> {
    return apiPost<SiteContactResponse>(API_ENDPOINTS.SITE_CONTACT_SEND, payload);
}
