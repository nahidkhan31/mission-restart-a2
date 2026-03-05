import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TaskStatus = ({ inProgressTickets, resolvedTickets, onMarkAsResolved }) => {
    return (
        <aside className="w-">
      <section className="task-status-section bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Task Status</h3>
        <p className="text-sm text-gray-400 mb-6">Select a ticket to add to Task Status</p>
        
        {inProgressTickets.length === 0 ? (
          <p className="text-sm text-gray-400 italic text-center py-4 bg-gray-50 rounded-lg">No tickets added yet.</p>
        ) : (
          <div className="space-y-3">
            {inProgressTickets.map((ticket) => (
              <div key={ticket.id} className="p-4 bg-white border border-gray-200 rounded-xl shadow-inner">
                <p className="text-sm font-semibold text-gray-700 mb-3">{ticket.title}</p>
                <button 
                  onClick={() => onMarkAsResolved(ticket.id)}
                  className="btn btn-block btn-sm btn-success bg-green-600 hover:bg-green-700 text-white rounded-lg normal-case"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="resolved-task-section bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Resolved Task</h3>
        <p className="text-sm text-gray-400 mb-6">Recently resolved tickets</p>

        {resolvedTickets.length === 0 ? (
          <p className="text-sm text-gray-400 italic text-center py-4 bg-gray-50 rounded-lg">No resolved tasks yet.</p>
        ) : (
          <div className="space-y-2">
            {resolvedTickets.map((ticket) => (
              <div key={ticket.id} className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-blue-900 font-medium">{ticket.title}</span>
              </div>
            ))}
          </div>
        )}
      </section>

    </aside>
    );
};

export default TaskStatus;