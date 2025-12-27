

export type RolesEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type CredentialsDTO = {
    username: string;
    password: string;
}


export type AccessTokenPayloadDTO = {
    exp: number;
    username: string;
    authorities: RolesEnum[];
}

