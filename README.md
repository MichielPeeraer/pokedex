# Pokedex

A command-line Pokedex application written in TypeScript.

## Features
- Explore and inspect Pokémon using the PokéAPI
- Catch Pokémon and manage your collection
- View a map and explore different locations
- REPL interface for interactive commands

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pokedex.git
   cd pokedex
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Usage
Run the application:
```sh
npm start
```

Or directly with ts-node (if installed globally):
```sh
npx ts-node src/main.ts
```

## Project Structure
- `src/` - Source code

## Commands

| Command                   | Description                                 |
|---------------------------|---------------------------------------------|
| `help`                    | Displays a help message                     |
| `exit`                    | Exit the Pokedex                            |
| `map`                     | Get the next page of locations              |
| `mapb`                    | Get the previous page of locations          |
| `explore <location_name>` | Explore a location                          |
| `catch <pokemon_name>`    | Attempt to catch a pokemon                  |
| `inspect <pokemon_name>`  | View details about a caught pokemon         |
| `pokedex`                 | See all the pokemon you've caught           |

## Testing
Run tests with:
```sh
npm test
```

## License
MIT License.

---

*Created for learning and demonstration purposes.*
