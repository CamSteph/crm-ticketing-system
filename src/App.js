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
import PrivateRouteComponent from "./components/privateRoutes/PrivateRouteComponent";
// End import components

// Import React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// End import react router

const isAuthenticated = false;
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EntryPage/>}/>
          <Route path='/dashboard' element={<PrivateRouteComponent><DashboardPage/></PrivateRouteComponent>}/>
          <Route path='/add-ticket' element={<PrivateRouteComponent><AddNewTicketPage/></PrivateRouteComponent>}/>
          <Route path='/tickets' element={<PrivateRouteComponent><TicketListPage/></PrivateRouteComponent>}/>
          <Route path='/ticket/:tID' element={<PrivateRouteComponent><TicketPage/></PrivateRouteComponent>}/>
        </Routes>
    </div>
  );
}

export default App;
