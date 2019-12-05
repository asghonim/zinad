import {Command, flags} from '@oclif/command';
import { request } from 'http';

export default class TellMeAJoke extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(TellMeAJoke)
    
    const req = request(
      {
        host: 'https://geek-jokes.sameerkumar.website/api',
        path: '',
        method: 'GET',
      },
      response => {
        this.log(response.statusCode); // 200
      }
    );
     
    req.end();
  }
}



 

