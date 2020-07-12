import {expect, test} from '@oclif/test'

describe('tellmeajoke', () => {
  test
  .nock('https://www.programmableweb.com/api/geek-joke ', api => api
    .get('')
    .reply(200, {joke: ''})
  )
  .stdout()
  .stderr()
  .command(['tellmeajoke'])
  .it('shows user email when logged in', ctx => {
    expect(ctx.stderr).to.contain('here is a joke')
  })

  test

  .nock('https://www.programmableweb.com/api/geek-joke ', api => api
    .get('')
    .reply(401)
  )
  .stderr()
  .command(['tellmeajoke'])
  .exit(100)
  .it('exits with status 500 when server error', ctx => {
    expect(ctx.stderr).to.contain('geek joke')
  })
})
