import { createClient } from "../src/client"

const main = async () => {
  const client = createClient();
  const res = await client.echo(['test1', 'test2', 'test3']);
  console.log(res);
}

main().then(() => {
  console.log('done');
}).catch(err => {
  console.log(err);
});
