import { backend } from "configuration/backend.root";
import { getFiles } from "templates";
import { writeFiles } from "writeFiles";

const app = async () => {


  const files = await getFiles(backend);

  await writeFiles(backend, files);

  console.log('done');
}

app();
