import React, { useState, useEffect } from 'react';
import './SwitchButton.css';
import profileW from '../../static/media/userwite.jpg';
import profileC from '../../static/media/userColor.jpg';
import { useNavigate } from 'react-router-dom';
function Players6() {
  const [formData, setFormData] = useState({ id: 1, title: '', team1name: '',team2name: '',team1score: '',team2score: '',team1over: '', team2over: '',status: '',wintitle: '',contestwon: '',mycontestnumber: '',myteamsnumber: '',prizewon: '',pointlastupdate: '',prizepool: '',entry: ''});
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Populate table with existing data on component mount
    renderData();
  }, []);
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('contestSData')) || [];
    const lastId = existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
    setFormData(prevFormData => ({ ...prevFormData, id: lastId + 1 }));
  }, [userData]);

  const handleInputChange = (event) => {

      setFormData({ ...formData, [event.target.name]: event.target.value });
   
  
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { id, title, team1name,team2name,team1score,team2score,team1over, team2over,status,wintitle,contestwon,mycontestnumber,myteamsnumber,prizewon,pointlastupdate,prizepool,entry } = formData;
    if (title&& team1name&&team2name&&team1score&&team2score&&team1over&& team2over&&status&&wintitle&&contestwon&&mycontestnumber&&myteamsnumber&&prizewon&&pointlastupdate&&prizepool&&entry) {
      
        // Add data to localStorage
        const newData = { id, title, team1name,team2name,team1score,team2score,team1over, team2over,status,wintitle,contestwon,mycontestnumber,myteamsnumber,prizewon,pointlastupdate,prizepool,entry };
        const existingData = JSON.parse(localStorage.getItem('contestSData')) || [];
      existingData.push(newData);
      localStorage.setItem('contestSData', JSON.stringify(existingData));

      // Update state, auto-increment id, and clear form fields
    existingData.sort((a, b) => a.id - b.id);

      setUserData(existingData);
      setFormData({ ...formData, id: id + 1,title: '', team1name: '',team2name: '',team1score: '',team2score: '',team1over: '', team2over: '',status: '',wintitle: '',contestwon: '',mycontestnumber: '',myteamsnumber: '',prizewon: '',pointlastupdate: '',prizepool: '',entry: ''   });
    
  }
    else {
      alert('Please enter name, team1name,team2name,team1score,team2score.');
    }
  };

  const renderData = () => {
    const existingData = JSON.parse(localStorage.getItem('contestSData')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData(existingData);
  };

  const deleteData = (id) => {
    const newData = userData.filter(item => item.id !== id);
    localStorage.setItem('contestSData', JSON.stringify(newData));
    setUserData(newData);
  };

  const editData = (id) => {
    const newData = userData.find(item => item.id === id);
    if (newData) {
      // title, team1name,team2name,team1score,team2score,team1over, team2over,status,wintitle,contestwon,mycontestnumber,myteamsnumber,prizewon,pointlastupdate,prizepool,entry 
      setFormData({ ...formData, id: newData.id, title: newData.title, team1name: newData.team1name, team2name: newData.team2name , team1score: newData.team1score, team2score: newData.team2score,   team1over: newData.team1over, team2over: newData.team2over, status: newData.status , wintitle: newData.wintitle, contestwon: newData.contestwon,   mycontestnumber: newData.mycontestnumber, myteamsnumber: newData.myteamsnumber, prizewon: newData.prizewon , pointlastupdate: newData.pointlastupdate, prizepool: newData.prizepool, entry: newData.entry });
      deleteData(id);
    }
  };





  const [isChecked, setIsChecked] = useState(false);

  // Handler function to toggle the checked status
  const handleChange = () => {
    setIsChecked(!isChecked);
  };


  let navgate = useNavigate()

  const onRedirect = (e) => {
  navgate(`/${e}`) 
  }


  return (
    <div>
      <label><h1>Contest Screen Data</h1></label>
      <div style={{marginBottom:"10px"}}>
<button className='me-2' onClick={() => onRedirect('Players2')}>Form 1</button>
<button className='me-2' onClick={() => onRedirect('Players3')}>Form 2</button>
<button className='me-2' onClick={() => onRedirect('Players4')}>Form 3</button>
<button className='me-2' onClick={() => onRedirect('Players5')}>Form 4</button>
<button className='me-2' onClick={() => onRedirect('Players6')}>Form 5</button>
<button className='me-2' onClick={() => onRedirect('HomeScreen')}>HomeScreen</button>

      </div>
     {/* <div style={{marginBottom:"10px"}}>
      <lable> Profile Photo:</lable>
     <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="slider"></span>
    </label>
     </div> */}

    <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input type="number" id="id" name="id" value={formData.id} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="team1name">Team 1 name:</label>
      <input  id="team1name" name="team1name" value={formData.team1name} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="team2name">team2name:</label>
      <input type="text" id="team2name" name="team2name" value={formData.team2name} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="team1score">team1score:</label>
      <input  id="team1score" name="team1score" value={formData.team1score} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="team2score">team2score:</label>
      <input type="text" id="team2score" name="team2score" value={formData.team2score} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="team1over">team1over:</label>
      <input type="text" id="team1over" name="team1over" value={formData.team1over} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="team2over">team2over:</label>
      <input  id="team2over" name="team2over" value={formData.team2over} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="status">status:</label>
      <input type="text" id="status" name="status" value={formData.status} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="wintitle">wintitle:</label>
      <input  id="wintitle" name="wintitle" value={formData.wintitle} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="contestwon">contestwon:</label>
      <input type="text" id="contestwon" name="contestwon" value={formData.contestwon} onChange={handleInputChange} required /><br /><br />


      <label htmlFor="mycontestnumber">mycontestnumber:</label>
      <input type="text" id="mycontestnumber" name="mycontestnumber" value={formData.mycontestnumber} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="myteamsnumber">myteamsnumber:</label>
      <input  id="myteamsnumber" name="myteamsnumber" value={formData.myteamsnumber} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="prizewon">prizewon:</label>
      <input type="text" id="prizewon" name="prizewon" value={formData.prizewon} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="pointlastupdate">pointlastupdate:</label>
      <input type="text" id="pointlastupdate" name="pointlastupdate" value={formData.pointlastupdate} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="prizepool">prizepool:</label>
      <input  id="prizepool" name="prizepool" value={formData.prizepool} onChange={handleInputChange} required /><br /><br />
      <label htmlFor="entry">entry:</label>
      <input type="text" id="entry" name="entry" value={formData.entry} onChange={handleInputChange} required /><br /><br />
      
      <button type="submit">Add</button>
    </form>


    <table id="dataTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Players Name</th>
          <th>Team Lable</th>
          <th>team2name</th>
          <th>team1score</th>
          <th>Winning Amount</th>
          <th>user profile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map(item => (
          
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.team1name}</td>
            <td>{item.team1name}</td>
            <td>{item.team1score}</td>
            <td>{item.team2score}</td>
            <td>{item.status}</td>
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
         {/* title, team1name,team2name,team1score,team2score,team1over, team2over,status,wintitle,contestwon,mycontestnumber,myteamsnumber,prizewon,pointlastupdate,prizepool,entry */}
  </div>
  );
}

export default Players6;
