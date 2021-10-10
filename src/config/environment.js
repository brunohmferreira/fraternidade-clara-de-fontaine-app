import { getEnvironmentVariables } from "./env";

export function configureEnvironment() {
    let envObject = getEnvironmentVariables();
    return envObject;
}