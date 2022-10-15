import fs from "fs";
import path from "path";
import { createClient } from "../src/client";

const main = async () => {
  const client = createClient();
  const res1 = await client.echo(['test1', 'test2', 'test3']);
  console.log(res1);

  const file = fs.readFileSync(path.resolve(__dirname, '../../scripts/example.txt'));
  const res2 = await client.attachmentFile({
    name: 'examle.txt',
    file,
  });
  console.log(res2);
}

main().then(() => {
  console.log('done');
}).catch(err => {
  console.log(err);
});
