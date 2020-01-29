import {Command, flags} from '@oclif/command'

import axios from '../../node_modules/axios'

export default class Tellmejoke extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  // get a random joke
  api() {
    axios.get('https://geek-jokes.sameerkumar.website/api')
    .then(res => {
      this.log('joke: ', res.data)
    })
    .catch(err => {
      this.log('AXIOS ERROR: ', err)
    })
  }

  async run() {
    const {args, flags} = this.parse(Tellmejoke)
    this.api()
  }
}
