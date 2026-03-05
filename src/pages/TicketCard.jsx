import React from "react";
import { ArrowRight, CalendarDays, UserCircle } from "lucide-react";

const TicketCard = ({ ticket, onAddToProgress }) => {
  const priorityColors = {
    HIGH: "text-red-600",
    MEDIUM: "text-orange-500",
    LOW: "text-green-600",
  };

  const getPriorityClass = (priority) =>
    priorityColors[priority] || "text-gray-600";
  const isPending = ticket.status === "New" || ticket.status === "Open";
  return (
    <div className="card bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="card-title text-base font-bold text-gray-800 line-clamp-1">
          {ticket.title}
        </h3>

        <span
          className={`badge badge-sm rounded-full py-1 text-xs font-semibold px-3 flex items-center gap-1.5 ${
            isPending
              ? "badge-success text-white"
              : "bg-yellow-100 text-yellow-700 border-yellow-200"
          }`}>
          <span
            className={`w-1.5 h-1.5 rounded-full ${isPending ? "bg-white" : "bg-yellow-500"}`}></span>
          {ticket.status === "New" ? "Open" : ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-10">
        {ticket.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        <div className="flex items-center gap-4">
          <span className="font-medium text-gray-700">#{ticket.id}</span>

          <span
            className={`font-semibold ${getPriorityClass(ticket.priority)}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <img
              src={ticket.picture}
              alt={ticket.customer}
              className="w-6 h-6 rounded-full object-cover"
            />
            {ticket.customer}
          </span>

          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4 text-gray-400" />
            {ticket.createdAt}
          </span>
        </div>
      </div>

      <div className="card-actions justify-end mt-4">
        <button
          onClick={() => onAddToProgress(ticket)}
          disabled={ticket.status === "In-Progress"}
          className={`btn btn-sm normal-case text-sm rounded-lg flex items-center gap-1 ${
            ticket.status === "In-Progress"
              ? "btn-disabled bg-gray-100 text-gray-400"
              : "btn-ghost text-blue-700 hover:bg-blue-50"
          }`}>
          {ticket.status === "In-Progress" ? (
            "Processing..."
          ) : (
            <>
              Manage Ticket
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
