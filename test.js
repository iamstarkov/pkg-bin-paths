import test from 'ava';
import pkgBinPaths from './index';

test('string', t => t.deepEqual(
  pkgBinPaths({ bin: './cli.js' }),
  ['./cli.js']
));

test('object', t => t.deepEqual(
  pkgBinPaths({ bin: { one: './one.js', two: './two.js' } }),
  ['./one.js', './two.js']
));

test('invalid pkg.bin', t => t.throws(() => { pkgBinPaths({ bin: 2 }); }, TypeError));
test('invalid pkg.bin.item', t => t.throws(() => { pkgBinPaths({ bin: { one: 2 } }); }, TypeError));
test('empty input', t => t.throws(() => { pkgBinPaths(); }, TypeError));
test('invalid input', t => t.throws(() => { pkgBinPaths(2); }, TypeError));
