import React from 'react';

export const Event = (props) => {
  return (
      <tr className="Event">
        <td>{props.name}</td>
        <td>{props.desc}</td>
        <td className="countdown-time">{props.date}</td>
        <td>{props.time}</td>
      </tr>
  )
}