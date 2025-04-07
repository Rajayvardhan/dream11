import React, { useState, useEffect } from 'react';

function Players() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Populate table with existing data on component mount
    renderData();
  }, []);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = formData;
    if (name && email) {
      // Add data to localStorage
      const newData = { name, email };
      const existingData = JSON.parse(localStorage.getItem('userData')) || [];
      existingData.push(newData);
      localStorage.setItem('userData', JSON.stringify(existingData));

      //existingData.sort((a, b) => a.id - b.id);
      setUserData(existingData);
      setFormData({ name: '', email: '' });
    } else {
      alert('Please enter name and email.');
    }
  };

  const renderData = () => {
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    setUserData(existingData);
  };

  const deleteData = (name) => {
    const newData = userData.filter(item => item.name !== name);
    localStorage.setItem('userData', JSON.stringify(newData));
    setUserData(newData);
  };

  const editData = (name) => {
    const newData = userData.find(item => item.name === name);
    if (newData) {
      setFormData({ name: newData.name, email: newData.email });
      deleteData(name);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required /><br /><br />
        <button type="submit">Add</button>
      </form>

      <table id="dataTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button className="edit" onClick={() => editData(item.name)}>Edit</button>
                <button className="delete" onClick={() => deleteData(item.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Players;
