import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Response} from './interfaces';

export class Request {
  _request: AxiosInstance;

  constructor(token: string, version: number = 1) {
      this._request = axios.create({
          baseURL: `https://api.nature.global/${version}`
      });

      this._request.defaults.headers = {
          Authorization: `Bearer ${token}`,
          accept: 'application/json'
      }
  }

  public async get<T>(path: string, params?: Object): Promise<Response<T>> {
      const response = await this._request.get<T>(path, params || {});

      return this._processResponse<T>(response);
  }

  private _processResponse<T>(res: AxiosResponse): Promise<Response<T>> {
      return new Promise((resolve, reject) => {
          const {status: statusCode} = res;

          if (res.status > 200) {
              const {message, code} = res.data;

              let error: Error = new Error(`${code}: ${res.data.message}`);

              reject(error);
          } else {
              const response: Response<T> = {
                  statusCode: statusCode,
                  result: res.data
              }

              resolve(response);
          }
      });
  }
}
