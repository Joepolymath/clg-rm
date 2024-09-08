const path = require('path');
const fs = require('fs');

/**
 * @description to recursively get all js and ts files within the directory
 * @param {*} dir
 */
function getFilesRecursively(dir) {
  let allJsAndTsFiles = [];
  const allFilesInDirectory = fs.readdirSync(dir);

  allFilesInDirectory.forEach((file) => {
    const excludedDirs = [
      'node_modules',
      'clg-rm.js',
      'getFiles.js',
      // 'index.js',
      'remove-logs.js',
      '__tests__',
      '.git',
    ];
    if (!excludedDirs.includes(file)) {
      const fullPath = path.join(dir, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
        allJsAndTsFiles = allJsAndTsFiles.concat([
          ...getFilesRecursively(fullPath),
        ]);
      } else if (/\.(js|ts)$/.test(fullPath)) {
        allJsAndTsFiles.push(fullPath);
      }
    }
  });

  return allJsAndTsFiles;
}

module.exports = getFilesRecursively;
