import xmlrpc from 'node-xmlrpc'

const server = xmlrpc.createServer({ host: 'localhost', port: 9090 });

server.on('echo', (err: Error | undefined, params: string[], callback: (err: Error, value: string[]) => void) => {
  console.log('echo method called');
  callback(null, params);
});

server.on('attachmentFile', (err: Error | undefined, params: string[], callback: (err: Error, value: string[]) => void) => {
  console.log('attachmentFile method called');
  console.log(params);
  callback(null, params);
});
