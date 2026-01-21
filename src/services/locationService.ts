import { apiGet } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export interface StateItem {
    id?: number | string;
    name: string;
    state_name?: string;
    title?: string;
    plate_code?: number | string;
    fips_code?: number | string;
}

interface StatesResponse {
    data?: StateItem[];
    states?: StateItem[];
    results?: StateItem[];
    items?: StateItem[];
}

export async function fetchStates(
    countryId: number = 225,
    limit: number = 1000,
    offset: number = 0
): Promise<StateItem[]> {
    const query = `?country_id=${countryId}&limit=${limit}&offset=${offset}`;
    const response = await apiGet<StatesResponse>(`${API_ENDPOINTS.LOGISTICS_STATES}${query}`);

    const rawList = response.states || response.data || response.results || response.items || [];

    const normalized = (Array.isArray(rawList) ? rawList : [])
        .map((item) => ({
            id: item.id,
            plate_code: item.plate_code,
            fips_code: item.fips_code,
            name: (item.name || item.state_name || item.title || '').trim(),
        }))
        .filter((item) => item.name.length > 0);

    const parseNumber = (value: number | string | undefined) => {
        if (value === undefined || value === null) return Number.NaN;
        const num = typeof value === 'number' ? value : parseInt(String(value).trim(), 10);
        return Number.isFinite(num) ? num : Number.NaN;
    };

    return normalized.sort((a, b) => {
        const fipsA = parseNumber(a.fips_code);
        const fipsB = parseNumber(b.fips_code);

        if (!Number.isNaN(fipsA) && !Number.isNaN(fipsB)) {
            return fipsA - fipsB;
        }

        const plateA = parseNumber(a.plate_code ?? a.id);
        const plateB = parseNumber(b.plate_code ?? b.id);

        if (!Number.isNaN(plateA) && !Number.isNaN(plateB)) {
            return plateA - plateB;
        }

        return a.name.localeCompare(b.name, 'tr');
    });
}

