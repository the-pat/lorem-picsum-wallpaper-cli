import test from 'ava';
import execa from 'execa';

test('run the cli', async t => {
    await execa.stdout('./cli.js', {cwd: __dirname});
    t.pass();
});