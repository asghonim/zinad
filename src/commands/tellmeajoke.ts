import {Command, flags} from '@oclif/command'
import { request } from 'http'

export default class Tellmeajoke extends Command {

  static description = 'command is used to retrieve a joke from programmableweb.com'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(Tellmeajoke)
    const req = request(
      {
          host: 'programmableweb.com',
          path: '/api/geek-jokes-rest-api',
          method: 'GET',
      },
      response => {
        console.log(response)
      }
    );
    req.end();
  }
}
 2 
