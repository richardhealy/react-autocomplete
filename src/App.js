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
    	<div className="container">
      	<Autocomplete apiData={data} />
      </div>
    </div>
  );
}

export default App;
