import React from "react";
import Render from 'react-test-renderer';
import PokemonList from './index';

// {
//   "id": "UG9rZW1vbjowMDE=",
//   "name": "Bulbasaur",
//   "number": "001",
//   "classification": "Seed Pokémon",
//   "types": [
//     "Grass",
//     "Poison"
//   ],
//   "resistant": [
//     "Water",
//     "Electric",
//     "Grass",
//     "Fighting",
//     "Fairy"
//   ],
//   "attacks": {
//     "fast": [
//       {
//         "name": "Tackle",
//         "type": "Normal",
//         "damage": 12
//       },
//       {
//         "name": "Vine Whip",
//         "type": "Grass",
//         "damage": 7
//       }
//     ],
//     "special": [
//       {
//         "name": "Power Whip",
//         "type": "Grass",
//         "damage": 70
//       },
//       {
//         "name": "Seed Bomb",
//         "type": "Grass",
//         "damage": 40
//       },
//       {
//         "name": "Sludge Bomb",
//         "type": "Poison",
//         "damage": 55
//       }
//     ]
//   },
//   "weaknesses": [
//     "Fire",
//     "Ice",
//     "Flying",
//     "Psychic"
//   ],
//   "fleeRate": 0.1,
//   "maxCP": 951,
//   "evolutions": [
//     {
//       "id": "UG9rZW1vbjowMDI=",
//       "number": "002"
//     },
//     {
//       "id": "UG9rZW1vbjowMDM=",
//       "number": "003"
//     }
//   ],
//   "evolutionRequirements": {
//     "amount": 25,
//     "name": "Bulbasaur candies"
//   },
//   "maxHP": 1071,
//   "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
// }

describe('Home Pokemon', () => {
  describe('SnaphShoot Home', () => {
    test('Home Loading', () => {
      const component = Render.create(<PokemonList />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
