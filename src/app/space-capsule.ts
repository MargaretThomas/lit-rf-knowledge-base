export enum groupEnum{
    GroupOne = "group-one",
    GroupTwo = "group-two",
    GroupThree = "group-three",
    GroupFour = "group-four",
    GroupFive = "group-five",
    GroupSix = "group-six",
    GroupSeven = "group-seven"
}

export interface SpaceCapsule {
    id: number;
    name: string;
    url: string;
    description?: string;
    group: groupEnum;
}
