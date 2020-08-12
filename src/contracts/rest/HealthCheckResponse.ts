export type HealthCheckResponse = {
    isSuccessful: boolean;
    result: HealthCheckBody;
};

type HealthCheckBody = {
    version: string;
    source: string;
    message: string;
    requestId: string;
    error?: string;
};
