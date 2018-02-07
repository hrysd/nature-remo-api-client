import {Request} from './request';
import {
    User,
    Device,
    Appliance,
    Signal,
    Response
} from './interfaces';

export class NatureRemoApiClient {
  token: string;
  request: Request;

  constructor(token: string) {
      this.token = token;
      this.request = new Request(token);
  }

  me(): Promise<Response<User>> {
      return this.request.get<User>('/users/me');
  }

  devices(): Promise<Response<Device[]>> {
      return this.request.get<Device[]>('/devices');
  }

  appliances(): Promise<Response<Appliance[]>> {
      return this.request.get<Appliance[]>('/appliances');
  }

  appliancesSignals(applianceId: string): Promise<Response<Signal[]>> {
      return this.request.get<Signal[]>(`/appliances/${applianceId}/signals`);
  }
}
