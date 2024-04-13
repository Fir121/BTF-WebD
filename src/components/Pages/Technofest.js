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
    individual: "",
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
      individual: "",
      createTeam: "",
      joinTeam: "",
    });
  };

  const confirmIndividual = () => {
    closeModal();
    // Perform individual registration logic
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

  const submitForm = async (formData) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz_FzYhH1h0WZIhvpLicgxWQxqpFnkUGAvLN-oTUdMkImJe_hWqDlaQT8GdPn5MPsVmVA/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // Reset form data or perform any other necessary actions
      } else {
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Technofest for Schools</h1>
        <h3>School details</h3>
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
            Participant Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="input-group-personal">
          <label htmlFor="student-id">Student ID:</label>
          <input
            type="file"
            id="student-id"
            name="studentID"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group-personal">
          <label htmlFor="emirates-id">Emirates ID:</label>
          <input
            type="file"
            id="emirates-id"
            name="emiratesID"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
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
            Email:
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
            Contact No.:
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <h3>Events</h3>
          <div>
            <br />
            <input
              type="checkbox"
              id="coding-competitions"
              name="event"
              value="Coding Competitions"
              checked={formData.event.includes("Coding Competitions")}
              onChange={handleInputChange}
            />
            <label htmlFor="coding-competitions">Coding Competitions</label>
          </div>
          <div>
            <br />
            <input
              type="checkbox"
              id="robotics-showcase"
              name="event"
              value="Robotics Showcase"
              checked={formData.event.includes("Robotics Showcase")}
              onChange={handleInputChange}
            />
            <label htmlFor="robotics-showcase">Robotics Showcase</label>
          </div>
          <div>
            <br />
            <input
              type="checkbox"
              id="career-fair"
              name="event"
              value="Career Fair"
              checked={formData.event.includes("Career Fair")}
              onChange={handleInputChange}
            />
            <label htmlFor="career-fair">Career Fair</label>
          </div>
          <div>
            <br />
            <input
              type="checkbox"
              id="speaker-sessions"
              name="event"
              value="Speaker Sessions"
              checked={formData.event.includes("Speaker Sessions")}
              onChange={handleInputChange}
            />
            <label htmlFor="speaker-sessions">Speaker Sessions</label>
          </div>
        </div>
        <div>
          <h3>Special Accommodations</h3>
          <label htmlFor="special-accommodations">Please let us know if you have any special dietary restrictions or require accessibility accommodations:</label>
          <textarea
            id="special-accommodations"
            name="accomodations"
            value={formData.accomodations}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <p>By submitting this form, you agree that you will abide by the [Event Code of Conduct].</p>
        </div>
        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
      <div id="individual-modal" className={`modal ${formData.individual ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Individual Registration</h2>
          <p>You have chosen to register as an individual for this event.</p>
          <button onClick={confirmIndividual}>Confirm</button>
        </div>
      </div>
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