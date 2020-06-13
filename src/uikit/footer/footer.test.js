import React from "react";
import Render from 'react-test-renderer';
import Footer, { handleRemoveCategory, handleCategory, concatDataArray, groubArray } from './Footer';

  const dataCategoryDummy = ["Grass", "Poison", "Fire", "Flying", "Water", "Bug"]
  const dataDummy = [
    {
      "id": "UG9rZW1vbjowMDE=",
      "name": "Bulbasaur",
      "number": "001",
      "classification": "Seed Pokémon",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "attacks": {
        "fast": [
          {
            "name": "Tackle",
            "type": "Normal",
            "damage": 12
          },
          {
            "name": "Vine Whip",
            "type": "Grass",
            "damage": 7
          }
        ],
        "special": [
          {
            "name": "Power Whip",
            "type": "Grass",
            "damage": 70
          },
          {
            "name": "Seed Bomb",
            "type": "Grass",
            "damage": 40
          },
          {
            "name": "Sludge Bomb",
            "type": "Poison",
            "damage": 55
          }
        ]
      },
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "fleeRate": 0.1,
      "maxCP": 951,
      "evolutions": [
        {
          "id": "UG9rZW1vbjowMDI=",
          "number": "002"
        },
        {
          "id": "UG9rZW1vbjowMDM=",
          "number": "003"
        }
      ],
      "evolutionRequirements": {
        "amount": 25,
        "name": "Bulbasaur candies"
      },
      "maxHP": 1071,
      "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
    }
  ]

describe('Home Pokemon', () => {
  const props = {
    dataFilter: dataDummy,
    data: dataDummy,
    setData: jest.fn(),
    category: [],
    setCategory: jest.fn(),
  };

  test('Home Footer Filter By Type Pokemon Snapshoot', () => {
    const component = Render.create(<Footer {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Home Footer Remove Filter Snapshoot', () => {
    const propsManipulate = {
      ...props,
      category: dataCategoryDummy
    }
    const component = Render.create(<Footer {...propsManipulate} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Test Function HandleCategory', () => {
    const setCategory = () => {
      return true
    } 
    const result = handleCategory(dataDummy, setCategory)
    expect(result).toBe(true)
  });

  test('Test Function ConcatDataArray', () => {
    const result = concatDataArray(dataDummy)
    expect(result).toEqual([ 'Grass', 'Poison' ])
  });

  test('Test Function GroubArray', () => {
    const result = groubArray(dataCategoryDummy)
    expect(result).toEqual(dataCategoryDummy)
  });

  test('Test Function HandleRemoveCategory', () => {
    const props = { 
      setData: jest.fn(), 
      dataFilter: dataDummy, 
      setCategory: () => {
        return true
      }
    }
    const result = handleRemoveCategory(props)
    expect(result).toBe(true)
  });

});
