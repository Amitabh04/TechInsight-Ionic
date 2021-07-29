import { ICoreAppEnvironment, TCoreEnvironment } from "@/models/ICore";

export const appEnvironment: Record<TCoreEnvironment, ICoreAppEnvironment> = {
    prod: {
        LOCAL_SERVER_PATH: "https://www.amdocs-ti.com",
        NOTIFICATIONS_SOCKET_HOST: "https://notifications.amdocs-ti.com/",
        ASSETS_SERVER_PATH: "https://tiassets.amdocs-ti.com/production/",
        ENVIRONMENT: "P"
    },
    dev: {
        LOCAL_SERVER_PATH: "http://dev.techinsights.com",
        NOTIFICATIONS_SOCKET_HOST: "http://dev.techinsights.com:3001",
        ASSETS_SERVER_PATH: "http://dev.techinsights.com",
        ENVIRONMENT: "L"
    },
    proxy: {
        LOCAL_SERVER_PATH: "http://192.168.1.10:8080/techinsights",
        NOTIFICATIONS_SOCKET_HOST: "http://192.168.1.10:3001",
        ASSETS_SERVER_PATH: "http://192.168.1.10:8080/techinsights",
        ENVIRONMENT: "LP"
    },
    test: {
        LOCAL_SERVER_PATH: "https://test.amdocs-ti.com",
        NOTIFICATIONS_SOCKET_HOST: "https://testn.imnos-ti.com/",
        ASSETS_SERVER_PATH: "https://tiassets.imnos-ti.com/cicd-staging/",
        ENVIRONMENT: "T"
    },
    jumpbox: {
        LOCAL_SERVER_PATH: "https://jumpbox.amdocs-ti.com",
        NOTIFICATIONS_SOCKET_HOST: "https://notifications.imnos-ti.com/",
        ASSETS_SERVER_PATH: "https://tiassets.imnos-ti.com/production/",
        ENVIRONMENT: "D"
    }
}