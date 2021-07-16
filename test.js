const test = require('ava');
const execa = require('execa');

test('main', async (t) => {
  const { stdout } = await execa('./index.js', ['example.sol']);
  console.log(stdout)
  t.is(stdout.indexOf('Success') >= 0, true);
});
