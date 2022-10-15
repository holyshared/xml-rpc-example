import { createClient } from "../src/client"

const main = async () => {
  const client = createClient();
  const res = await client.echo(['test']);
  console.log(res);
}

main().then(() => {
  console.log('done');
}).catch(err => {
  console.log(err);
});
