export enum platformEnum{
    GeneralWeb,
    LinkedIn,
    Instagram,
    Twitter,
    Reddit,
    Facebook
}

export interface SpaceCapsule {
    id: number;
    name: string;
    url: string;
    description?: string;
    platform: platformEnum;
}
