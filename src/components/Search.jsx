import React, {useState} from "react";

export const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={value}
            onChange={e => setValue((e.target.value))}
            className="input"
          />
        </div>
      </div>
    </div>
  )
}