import {Command, flags} from '@oclif/command'
import {Http, Response, }  

export default class Tellmeajoke extends Command {
  static description = 'describe the command here'
  
  var jock ="";

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Tellmeajoke)

    
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
    
     this.http.get('https://www.programmableweb.com/api/geek-joke-rest-api')
              .map((res: Response) => res.json())
              .subscribe((res) => {
              // Map the values in the response to useable variables
                  jock = res.jock;
              });
      
      this.log(jock)
    
  }
}
