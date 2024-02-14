export enum platformEnum{
    GeneralWeb = "GeneralWeb",
    LinkedIn = "LinkedIn",
    Instagram = "Instagram",
    Twitter = "Twitter",
    Reddit = "Reddit",
    Facebook = "Facebook"
}

export interface SpaceCapsule {
    id: number;
    name: string;
    url: string;
    description?: string;
    platform: platformEnum;
}
