const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions extends RequestInit {
    asJson?: boolean;
}

async function request<T>(path: string, method: HttpMethod, options: RequestOptions = {}): Promise<T> {
    

    const { asJson = true, headers, body, ...rest } = options;

    const finalHeaders: HeadersInit = {
        ...(asJson && !(body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
    };

    const response = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: finalHeaders,
        body,
        ...rest,
    });

    const contentType = response.headers.get('Content-Type') || '';
    const isJson = contentType.includes('application/json');

    if (!response.ok) {
        if (isJson) {
            try {
                const errorData = await response.json() as { message?: string; success?: boolean };
                const errorMessage = errorData.message || `HTTP error ${response.status}`;
                const error = new Error(errorMessage);
                (error as any).response = errorData;
                throw error;
            } catch (parseError) {
                // If JSON parsing fails, fall back to text
                const errorText = await response.text().catch(() => '');
                throw new Error(`HTTP error ${response.status}: ${errorText}`);
            }
        } else {
            const errorText = await response.text().catch(() => '');
            throw new Error(`HTTP error ${response.status}: ${errorText}`);
        }
    }

    if (isJson) {
        return response.json() as Promise<T>;
    }

    return response.text() as unknown as T;
}

export function apiGet<T>(path: string, options?: RequestOptions) {
    return request<T>(path, 'GET', { ...options, method: 'GET' });
}

export function apiPost<T>(path: string, body?: unknown, options?: RequestOptions) {
    const payload =
        body instanceof FormData
            ? body
            : body != null
            ? JSON.stringify(body)
            : undefined;

    return request<T>(path, 'POST', { ...options, body: payload });
}

export function apiPut<T>(path: string, body?: unknown, options?: RequestOptions) {
    const payload =
        body instanceof FormData
            ? body
            : body != null
            ? JSON.stringify(body)
            : undefined;

    return request<T>(path, 'PUT', { ...options, body: payload });
}

export function apiDelete<T>(path: string, options?: RequestOptions) {
    return request<T>(path, 'DELETE', options);
}

