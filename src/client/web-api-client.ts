import { RpcApiClient } from "./rpc-api-client";

export class WebApiClient {
  constructor(private client: RpcApiClient) {
  }

  public async echo(values: string[]): Promise<string[]> {
    return this.client.echo(values);
  }

  public async attachmentFile(values: { name: string, file: Buffer }): Promise<{ name: string, file: Buffer }> {
    const results = await this.client.attachmentFile([
      values.name,
      values.file,
    ])
    return {
      name: results[0],
      file: results[1],
    };
  }
}
