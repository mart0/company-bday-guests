export function configureCtxMock() {
    return {
        log: {
            info: jest.fn(),
            error: jest.fn(),
            warn: jest.fn()
        },
        hostname: "localhost",
        path: "/some/path",
        reqId: "someRequestId"
    };
}