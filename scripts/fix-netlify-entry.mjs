import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist', 'client');
const indexPath = join(distDir, 'index.html');
const assetsDir = join(distDir, 'assets');

const html = readFileSync(indexPath, 'utf8');
const entryAsset = readdirSync(assetsDir)
  .filter((file) => /^index-.*\.js$/.test(file))
  .sort()
  .at(-1);

if (!entryAsset) {
  throw new Error('Could not find a built index asset in dist/client/assets');
}

const updatedHtml = html
  .replace(/src="(?:\.\/)?src\/entry-client\.tsx"/, `src="/assets/${entryAsset}"`)
  .replace(/src="\/src\/entry-client\.tsx"/, `src="/assets/${entryAsset}"`);

writeFileSync(indexPath, updatedHtml);
console.log(`Rewrote deployment entry to /assets/${entryAsset}`);
