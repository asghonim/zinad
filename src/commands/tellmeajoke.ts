import {Command, flags} from '@oclif/command'
const fetch = require('node-fetch')
// import zinad from '../api/zinad'

export default class Tellmeajoke extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  // @ts-ignore
  // @ts-ignore
  async run() {
    // tslint:disable-next-line:no-unused
    const {args, flags} = this.parse(Tellmeajoke)

    // tslint:disable-next-line:no-unused
    // await zinad({
    //   method : 'get',
    //   url: 'api/geek-joke'
    // }).then((response: any) => {
    //   // tslint:disable-next-line:no-empty-line-after-opening-brace
    //   this.log(response.toString())
    // })
    try {
      const response = await fetch('https://www.programmableweb.com/api/geek-joke')
      const joke = await response.json()
      this.log(joke)
    } catch (error) {
      const {response, json} = error
      if (response && response.status && response.statusText && json) {
        this.log(json)
      } else {
        this.log(error)
      }

    }
  }
}
