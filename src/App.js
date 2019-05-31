import React from 'react';
import Autocomplete from './components/Autocomplete'
import apiData from './data/data.js'
import './App.css';

function App() {

	const {
		data
	} = apiData

  return (
    <div className="app">
      <Autocomplete apiData={data} />
    </div>
  );
}

export default App;
