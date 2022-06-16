import React from 'react';

// Import components
import HeaderComponent from './partials/HeaderComponent';
import FooterComponent from './partials/FooterComponent';
// End import components
// anther comment to commit

const DefaultLayout = ({children}) => {
  return (
        <div className="default-layout">
            <header className="header">
                <HeaderComponent/>
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">
                <FooterComponent/>
            </footer>
        </div>
  )
}

export default DefaultLayout