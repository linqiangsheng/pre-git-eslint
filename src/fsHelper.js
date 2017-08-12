import fs from 'fs';

export const readFile = path => new Promise((resolve, reject) => {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			reject(err);
			return ;
		}
		resolve(data);
	})
});

export const writeFile = (path, data) => new Promise((resolve, reject) => {
	fs.writeFile(path, data, {mode: '0755'}, (err) => {
		if (err) {
			reject(err);
			return ;
		}
		resolve();
	})
});
