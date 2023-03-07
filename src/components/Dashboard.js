import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
function Dashboard() {

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const handleSearch = (event) => {
   fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&jscmd=data&format=json')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data)
  });
  };

  return (
    <div className="container">
    <Autocomplete
      value={value}
      onChange={event => {
    setValue(event.target.value);
    handleSearch(event);}}
      onSelect={value => setValue(value)}
      items={suggestions}
      getItemValue={item => item.title} // Change this depending on your data structure
      renderItem={(item, isHighlighted) =>
        <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
          {item.title} 
        </div>
      }
    />
  </div>);
}

export default Dashboard;  // <-- Make sure to export the component
