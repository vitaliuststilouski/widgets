import React, {useState, useEffect} from "react";
import axios from "axios";

export const Search = () => {
  const [value, setValue] = useState("");
  const [dataResult, setDataResult] = useState([]);

  console.log(dataResult)

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: value,
        },
      });

      setDataResult(data.query.search);
    };
    if (value) {
      search();
    }
  }, [value]);

  const renderItems = dataResult.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a href={`http://en.wikipedia/org?curid=${result.pageid}`} className="ui button">
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    )
  })

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
      <div className="ui cellted list">
        {renderItems}
      </div>
    </div>
  )
}