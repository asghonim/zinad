
import {Command, flags} from '@oclif/command'

export default class tellmeajoke extends Command {
  static description = 'Get random joke'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(tellmeajoke)

    var request = require('request');
request('https://geek-jokes.sameerkumar.website/api', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    this.log(body) 
  }
})
  }
}
