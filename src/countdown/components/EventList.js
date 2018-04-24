import React from 'react'
import {Event} from "./Event";

export const EventList = (props) => {

  const renderEventTable = (rows) => {
    return (
        <table className="EventList table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time (Days : Hrs : Mins : Secs)</th>
          </tr>
          </thead>
          <tbody>
          {rows.map((r) => (
              <Event name={r[0]} desc={r[1]} date={r[2]} time={r[3]}/>
          ))}
          </tbody>
        </table>
    )
  }

  return (
      <div>
        <h3>Event</h3>
        {renderEventTable(props.rows)}
      </div>
  )
}