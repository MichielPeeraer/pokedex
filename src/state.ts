import chalk from "chalk";
import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    caughtPokemon: Record<string, Pokemon>;
    pokeAPI: PokeAPI;
    nextLocationsURL?: string;
    prevLocationsURL?: string;
};

export function initState(cacheInterval: number): State {
    return {
        rl: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: chalk.bold.cyan("Pokedex > "),
        }),
        commands: getCommands(),
        caughtPokemon: {},
        pokeAPI: new PokeAPI(cacheInterval),
        nextLocationsURL: undefined,
        prevLocationsURL: undefined,
    };
}
