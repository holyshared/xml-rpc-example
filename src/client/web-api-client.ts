import { RpcApiClient } from "./rpc-api-client";

export class WebApiClient {
  constructor(private client: RpcApiClient) {
  }

  public async echo(values: string[]): Promise<string> {
    return this.client.echo(values);
  }
}
