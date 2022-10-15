import xmlrpc from 'node-xmlrpc'

const server = xmlrpc.createServer({ host: 'localhost', port: 9090 });

server.on('echo', (err: Error | undefined, params: string[], callback: (err: Error, value: any) => void) => {
  console.log('echo method called');
  callback(null, params[0]);
});
