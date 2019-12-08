import {Command, flags} from '@oclif/command'
import axios from 'axios'


export default class Whoareyou extends Command {
  static description = 'describe the command here'


  static command = [
    `$getJoke
    from ./src/commands/whoareyou.ts
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(Whoareyou)

    const {data: joke} = await axios.get(`https://geek-jokes.sameerkumar.website/api`)

    this.log(joke)
  }
}
