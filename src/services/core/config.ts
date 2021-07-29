import { TCoreEnvironment } from "@/models/ICore"
import { appEnvironment } from "./app.env"

const appEnv: TCoreEnvironment = 'prod'
export const config = {
    environment: appEnvironment[appEnv],
    version: '0.14.4.894',
    appName: 'Techinsights'
}
