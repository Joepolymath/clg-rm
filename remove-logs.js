const fs = require('fs');

/**
 *
 * @param {string} file
 */
function removeConsoleLogsFromFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const updatedCode = code
    .split('\n')
    .filter((line) => !/console\.log/.test(line))
    .join('\n');
  fs.writeFileSync(filePath, updatedCode);
}

module.exports = removeConsoleLogsFromFile;
