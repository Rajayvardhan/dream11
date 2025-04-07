import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Players3() {
  const [formData, setFormData] = useState({ id: 1, contestname: '', prizepool: '',spots: '',entry: '',firstprize: '',trophypercent: '',  });
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Populate table with existing data on component mount
    renderData();
  }, []);
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('contestLD')) || [];
    const lastId = existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
    setFormData(prevFormData => ({ ...prevFormData, id: lastId + 1 }));
  }, [userData]);

  const handleInputChange = (event) => {
    
      setFormData({ ...formData, [event.target.name]: event.target.value });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { id, contestname, prizepool,spots,entry,firstprize,trophypercent } = formData;
    if (contestname&& prizepool&&spots&&entry&&firstprize&&trophypercent) {
     
        // Add data to localStorage
        const newData = { id, contestname, prizepool,spots,entry,firstprize,trophypercent };
        const existingData = JSON.parse(localStorage.getItem('contestLD')) || [];
      existingData.push(newData);
      localStorage.setItem('contestLD', JSON.stringify(existingData));

      // Update state, auto-increment id, and clear form fields
    existingData.sort((a, b) => a.id - b.id);

      setUserData(existingData);
      setFormData({ ...formData, id: id + 1, contestname: '', prizepool: '',spots: '',entry: '',firstprize: '',trophypercent: '',  });
    }
    else {
      alert('Please enter contestname, prizepool,spots,entry,firstprize,trophypercent.');
    }
  };

  const renderData = () => {
    const existingData = JSON.parse(localStorage.getItem('contestLD')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData(existingData);
  };

  const deleteData = (id) => {
    const newData = userData.filter(item => item.id !== id);
    localStorage.setItem('contestLD', JSON.stringify(newData));
    setUserData(newData);
  };

  const editData = (id) => {
    const newData = userData.find(item => item.id === id);
    if (newData) {
      // contestname, prizepool,spots,entry,firstprize,trophypercent
      setFormData({ ...formData, id: newData.id, contestname: newData.contestname, prizepool: newData.prizepool, spots: newData.spots , entry: newData.entry, firstprize: newData.firstprize, trophypercent: newData.trophypercent });
      deleteData(id);
    }
  };
  let navgate = useNavigate()

const onRedirect = (e) => {
navgate(`/${e}`) 
}


  return (
    <div>
      <label><h1>Contest List data</h1></label>
      <div style={{marginBottom:"10px"}}>
<button className='me-2' onClick={() => onRedirect('Players2')}>Form 1</button>
<button className='me-2' onClick={() => onRedirect('Players3')}>Form 2</button>
<button className='me-2' onClick={() => onRedirect('Players4')}>Form 3</button>
<button className='me-2' onClick={() => onRedirect('Players5')}>Form 4</button>
<button className='me-2' onClick={() => onRedirect('Players6')}>Form 5</button>
<button className='me-2' onClick={() => onRedirect('HomeScreen')}>HomeScreen</button>
      </div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input type="number" id="id" name="id" value={formData.id} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="contestname">Contest name:</label>
      <input type="text" id="contestname" name="contestname" value={formData.contestname} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="prizepool">Prize Pool:</label>
      <input  id="prizepool" name="prizepool" value={formData.prizepool} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="spots">Spots:</label>
      <input type="text" id="spots" name="spots" value={formData.spots} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="entry">Entry:</label>
      <input  id="entry" name="entry" value={formData.entry} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="firstprize">First Prize:</label>
      <input type="text" id="firstprize" name="firstprize" value={formData.firstprize} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="trophypercent">Trophy percent:</label>
      <input  id="trophypercent" name="trophypercent" value={formData.trophypercent} onChange={handleInputChange} required /><br /><br />
      <button type="submit">Add</button>
    </form>

    <table id="dataTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Contest Name</th>
          <th>Prize Pool</th>
          <th>Spots</th>
          <th>Entry</th>
          <th>First Prize</th>
          <th>Trophy Percent</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map(item => (
          
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.contestname}</td>
            <td>{item.prizepool}</td>
            <td>{item.spots}</td>
            <td>{item.entry}</td>
            <td>{item.firstprize}</td>
            <td>{item.trophypercent}</td>
            
            <td>
              <button className="edit" onClick={() => editData(item.id)}>Edit</button>
              <button className="delete" onClick={() => deleteData(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Players3;
