export type TCoreEnvironment = 'prod' | 'dev' | 'test' | 'proxy' | 'jumpbox'
export interface ICoreAppEnvironment {
        LOCAL_SERVER_PATH: string
        NOTIFICATIONS_SOCKET_HOST: string
        ASSETS_SERVER_PATH: string
        ENVIRONMENT: "P" | "L" | "LP" | "D"| "T"
}