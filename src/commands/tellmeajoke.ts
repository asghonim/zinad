import {Command, flags} from '@oclif/command'


export default class tellmeajoke extends Command {
 

  async run() {
 
    try {
      //let {body: joke} = await this
      const {args, flags} = this.parse(tellmeajoke)
    } catch (err) {
      throw err
    }
  }

  notloggedin() {
    this.error('not logged in', {exit: 100})
  }
}
