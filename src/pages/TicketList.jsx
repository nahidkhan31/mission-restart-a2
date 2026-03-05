import React from 'react';
import TicketCard from './TicketCard';

const TicketList = ({ tickets, onAddToProgress }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} onAddToProgress={onAddToProgress} />
        ))}
      </div>
        </div>
    );
};

export default TicketList;