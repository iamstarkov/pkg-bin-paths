import test from 'ava';
import { pkgBinPaths, pkgBinPathsAsync } from './index';

test('basic', t => t.is(
  pkgBinPaths('unicorns'),
  'unicorns'
));

test('empty input', t => t.throws(() => { pkgBinPaths(); }, TypeError));
test('invalid input', t => t.throws(() => { pkgBinPaths(2); }, TypeError));

test('async :: basic', async t => t.is(
  await pkgBinPathsAsync('unicorns'),
  'unicorns'
));

test('async :: empty input', t => t.throws(pkgBinPathsAsync(), TypeError));
test('async :: invalid input', t => t.throws(pkgBinPathsAsync(2), TypeError));
