const fs = require('fs');
const path = require('path');
const { genTokens } = require('./gen.js');

const CONFIG_FIGMA_FILE = path.join(
  process.cwd(),
  '.',
  '/packages/ui-theme/src/config.figma.json'
);

function figmaApi() {
  try {
    console.log('CONFIG_FIGMA_FILE: ', CONFIG_FIGMA_FILE);
    fs.access(CONFIG_FIGMA_FILE, fs.F_OK, (err) => {
      if (err) {
        throw new Error(
          `\x1b[31m\n\n❌ Config file was not found!\n\nPlease, create a 'config.figma.json' in the root folder with the FIGMA_APIKEY and FIGMA_ID keys\n\n${err}\n\n`
        );
      }
      fs.readFile(CONFIG_FIGMA_FILE, 'utf8', (err, data) => {
        if (err) throw err;
        const { FIGMA_APIKEY, FIGMA_ID } = JSON.parse(data);
        const FIGMA_OUTDIR = 'tokens';

        if (!FIGMA_APIKEY) {
          console.log('\x1b[31m\n\n❌ No FIGMA_PERSONAL_TOKEN found!\n\n');
          process.exit(0);
        } else if (!FIGMA_ID) {
          console.log('\x1b[31m\n\n❌ No FIGMA_ID found!\n\n');
          process.exit(0);
        } else {
          if (!FIGMA_OUTDIR) {
            console.warn(
              '⚠️ No outdir found, default outdir is `./tokens.json`'
            );
          }

          genTokens(FIGMA_APIKEY, FIGMA_ID, FIGMA_OUTDIR);
        }
      });
    });
  } catch (err) {
    throw new Error(
      `\x1b[31m\n\n❌ Config file was not found!\n\nPlease, create a 'config.figma.json' in the root folder with the FIGMA_APIKEY and FIGMA_ID keys\n\n${err}\n\n`
    );
  }
}

module.exports.figmaApi = figmaApi;
