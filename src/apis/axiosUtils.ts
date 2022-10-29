import axios, { HeadersDefaults, RawAxiosRequestHeaders } from 'axios';

const createJwtAuthorization = (token: string) => `Bearer ${token}`;

const createAxiosInstance = (
  baseURL: string,
  headers: RawAxiosRequestHeaders | Partial<HeadersDefaults>
) =>
  axios.create({
    baseURL,
    headers,
    timeout: 1000 * 10,
  });

export { createAxiosInstance, createJwtAuthorization };
