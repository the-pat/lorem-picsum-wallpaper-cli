import test from 'ava';
import execa from 'execa';

test(async t => {
    await execa.stdout('./cli.js', {cwd: __dirname});
    t.pass();
});