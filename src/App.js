// src/App.js
import React from 'react';
import 'antd/dist/antd.css';
import MainTable from './MainTable';
import LineGraph from './LineGraph';
import ChatApp from './ChatApp';




const App = () => {
  return (
    <div className="App">
      <LineGraph />
      <MainTable />
      <ChatApp />
    </div>
  );
};

export default App;
