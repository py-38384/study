import React, { useState } from 'react'
import data from './data'

const Accordian = () => {
  const [select, setSelect] = useState(null)
  const handleSingleSelection = (getCurrentID) => {
    setSelect(getCurrentID)
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map(dataItem => {
          dataItem && dataItem.length > 0? 
          <div className='item'>
            <div className="title">
              <h3>{dataItem.question}</h3>
            </div>
          </div>
          :<div>Data is not found</div>
        })}
      </div>
    </div>
  )
}

export default Accordian