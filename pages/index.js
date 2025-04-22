import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const path = path.join(process.cwd(), 'data','data.json');
  const fileData = fs.readFileSync(path ,'utf-8');
  const finalData = JSON.parse(fileData);
}