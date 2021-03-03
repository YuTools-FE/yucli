#!/usr/bin/env node
const path = require('path');
const fse = require('fs-extra');
const { INJECT_FILES } = require('./constants');

// 获取根目录
function getRootPath() {
    return path.resolve(__dirname, './..');
}

// 获取包的版本
function getPackageVersion() {
    const version = require(path.join(getRootPath(), 'package.json')).version;
    return version;
}

// 输出包的版本
function logPackageVersion() {
    const msg = `yucli version: ${getPackageVersion()}`;
    console.log();
    console.log(msg);
    console.log();
}

exports.logPackageVersion = logPackageVersion;

// 获取文件名
function getDirFileName(dir) {
    try {
        const files = fse.readdirSync(dir);
        const filesToCopy = [];
        files.forEach((file) => {
            if (file.indexOf(INJECT_FILES) > -1) return;
            filesToCopy.push(file);
        });
        return filesToCopy;
    } catch (e) {
        return [];
    }
}
exports.getDirFileName = getDirFileName;