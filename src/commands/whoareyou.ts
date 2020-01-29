import {Command, flags} from '@oclif/command'

export default class Whoareyou extends Command {
//   static examples = [
//     `$ whoareyou hello
// hello world from ./src/hello.ts!
// `,
//   ]

  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const { args, flags } = this.parse(Whoareyou);
    this.log('I am ZINAD!')
  }
}
