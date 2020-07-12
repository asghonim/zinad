"use strict";
exports.__esModule = true;
var test_1 = require("@oclif/test");
describe('whoareyou', function () {
    test_1.test
        .stdout()
        .command(['whoareyou'])
        .it('runs hello', function (ctx) {
        test_1.expect(ctx.stdout).to.contain('hello world');
    });
    test_1.test
        .stdout()
        .command(['whoareyou', '--name', 'jeff'])
        .it('runs hello --name jeff', function (ctx) {
        test_1.expect(ctx.stdout).to.contain('hello jeff');
    });
});
