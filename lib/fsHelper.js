'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.writeFile = exports.readFile = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readFile = exports.readFile = function readFile(path) {
	return new Promise(function (resolve, reject) {
		_fs2.default.readFile(path, 'utf8', function (err, data) {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
};

var writeFile = exports.writeFile = function writeFile(path, data) {
	return new Promise(function (resolve, reject) {
		_fs2.default.writeFile(path, data, { mode: '0755' }, function (err) {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
};