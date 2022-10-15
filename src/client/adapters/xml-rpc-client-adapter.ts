import xmlrpc from 'node-xmlrpc'
import { RpcApiClient } from '../rpc-api-client'

export class XmlRpcClientAdapter implements RpcApiClient {
  constructor(private client: xmlrpc.Client) {
  }

  public async echo(values: string[]): Promise<string[]> {
    return new Promise<string[]>((resolve: (values: string[]) => void, reject: (err: Error) => void) => {
      this.client.methodCall('echo', values, (err: Error, values: string[]) => {
        if (err) {
          return reject(err)
        }
        resolve(values)
      })
    })
  }

  public async attachmentFile(values: any[]): Promise<any[]> {
    return new Promise<any[]>((resolve: (values: any[]) => void, reject: (err: Error) => void) => {
      this.client.methodCall('attachmentFile', values, (err: Error, values: any[]) => {
        if (err) {
          return reject(err)
        }
        resolve(values)
      })
    })
  }
}
