/**
 * This is an auxiliary wrapper around the DateRangePicker from the react-dates
 * package. It takes care about focus management and styling, leaving for the
 * parent component to deal with the dates handling in the same way the wrapped
 * DateRangePicker demands to do it. I.e. you should pass in via 'startDate' and
 * 'endDate' properties the dates to show in the component (both should be
 * instances of the MomentJS object), and it triggers the callback provided via
 * the 'onDatesChanged' property, if any, passing in the object having
 * 'startDate' and 'endDate' fields the user wants to set.
 */

import React from 'react';
import { DateRangePicker as WrappedDateRangePicker } from 'react-dates';

class DateRangePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  };

  render() {
    return (
      <WrappedDateRangePicker
        focusedInput={this.state.focusedInput}
        isOutsideRange={() => false}
        onDatesChange={this.props.onDatesChange}
        onFocusChange={focusedInput => { this.setState({ focusedInput }); }}
        startDate={this.props.startDate}
        endDate={this.props.endDate}
      />
    );
  };
};

export default DateRangePicker;
