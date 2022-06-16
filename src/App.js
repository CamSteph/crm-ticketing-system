import React from "react";
import "./App.css";
// Page imports
import EntryPage from "./pages/entry/EntryPage";
// End Page imports

// Import components
import DefaultLayout from "./layout/DefaultLayout";
// End import components

// Bootstrap imports
import {Button} from 'react-bootstrap';
// End Bootstrap imports

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        Some new text, broski.
      </DefaultLayout>
    </div>
  );
}

export default App;
