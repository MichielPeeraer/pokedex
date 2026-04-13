import chalk from "chalk";
import type { State } from "./state.js";

export async function commandHelp(state: State) {
    console.log();
    console.log(chalk.bold.green("Welcome to the Pokedex!"));
    console.log(chalk.bold("Usage:"));
    console.log();
    for (const cmd of Object.values(state.commands)) {
        console.log(`${chalk.yellow(cmd.name)}: ${cmd.description}`);
    }
    console.log();
}
