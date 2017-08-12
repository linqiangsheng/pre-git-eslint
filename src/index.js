import 'babel-polyfill';
import path from 'path';
import fs from 'fs';
import {readFile, writeFile} from './fsHelper.js';

const PRECOMMIT = path.resolve(__dirname, '../pre-commit.sh');

// will be installed at `node_modules`
const root = path.resolve(__dirname, '..', '..', '..');

//拷贝pre-commit文件
let main = async () => {
	try {
		const preCommitPath = `${path.resolve(root, '.git/hooks')}/`;
		const preCommitFile = `${preCommitPath}pre-commit`;
		const data = await readFile(PRECOMMIT);
		if (fs.existsSync(preCommitFile)) {
			const oldData = await readFile(preCommitFile);
			await writeFile(preCommitFile + '.old', oldData);
		} else if (!fs.existsSync(preCommitPath)){
			fs.mkdirSync(preCommitPath);
		}
		await writeFile(preCommitFile, data);
	} catch (error) {
		console.log(`Git pre-commit set up fail due to : ${error}`);
	}
}

main();