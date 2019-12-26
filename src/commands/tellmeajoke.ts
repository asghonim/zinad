import {Command, flags} from '@oclif/command'
import * as requestPromise from 'request-promise-native'

export default class Tellmeajoke extends Command {
  static description = 'tell me a joke'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(Tellmeajoke)

    const options = {
      url : 'https://geek-jokes.sameerkumar.website/api',
      json: true
    }
    const joke = await requestPromise.get(options)

    this.log(joke)

  }
}
