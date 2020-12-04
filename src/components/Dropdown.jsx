import React from "react";

export const Dropdown = ({optionList, selected, onChangeColor}) => {
  const renderedOptions = optionList.map(optionItem => {
    if (optionItem.value === selected.value) {
      return null
    };
    return <div key={optionItem.value} className="item" onClick={() => onChangeColor(optionItem)}>
      {optionItem.value}
    </div>
  })
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition"></div>
          {renderedOptions}
        </div>
      </div>
    </div>
  )
}