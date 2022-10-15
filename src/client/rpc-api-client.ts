export interface RpcApiClient {
  echo(values: string[]): Promise<string>
}
