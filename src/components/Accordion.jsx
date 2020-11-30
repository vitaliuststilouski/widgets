import React, {useState} from 'react';

export const Accordion = ({items}) => {
  const [numb, setNumb] = useState(null)
  const handleClick = (index) => {
    setNumb(index)
  }

  const renderedItems = items.map((item, showIndex) => {
    const activeClass = numb === showIndex ? 'active' : '';

    return <React.Fragment key={item.mainTitle}>
      <div className={`title ${activeClass}`} onClick={() => handleClick(showIndex)}>
        <i className="dropdown icon"></i>
        {item.mainTitle}
      </div>
      <div className={`content ${activeClass}`}>
        <p>{item.detailedContent}</p>
      </div>
    </React.Fragment>
  })

  return <div className="ui styled accordion">{renderedItems}</div>
}