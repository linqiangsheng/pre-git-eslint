'use strict';

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _fsHelper = require('./fsHelper.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PRECOMMIT = _path2.default.resolve(__dirname, '../pre-commit.sh');

// will be installed at `node_modules`
var root = _path2.default.resolve(__dirname, '..', '..', '..');

//拷贝pre-commit文件
var main = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var preCommitPath, preCommitFile, data, oldData;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						preCommitPath = _path2.default.resolve(root, '.git/hooks') + '/';
						preCommitFile = preCommitPath + 'pre-commit';
						_context.next = 5;
						return (0, _fsHelper.readFile)(PRECOMMIT);

					case 5:
						data = _context.sent;

						if (!_fs2.default.existsSync(preCommitFile)) {
							_context.next = 14;
							break;
						}

						_context.next = 9;
						return (0, _fsHelper.readFile)(preCommitFile);

					case 9:
						oldData = _context.sent;
						_context.next = 12;
						return (0, _fsHelper.writeFile)(preCommitFile + '.old', oldData);

					case 12:
						_context.next = 15;
						break;

					case 14:
						if (!_fs2.default.existsSync(preCommitPath)) {
							_fs2.default.mkdirSync(preCommitPath);
						}

					case 15:
						_context.next = 17;
						return (0, _fsHelper.writeFile)(preCommitFile, data);

					case 17:
						_context.next = 22;
						break;

					case 19:
						_context.prev = 19;
						_context.t0 = _context['catch'](0);

						console.log('Git pre-commit set up fail due to : ' + _context.t0);

					case 22:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined, [[0, 19]]);
	}));

	return function main() {
		return _ref.apply(this, arguments);
	};
}();

main();