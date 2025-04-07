import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Players2() {
  const [formData, setFormData] = useState({ id: 1, name: '', sscore: '',balance: '', image: null });
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Populate table with existing data on component mount
    renderData();
  }, []);
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('userData1')) || [];
    const lastId = existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
    setFormData(prevFormData => ({ ...prevFormData, id: lastId + 1 }));
  }, [userData]);

  const handleInputChange = (event) => {
    if (event.target.name === 'image') {
      setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { id, name, sscore,balance, image } = formData;
    if (name && sscore &&balance && image) {
      const reader = new FileReader();
      reader.onload = () => {
        // Add data to localStorage
        const newData = { id, name, sscore,balance, image: reader.result };
        const existingData = JSON.parse(localStorage.getItem('userData1')) || [];
      existingData.push(newData);
      localStorage.setItem('userData1', JSON.stringify(existingData));

      // Update state, auto-increment id, and clear form fields
    existingData.sort((a, b) => a.id - b.id);

      setUserData(existingData);
      setFormData({ ...formData, id: id + 1, name: '', sscore: '',balance: '', image: null  });
    };
    reader.readAsDataURL(image); 
    } else {
      alert('Please enter name, email, and select an image.');
    }
  };

  const renderData = () => {
    const existingData = JSON.parse(localStorage.getItem('userData1')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData(existingData);
  };

  const deleteData = (id) => {
    const newData = userData.filter(item => item.id !== id);
    localStorage.setItem('userData1', JSON.stringify(newData));
    setUserData(newData);
  };

  const editData = (id) => {
    const newData = userData.find(item => item.id === id);
    if (newData) {
      setFormData({ ...formData, id: newData.id, name: newData.name, sscore: newData.sscore, balance: newData.balance });
      deleteData(id);
    }
  };
  let navgate = useNavigate()

  const onRedirect = (e) => {
  navgate(`/${e}`) 
  }

  return (
    <div>
      <label><h1>Sidebar</h1></label>
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
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="sscore">Skil score:</label>
      <input  id="sscore" name="sscore" value={formData.sscore} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="balance">Balance:</label>
      <input  id="balance" name="balance" value={formData.balance} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" accept="image/*" onChange={handleInputChange} required  /><br /><br />
      <button type="submit">Add</button>
    </form>

    <table id="dataTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>S Score</th>
          <th>Balance</th>
          <th>Profile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.sscore}</td>
            <td>{item.balance}</td>
            <td>
              <img src={item.image} alt="User" style={{ width: '50px', height: '50px',borderRadius:"50%" }} />
              </td>
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

export default Players2;
