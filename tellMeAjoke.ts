import {Command, flags} from '@oclif/command'
import { request } from 'http'

export default class tellMeAjoke extends Command {

  static description = 'command for retrieving a joke from programmableweb website'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(tellMeAjoke)
    const req = request(
      {
          host: 'programmableweb.com',
          path: '/api/geek-jokes-rest-api',
          method: 'GET',
      },
      response => {
        console.log('response')
      }
    );
    req.end();
  }
}
