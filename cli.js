#!/usr/bin/env node
import meow from 'meow';
import { fileURLToPath } from 'url';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const prompts = require('prompts');
const packageJson = require('./package.json');
const path = require('path');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const renameFiles = {
//   _gitignore: '.gitignore',
//   'web/_gitignore': 'web/.gitignore'
// };

function copy(src, dest) {
  const stat = statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    copyFileSync(src, dest);
  }
}

function copyDir(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });
  for (const file of readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

const cli = meow(
  `
	Usage
	  $ flatten-sol <filename.sol>

	Options
	  --postfix  Lorem ipsum  [Default: rainbows]

	Examples
	  $ flatten-sol mycontract.sol
`,
  {
    flags: {
      postfix: {
        type: 'string',
        default: 'rainbows'
      }
    }
  }
);

console.log(`Version: ${packageJson.version}`);

(async () => {
  console.log('test')
})();
