#!/usr/bin/env node
const fs = require('fs');

const getFilesRecursively = require('./getFiles');
const removeConsoleLogsFromFile = require('./remove-logs');

function main(dir) {
  let target = process.argv[2];

  if (!target) {
    target = dir;
  }

  const targetStats = fs.lstatSync(target);
  if (targetStats.isDirectory()) {
    const files = getFilesRecursively(target);
    files.forEach((file) => {
      removeConsoleLogsFromFile(file);
    });
  } else if (/\.(js|ts)$/.test(target)) {
    removeConsoleLogsFromFile(target);
  } else {
    console.error(`Argument ${target} not a directory`);
    process.exit(1);
  }

  console.info('Files processed');
}

module.exports = main;
