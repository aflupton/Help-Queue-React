import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketInformation =
    <div>
      <style global jsx>{`
        .card {
          background-color: inherit;
          border-width: 1px;
          border-color: #fff;
          opacity: 0.75;
        }
        .card:hover {
          background-color: lightpink;
          color: #fff;
          border-width: 3px;
          opacity: 1;
        }
      `}</style>
      <div className='card'>
        <h3>{props.location} - {props.names}</h3>
        <h4>{props.formattedWaitTime}</h4>
      </div>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onTicketSelection({names: props.names, location: props.location, issue: props.issue, formattedWaitTime: props.formattedWaitTime});}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};
export default Ticket;
