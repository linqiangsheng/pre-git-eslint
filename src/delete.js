import 'babel-polyfill';
import path from 'path';
import fs from 'fs';
import {readFile, writeFile} from './fsHelper.js';

// will be installed at `node_modules`
const root = path.resolve(__dirname, '..', '..', '..');

//拷贝pre-commit文件
let main = async () => {
	try {
		const preCommitPath = `${path.resolve(root, '.git/hooks')}/`;
		const preCommitFile = `${preCommitPath}pre-commit`;
		const preCommitOldFile = `${preCommitFile}.old`;
		if (fs.existsSync(preCommitFile)) {
			await fs.unlinkSync(preCommitFile);
		}
		if (fs.existsSync(preCommitOldFile)){
			await fs.renameSync(preCommitOldFile, preCommitFile);
		}
	} catch (error) {
		console.log(`Git pre-commit delete fail due to : ${error}`);
	}
}

main();