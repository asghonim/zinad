import {expect, test} from '@oclif/test'

describe('tellmeajoke', () => {
  test
  .stdout()
  .command(['tellmeajoke'])
  .it('says waiting', ctx => {
    expect(ctx.stdout).to.contain('waiting for a joke ...')
  })
})
