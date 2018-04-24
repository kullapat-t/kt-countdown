import React from 'react';
import {EventList} from "./components/EventList";
import {EventPanel} from "./components/EventPanel";
import moment from 'moment';
import Countdown from 'react-countdown-now';

import './countdown.css';

export class CountDown extends React.Component {

  state = {
    rows: [],
    date: moment(),
    name: '',
    desc: ''
  }

  getCountDownTime = (date, daysInHours) => {
    return (
        <Countdown date={date} daysInHours={daysInHours}>
          <span>You are good to go!</span>
        </Countdown>
    )
  }

  handleClick = () => {

    const rows = this.state.rows;
    const date = this.state.date;
    const time = this.getCountDownTime(date.format('L'), false);

    const newRows = [];
    newRows.push([this.state.name, this.state.desc, date.format('ddd, MMM D YYYY'), time]);
    this.setState({rows: [...rows, ...newRows]});
  }
  handleDateChange = (date) => {
    this.setState({ date: date });
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }
  handleDescChange = (event) => {
    this.setState({ desc: event.target.value });
  }

  render() {
    return (
        <table className='CountDown'>
          <tbody>
          <tr>
            <td className="CountDown-head">
              <EventList rows={this.state.rows}/>
            </td>
            <td className="CountDown-records">
              <EventPanel
                  name={this.state.name}
                  date={this.state.date}
                  desc={this.state.desc}
                  handleClick={this.handleClick}
                  handleDateChange={this.handleDateChange}
                  handleNameChange={this.handleNameChange}
                  handleDescChange={this.handleDescChange}
              />
            </td>
          </tr>
          </tbody>
        </table>
    )
  }
}
