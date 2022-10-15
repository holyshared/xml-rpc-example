import xmlrpc from 'node-xmlrpc'
import { XmlRpcClientAdapter } from "./adapters/xml-rpc-client-adapter"
import { WebApiClient } from "./web-api-client"

export const createClient = () => new WebApiClient(
  new XmlRpcClientAdapter(
    xmlrpc.createClient({ 
      url: 'http://localhost:9090'
    }
  ))
);
