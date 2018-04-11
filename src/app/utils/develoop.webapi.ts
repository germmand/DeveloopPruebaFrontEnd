export const BaseUrl: string = "http://localhost:61487/";

export function getFullPath(uriPath: string): string {
    return BaseUrl + uriPath;
}