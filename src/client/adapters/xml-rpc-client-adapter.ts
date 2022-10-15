import xmlrpc from 'node-xmlrpc'
import { RpcApiClient } from '../rpc-api-client'

export class XmlRpcClientAdapter implements RpcApiClient {
  constructor(private client: xmlrpc.Client) {
  }

  public async echo(values: string[]): Promise<string> {
    return new Promise<string>((resolve: (value: string) => void, reject: (err: Error) => void) => {
      this.client.methodCall('echo', values, (err: Error, value: string) => {
        if (err) {
          return reject(err)
        }
        resolve(value)
      })
    })
  }
}
