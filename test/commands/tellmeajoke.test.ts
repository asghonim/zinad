import {expect, test} from '@oclif/test'

describe('tellmejoke', () => {
  test
  .stdout()
  .command(['tellmejoke'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['tellmejoke', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
