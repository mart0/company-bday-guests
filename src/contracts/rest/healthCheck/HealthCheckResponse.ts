export type HealthCheckResponse = {
    isSuccessful: boolean;
    result: HealthCheckBody;
};

export type HealthCheckBody = {
    version: string;
    source: string;
    message: string;
    error?: string;
};
