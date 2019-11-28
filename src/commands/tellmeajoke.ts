import {Command, flags} from '@oclif/command'
import axios, { AxiosResponse } from 'axios'

export default class TellMeAJoke extends Command {
  static description = 'Tells a random joke from geek-joke api'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(TellMeAJoke)

    this.log("waiting for a joke ... ");
    const joke_response : AxiosResponse = await axios.get("https://geek-jokes.sameerkumar.website/api");
    this.log(joke_response.data);
  }
}
