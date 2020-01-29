import {expect, test} from '@oclif/test'

describe('whoareyou', () => {
  test
    .stdout()
    .command(['whoareyou'])
    .it('runs whoareyou', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['whoareyou', '--name', 'jeff'])
    .it('runs whoareyou --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
