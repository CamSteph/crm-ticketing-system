import React from "react";
import "./App.css";
// Page imports
import EntryPage from "./pages/entry/EntryPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AddNewTicketPage from "./pages/addNewTickets/AddNewTicketPage";
import TicketListPage from "./pages/ticketList/TicketListPage";
import TicketPage from "./pages/ticketPage/TicketPage";
// End Page imports

// Import components
import DefaultLayout from "./layout/DefaultLayout";
// End import components

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        {/* <DashboardPage/> */}
        {/* <AddNewTicketPage/> */}
        {/* <TicketListPage/> */}
        <TicketPage/>
      </DefaultLayout>
    </div>
  );
}

export default App;
