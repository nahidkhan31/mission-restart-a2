import React from 'react';
import { CalendarDays, UserCircle } from 'lucide-react';

const TicketCard = ({ ticket, onAddToProgress }) => {

    const priorityColors = {
    HIGH: 'text-red-600',
    MEDIUM: 'text-orange-500',
    LOW: 'text-green-600'
  };

  const getPriorityClass = (priority) => priorityColors[priority] || 'text-gray-600';
    return (
        <div className="card bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">

      <div className="flex items-center justify-between mb-3">
        <h3 className="card-title text-base font-bold text-gray-800 line-clamp-1">
          {ticket.title}
        </h3>

        <span className="badge badge-sm badge-success rounded-full py-1 text-xs font-semibold px-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          Open
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-10">
        {ticket.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        
        <div className="flex items-center gap-4">
          <span className="font-medium text-gray-700">
            #{ticket.id}
          </span>

          <span className={`font-semibold ${getPriorityClass(ticket.priority)}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-4">

          {/* Customer with avatar */}
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <img
              src={ticket.picture}
              alt={ticket.customer}
              className="w-6 h-6 rounded-full object-cover"
            />
            {ticket.customer}
          </span>

          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4 text-gray-400"/>
            {ticket.createdAt}
          </span>

        </div>
      </div>

      <div className="card-actions justify-end mt-4">
        <button 
          onClick={() => onAddToProgress(ticket)}
          className="btn btn-sm btn-ghost normal-case text-sm text-blue-700 hover:bg-blue-50 rounded-lg"
        >
          Manage Ticket →
        </button>
      </div>

    </div>
    );
};

export default TicketCard;