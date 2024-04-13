import React, { useState } from 'react';
import './RegForm.css';

function Technofest() {
  const [formData, setFormData] = useState({
    schoolName: "",
    name: "",
    studentID: "",
    emiratesID: "",
    grade: "",
    email: "",
    contactNo: "",
    event: [],
    accomodations: "",
    createTeam: "",
    joinTeam: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? (checked ? [...formData.event, value] : formData.event.filter(e => e !== value)) : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  const closeModal = () => {
    setFormData({
      ...formData,
      createTeam: "",
      joinTeam: "",
    });
  };

  const openCreateTeamModal = () => {
    closeModal();
    // Open create team modal
  };

  const openJoinTeamModal = () => {
    closeModal();
    // Open join team modal
  };

  const generateTeamCode = () => {
    const teamCode = Math.floor(1000 + Math.random() * 9000);
    setFormData({
      ...formData,
      createTeam: teamCode.toString(),
    });
  };

  const confirmCreateTeam = () => {
    const { createTeam } = formData;
    // Perform create team logic with createTeam
    closeModal();
  };

  const confirmJoinTeam = () => {
    const { joinTeam } = formData;
    // Perform join team logic with joinTeam
    closeModal();
  };

  const submitForm = (formData) => {
    // Send the form data to the server for processing
    console.log(formData);
  };

  return (
    <div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Technofest for Schools- Registration Page</h1>    
         <h3>School Details</h3>
         <div className="input-group-school">
          <label htmlFor="school-name">School Name:</label>
           <select
            id="school-name"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
            required
           >
            
             <option value="">Select School</option>
             <option value="GEMS">GEMS</option>
             <option value="IHS">IHS</option>
             <option value="DPS">DPS</option>
        
           </select>
        </div>
        <h3>Personal details</h3>
        <div className="input-group-personal">
          <label>
            Participant Name: <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="input-group-personal">
          <label  htmlFor="student-id">
            Student ID: <br />
            <input
              type="text"
              name="name"
              value={formData.studentID}
              onChange={handleInputChange}
            />
          </label>        
        </div>
        <div className="input-group-personal">
          <label  htmlFor="emirates-id">
            Emirates ID: <br />
            <input
              type="text"
              name="name"
              value={formData.emiratesID}
              onChange={handleInputChange}
            />
          </label>        
        </div>
        <div className="input-group-personal">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group-personal">
          <label>
            Email: <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="input-group-personal">
          <label>
            Contact Number: <br />
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className='events-container'>
          <h3>Events</h3>
          <div className='container-1'>
           <div>
            <br/>
            <label className='option' htmlFor="Event-1">Event 1</label>
   
            <input
              type="radio"
              id="Event-1"
              name="event"
              value="Event 1"
              checked={formData.event.includes("Event 1")}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <br/>
            <label className='option' htmlFor="Event-2">Event 2</label>
            <input
              type="radio"
              id="Event-2"
              name="event"
              value="Event 2"
              checked={formData.event.includes("Event 2")}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <br/>
            <label className='option' htmlFor="Event-3">Event 3</label>
            <input
              type="radio"
              id="Event-3"
              name="event"
              value="Event 3"
              checked={formData.event.includes("Event 3")}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <br/>
            <label className='option' htmlFor="Event-4">Event 4</label>
            <input
              type="radio"
              id="Event-4"
              name="event"
              value="Event 4"
              checked={formData.event.includes("Event 4")}
              onChange={handleInputChange}
            />
            
          </div>
          <div>
            <br/>
            <label className='option' htmlFor="Event-5">Event 5</label>
            <input
              type="radio"
              id="Event-5"
              name="event"
              value="Event 5"
              checked={formData.event.includes("Event 5")}
              onChange={handleInputChange}
            />
            
          </div>
         </div> 
         <div className='container-2'>
          <div>
            <br/>
            <label className='option' htmlFor="Event-6">Event 6</label>
            <input
              type="radio"
              id="Event-6"
              name="event"
              value="Event 6"
              checked={formData.event.includes("Event 6")}
              onChange={handleInputChange}
            />
            
          </div>
          <div>
            <br/>
            <label className='option' htmlFor="Event-7">Event 7</label>
            <input
              type="radio"
              id="Event-7"
              name="event"
              value="Event 7"
              checked={formData.event.includes("Event 7")}
              onChange={handleInputChange}
            />
            
          </div>
          <div>
            <br/>
            <label className='option' htmlFor="Event-8">Event 8</label>
            <input
              type="radio"
              id="Event-8"
              name="event"
              value="Event 8"
              checked={formData.event.includes("Event 8")}
              onChange={handleInputChange}
            />
            
          </div>
          <div>
            <br/>
            <label className='option' htmlFor="Event-9">Event 9</label>
            <input
              type="radio"
              id="Event-9"
              name="event"
              value="Event 9"
              checked={formData.event.includes("Event 9")}
              onChange={handleInputChange}
            />
            
          </div>
          <div>
            <br/>
            <label className='option' htmlFor="Event-10">Event 10</label>
            <input
              type="radio"
              id="Event-10"
              name="event"
              value="Event 10"
              checked={formData.event.includes("Event 10")}
              onChange={handleInputChange}
            />
            
          </div>
         </div>
        </div>
        <div className="input-group-accom">
          <label> Please let us know if you require any special accessibility accomodations. <br/></label>
          <textarea id="special-accommodations" name="special-accommodations" placeholder='Special accomodations (if any)'></textarea>
        </div>
        <div>
          <p>By submitting this form, you agree that you will abide by the [Event Code of Conduct].</p>
        </div>
        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>

      <div id="team-modal" className={`modal ${formData.createTeam || formData.joinTeam ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Team Registration</h2>
          <p>Would you like to create a new team or join an existing team?</p>
          <button onClick={openCreateTeamModal}>Create Team</button>
          <button onClick={openJoinTeamModal}>Join Team</button>
        </div>
      </div>
      <div id="create-team-modal" className={`modal ${formData.createTeam ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Create Team</h2>
          <label htmlFor="team-name">Team Name:</label>
          <input
            type="text"
            id="team-name"
            name="createTeam"
            value={formData.createTeam}
            onChange={handleInputChange}
            required
          />
          <button onClick={generateTeamCode}>Generate Code</button>
          <p id="team-code">Note: Please share this code with your teammates in order to register.</p>
          <button onClick={confirmCreateTeam}>Confirm</button>
        </div>
      </div>
      <div id="join-team-modal" className={`modal ${formData.joinTeam ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Join Team</h2>
          <label htmlFor="join-code">Enter Team Code:</label>
          <input
            type="text"
            id="join-code"
            name="joinTeam"
            value={formData.joinTeam}
            onChange={handleInputChange}
            required
          />
          <button onClick={confirmJoinTeam}>Join Team</button>
        </div>
      </div>
    </div>
  );
}

export default Technofest;