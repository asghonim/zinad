import {Command, flags} from '@oclif/command'
import axios from 'axios'

export default class TellMeAJoke extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ tellmeajoke hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(TellMeAJoke)
    
    axios.get('https://geek-jokes.sameerkumar.website/api').then((response)=>
        console.log(response.data))

    
  }
}
