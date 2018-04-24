import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const EventPanel = (props) => {

  return (
      <div className='EventPanel card card-body bg-light'>
        <h3>Add a new Event</h3>
        <div>
          <input
              value={props.name}
              type="text"
              placeholder="name"
              onChange={props.handleNameChange}
          />
          <input
              value={props.desc}
              type="text"
              placeholder="description"
              onChange={props.handleDescChange}
          />
          <DatePicker
              selected={props.date}
              onChange={props.handleDateChange}
              dateFormat="YYYY/MM/DD"
          />
          <input
              className="btn EventPanel-Add"
              value="Add (+)"
              onClick={props.handleClick}
          />
        </div>
      </div>
  )
}