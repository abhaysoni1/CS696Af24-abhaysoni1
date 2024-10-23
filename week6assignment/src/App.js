import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CardC from './components/cards/card';
import './App.css';  
import PieChartWidget from './components/cards/Chart';
import PerformanceMetrics from './components/cards/Mertrics';
import Footer from './components/Footer';
const App = () => {

  const cardData = [
    { header: 'Total User', text: '10,245' },
    { header: 'Revenue', text: '$46,578' },
    { header: 'Orders', text: '1234.' },
    { header: 'Conversion Rate', text: '2.3%' },
  ];

  return (
    <div className="layout">
     
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="app-content">
        <div className="app-header">
          <Header />
        </div>
        <div className ="app-card">
        {cardData.map((card, index) => (
          <CardC key={index} header={card.header} text={card.text} />
        ))}
      </div>
       
        <div className="container" style={{ marginTop: '70px' }}>  
          
          <PieChartWidget/>
          <PerformanceMetrics />
        </div>

    
        <Footer/>
      </div>
    </div>
  );
};

export default App;