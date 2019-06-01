import React from 'react';
import Autocomplete from './components/Autocomplete'
import apiData from './data/data.js'
import './App.css';

const onChange = value => {
  console.log(value)
}

function App() {

	const {
		data
	} = apiData

  return (
    <div className="app">
    	<div className="container">
      	<Autocomplete 
          data={data} 
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default App;
