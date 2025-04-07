import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Players4() {
  const [formData, setFormData] = useState({ id: 1, name: '', teamlable: '',points: '',rank: '',winningamount: '',  });
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Populate table with existing data on component mount
    renderData();
  }, []);
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('playersLD')) || [];
    const lastId = existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
    setFormData(prevFormData => ({ ...prevFormData, id: lastId + 1 }));
  }, [userData]);

  const handleInputChange = (event) => {
    
      setFormData({ ...formData, [event.target.name]: event.target.value });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { id, name, teamlable,points,rank,winningamount } = formData;
    if (name&& teamlable&&points&&rank&&winningamount) {
     
        // Add data to localStorage
        const newData = { id, name, teamlable,points,rank,winningamount };
        const existingData = JSON.parse(localStorage.getItem('playersLD')) || [];
      existingData.push(newData);
      localStorage.setItem('playersLD', JSON.stringify(existingData));

      // Update state, auto-increment id, and clear form fields
    existingData.sort((a, b) => a.id - b.id);

      setUserData(existingData);
      setFormData({ ...formData, id: id + 1, name: '', teamlable: '',points: '',rank: '',winningamount: '',  });
    }
    else {
      alert('Please enter name, teamlable,points,rank,winningamount.');
    }
  };

  const renderData = () => {
    const existingData = JSON.parse(localStorage.getItem('playersLD')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData(existingData);
  };

  const deleteData = (id) => {
    const newData = userData.filter(item => item.id !== id);
    localStorage.setItem('playersLD', JSON.stringify(newData));
    setUserData(newData);
  };

  const editData = (id) => {
    const newData = userData.find(item => item.id === id);
    if (newData) {
      // name, teamlable,points,rank,winningamount
      setFormData({ ...formData, id: newData.id, name: newData.name, teamlable: newData.teamlable, points: newData.points , rank: newData.rank, winningamount: newData.winningamount });
      deleteData(id);
    }
  };
  let navgate = useNavigate()

  const onRedirect = (e) => {
  navgate(`/${e}`) 
  }

  return (
    <div>
      <label><h1>Plyer List data</h1></label>
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
      <label htmlFor="name">Players name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="teamlable">Team Lable:</label>
      <input  id="teamlable" name="teamlable" value={formData.teamlable} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="points">points:</label>
      <input type="text" id="points" name="points" value={formData.points} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="rank">rank:</label>
      <input  id="rank" name="rank" value={formData.rank} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="winningamount">Winning Amount:</label>
      <input type="text" id="winningamount" name="winningamount" value={formData.winningamount} onChange={handleInputChange} required /><br /><br />
     
      <button type="submit">Add</button>
    </form>

    <table id="dataTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Players Name</th>
          <th>Team Lable</th>
          <th>points</th>
          <th>rank</th>
          <th>Winning Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map(item => (
          
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.teamlable}</td>
            <td>{item.points}</td>
            <td>{item.rank}</td>
            <td>{item.winningamount}</td>
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

export default Players4;
