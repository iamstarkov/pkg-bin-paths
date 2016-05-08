import R from 'ramda';
import contract from 'neat-contract';

// pkgBinPaths :: Object -> [String]
function pkgBinPaths(pkg) {
  return R.pipe(
    contract('pkg', Object),
    R.prop('bin'),
    R.cond([
      [R.is(String), R.of],
      [R.is(Object), R.pipe(R.values, R.map(contract('pkg.bin.item', String)))],
      [R.T, (item) => { throw new TypeError('`pkg` should be an `Object|String`, but got `' + R.type(item) + '`: ' + item) }]
    ])
  )(pkg);
}

export default pkgBinPaths;
