import React from 'react';
import Ticket from './Ticket';
import PropTypes from "prop-types";
import TicketDetail from './TicketDetail';



function TicketList(props) {
  return (
    <React.Fragment>

      {Object.values(props.ticketList).map((ticket) => {
        return <Ticket
          whenTicketClicked={props.onTicketSelection}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id} />
      })}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default TicketList;