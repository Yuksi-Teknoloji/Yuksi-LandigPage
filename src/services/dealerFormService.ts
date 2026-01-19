import { apiPost } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export interface DealerFormRequestPayload {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface DealerFormResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        created_at: string;
    };
}

export async function submitDealerForm(payload: DealerFormRequestPayload): Promise<DealerFormResponse> {
    return apiPost<DealerFormResponse>(API_ENDPOINTS.DEALER_FORM_SEND, payload);
}

