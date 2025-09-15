import { downloadRemoteFile } from '../modules/downloadRemoteFile.mjs';
import { combineAndMinify } from '../modules/combineAndMinify.mjs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destDir = path.join(__dirname, 'vendor');
const outPath = path.join(__dirname, '../../public/css/third-party-bundle.min.css');

// first download the remote files
let remoteFiles = [
];

let promises = [];
let files = [];

remoteFiles.forEach(url => {
    promises.push(
        downloadRemoteFile(url, destDir)
            .then((filePath) => {
                files.push(filePath);
                console.log('Downloaded to:', filePath)
            })
            .catch(err => console.error('Download failed:', err))
    );
})

Promise.all(promises).then(() => {
    console.log('All downloads complete!');

    console.log('Combining and minifying files...');
    combineAndMinify(files, outPath).then(r => console.log('Minified and combined files to:', r)).catch(err => console.error('Minification failed:', err)).finally(() => console.log('Done, finally!'));
    console.log('Done!');

    process.exit(0);
});
