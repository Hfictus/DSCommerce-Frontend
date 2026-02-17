

import axios from "axios";
import QueryString from "qs";
import type { AccessTokenPayloadDTO, CredentialsDTO, RolesEnum } from "../models/auth";
import * as accessTokenRepository from '../localstorage/access-token-repository';
import jwtDecode from "jwt-decode";


export function loginRequest(loginData: CredentialsDTO) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    url: "/.netlify/functions/login",
    data: requestBody,
    headers,
    withCredentials: false
  });
}



export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

export function getAccessToken() {
    return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        const token = accessTokenRepository.get();
        return token == null
        ? undefined
        : (jwtDecode(token) as AccessTokenPayloadDTO);
    } catch (error) {
        return undefined;
    }
}

export function isAuthenticated(): boolean {
    let tokenPayload = getAccessTokenPayload();
    if(tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
        return true;
    }
    return false;
}

export function hasAnyRoles(roles: RolesEnum[]): boolean {
    if(roles.length === 0) {
        return true;
    }
    const tokenPayload = getAccessTokenPayload();
    if(tokenPayload !== undefined) {
        for(let i = 0; i < roles.length; i++) {
            if(tokenPayload.authorities.includes(roles[i])) {
                return true;
            }
        }
        //ou -for, +return roles.some(role => tokenData.authorities.includes(role));
    }

    return false;
}