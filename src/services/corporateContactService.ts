import { apiPost } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export interface CorporateContactRequestPayload {
    name: string;
    business_name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface CorporateContactResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        created_at: string;
    };
}

export async function submitCorporateContact(
    payload: CorporateContactRequestPayload
): Promise<CorporateContactResponse> {
    return apiPost<CorporateContactResponse>(API_ENDPOINTS.CORPORATE_CONTACT_SEND, payload);
}

