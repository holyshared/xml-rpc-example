export interface RpcApiClient {
  echo(values: string[]): Promise<string[]>
  attachmentFile(values: any[]): Promise<any[]>
}
