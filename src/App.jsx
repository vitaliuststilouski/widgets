import React, { useState } from 'react';
import {Accordion} from './components/Accordion';
import {Search} from './components/Search';
import { Dropdown } from "./components/Dropdown"

const itemList = [
  {
    mainTitle: "React?",
    detailedContent: "React is React"
  },
  {
    mainTitle: "CS  S?",
    detailedContent: "CSS is CSS"
  },
  {
    mainTitle: "JSX?",
    detailedContent: "JSX is JSX",
  }
];

const options = [
  {
    label: "The color red",
    value: "Red"
  },
  {
    label: "The color yellow",
    value: "Yellow"
  },
  {
    label: "The color pink",
    value: "Pink"
  }
]

export const App = () => {
  const [ selectedColor, setSelectedColor ] = useState(options[0]);

  return <Dropdown selected={selectedColor} optionList={options} onChangeColor={setSelectedColor}/>

  {/*<Search />*/
  }
};
