import { Command, flags } from "@oclif/command";
import axios from "axios";

export default class TellMeAJoke extends Command {
  static description = "it is funny command you will enjoy";

  static flags = {
    help: flags.help({ char: "h" })
  };

  async run() {
    const { args, flags } = this.parse(TellMeAJoke);
    axios
      .get("https://www.programmableweb.com/api/geek-joke-rest-api")
      .then(res => {
        const jokes = res.data;
        var joke = jokes[Math.floor(Math.random() * jokes.length)];
        this.log(joke);
      });
  }
}
