import { apiPost } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export interface HelpRequestPayload {
    name: string;
    email: string;
    message: string;
}

export interface HelpResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        created_at: string;
    };
}

export async function submitHelpRequest(payload: HelpRequestPayload): Promise<HelpResponse> {
    return apiPost<HelpResponse>(API_ENDPOINTS.HELP_SEND, payload);
}
