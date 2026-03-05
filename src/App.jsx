import { useEffect, useState } from "react"
import Navbar from "./pages/Navbar"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./pages/Banner";
import TicketList from "./pages/TicketList";
import TaskStatus from "./pages/TaskStatus";

function App() {
  const [allTickets, setAllTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  
useEffect(() => {
    fetch('/public/data.json')
      .then(res => res.json())
      .then(data => setAllTickets(data))
      .catch(err => console.error("Error loading tickets:", err));
  }, []);

  const handleAddToProgress = (ticket) => {
    const isExist = inProgressTickets.find((t) => t.id === ticket.id);
    if (!isExist) {
      setInProgressTickets([...inProgressTickets, ticket]);
      toast.info(`Ticket #${ticket.id} added to In-Progress!`, { position: "top-center" });
    } else {
      toast.warning(`Ticket #${ticket.id} is already in progress!`);
    }
  };

  const handleMarkAsResolved = (ticketId) => {
    const ticketToResolve = inProgressTickets.find((t) => t.id === ticketId);
    setInProgressTickets(inProgressTickets.filter((t) => t.id !== ticketId));
    setResolvedTickets([...resolvedTickets, ticketToResolve]);
    toast.success(`Ticket #${ticketId} marked as Resolved!`, { position: "bottom-right" });
  };
  return (
  
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
          <Navbar/>
          <Banner inProgressCount={inProgressTickets.length} resolvedCount={resolvedTickets.length} />
          <main className="container mx-auto p-4 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        
         <div className="ticket-list-section">
          <TicketList tickets={allTickets} onAddToProgress={handleAddToProgress} />
        </div>

        <div className="status-tracker-section space-y-10">
          <TaskStatus 
            inProgressTickets={inProgressTickets} 
            resolvedTickets={resolvedTickets} 
            onMarkAsResolved={handleMarkAsResolved} 
          />
        </div>
      </main>
      </div>
     

  )
}

export default App
