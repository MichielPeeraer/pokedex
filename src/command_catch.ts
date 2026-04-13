import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("You must provide a pokemon name");
    }

    const name = args[0];
    const pokemon = await state.pokeAPI.fetchPokemon(name);

    console.log(`Throwing a Pokeball at ${pokemon.name}...`);

    const catchRate = 1 / (1 + pokemon.base_experience / 100);

    if (Math.random() > catchRate) {
        console.log(`${pokemon.name} escaped!`);
        return;
    }

    console.log(`${pokemon.name} was caught!`);
    console.log("You may now inspect it with the inspect command.");
    state.caughtPokemon[pokemon.name] = pokemon;
}
