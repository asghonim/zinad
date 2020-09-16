import { Command, flags } from "@oclif/command";
import axios from "axios";

export default class Tellmeajoke extends Command {
  static description = "Fetch a random joke (Most likely a Chuck Norris joke)";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { args, flags } = this.parse(Tellmeajoke);

    this.fetchMeAJoke();
  }

  /**
   * Fetches a random joke
   */
  fetchMeAJoke() {
    axios
      .get("https://geek-jokes.sameerkumar.website/api")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }
}
