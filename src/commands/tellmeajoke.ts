import {Command, flags} from '@oclif/command'
import axios from 'axios'


export default class tellmeajoke extends Command {
    // the api call 
    joke =() => {
        axios.get('https://geek-jokes.sameerkumar.website/api').then((response)=>
        console.log(response.data)
    )}
  static description = 'joking'
  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(tellmeajoke)

   this.joke()

  }
}