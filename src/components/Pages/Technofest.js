import React, { useState } from 'react';
import './RegForm.css';
const form = document.getElementById('registration-form');
const individualModal = document.getElementById('individual-modal');
const teamModal = document.getElementById('team-modal');
const createTeamModal = document.getElementById('create-team-modal');
const joinTeamModal = document.getElementById('join-team-modal');
const closeButtons = document.getElementsByClassName('close');
const confirmIndividualBtn = document.getElementById('confirm-individual');
const createTeamBtn = document.getElementById('create-team');
const joinTeamBtn = document.getElementById('join-team');
const generateCodeBtn = document.getElementById('generate-code');
const confirmCreateTeamBtn = document.getElementById('confirm-create-team');
const confirmJoinTeamBtn = document.getElementById('confirm-join-team');
const eventCheckboxes = document.querySelectorAll('input[name="event-activities"]');



function Technofest() {
  const [formData, setFormData] = useState({
    schoolName: "",
    name: "",
    studentID: "",
    emiratesID:"",
    grade:"",
    email: "",
    contactNo: "",
    event: "",
    accomodations:"",
    createTeam:"",
    joinTeam: "",
    individual:"",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
  });
  
  
    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  }
  
  const addParticipant = (event) => {
    console.log("Needs to be added");
  }
  form.addEventListener("submit", handleSubmit)
  
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', closeModal);
  }
  
  confirmIndividualBtn.addEventListener('click', confirmIndividual);
  createTeamBtn.addEventListener('click', openCreateTeamModal);
  joinTeamBtn.addEventListener('click', openJoinTeamModal);
  generateCodeBtn.addEventListener('click', generateTeamCode);
  confirmCreateTeamBtn.addEventListener('click', confirmCreateTeam);
  confirmJoinTeamBtn.addEventListener('click', confirmJoinTeam);
  
  eventCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        openModal(teamModal);
      }
    });
  });
  
  function openModal(modal) {
    modal.style.display = 'block';
  }
  
  function closeModal() {
    individualModal.style.display = 'none';
    teamModal.style.display = 'none';
    createTeamModal.style.display = 'none';
    joinTeamModal.style.display = 'none';
  }
  
  function confirmIndividual() {
    closeModal();
    // Perform individual registration logic
  }
  
  function openCreateTeamModal() {
    closeModal();
    openModal(createTeamModal);
  }
  
  function openJoinTeamModal() {
    closeModal();
    openModal(joinTeamModal);
  }
  
  function generateTeamCode() {
    const teamCode = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('team-code').textContent = `Team Code: ${teamCode}`;
  }
  
  function confirmCreateTeam() {
    const teamName = document.getElementById('team-name').value;
    const teamCode = document.getElementById('team-code').textContent;
    // Perform create team logic with teamName and teamCode
    closeModal();
  }
  
  function confirmJoinTeam() {
    const joinCode = document.getElementById('join-code').value;
    // Perform join team logic with joinCode
    closeModal();
  }
  
 
  return (   
    <div>
      <form className='registration-form'>
        <h1>Technofest for Schools</h1>
        <h3>School details</h3>
        <div className="input-group-school">
            <label htmlFor="school-name">School Name:</label>
             <select id="school-name" name="school-name" value={formData.schoolName} onChange={handleInputChange} required>
              <option value="GEMS">GEMS</option>
              <option value="IHS">IHS</option>
              <option value="DPS">DPS</option>
             </select>
        </div>
   
        <h3>Personal details</h3>
        <div className="input-group-personal">
          <label> Participant Name:
           <input
             type="text"
             name="name"
             value={formData.contactName}
             onChange={handleInputChange}
           />
          </label>
        </div>
        <div className="input-group-personal">
          <label htmlFor="student-id">Student ID:</label>
           <input type="file" id="student-id" name="student-id" accept="image/*" value={formData.studentID}
             onChange={handleInputChange} required></input>
        </div>
        <div className="input-group-personal">
           <label htmlFor="emirates-id">Emirates ID:</label>
           <input type="file" id="emirates-id" name="emirates-id" accept="image/*" value={formData.emiratesID}
             onChange={handleInputChange} required></input>
        </div>
        <div className="input-group-personal">
           <label htmlFor="grade">Grade:</label>
           <input type="text" id="grade" name="grade" value={formData.grade}
             onChange={handleInputChange} required></input>
        </div>
        <div className="input-group-personal">
          <label> Email:
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleInputChange}
           />
          </label>
        </div>
        <div className="input-group-personal">
         <label> Contact No.:
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
            <br/>
           <input type="checkbox" id="coding-competitions" name="event-activities" value={formData.event}
             onChange={handleInputChange}></input>
           <label htmlFor="coding-competitions">Coding Competitions</label>
          </div>
          <div>
            <br/>
           <input type="checkbox" id="robotics-showcase" name="event-activities" value={formData.event}
             onChange={handleInputChange}></input>
           <label htmlFor="robotics-showcase">Robotics Showcase</label>
          </div>
          <div>
            <br/>
           <input type="checkbox" id="career-fair" name="event-activities" value={formData.event}
             onChange={handleInputChange}></input>
           <label htmlFor="career-fair">Career Fair</label>
          </div>
          <div>
            <br/>
           <input type="checkbox" id="speaker-sessions" name="event-activities" value={formData.event}
             onChange={handleInputChange}></input>
           <label htmlFor="speaker-sessions">Speaker Sessions</label>
          </div>
        </div>
  
        <div>
         <h3>Special Accommodations</h3>
         <label htmlFor="special-accommodations">Please let us know if you have any special dietary restrictions or require accessibility accommodations:</label>
         <textarea id="special-accommodations" name="special-accommodations" value={formData.accomodations}
             onChange={handleInputChange}></textarea>
        </div>

        <div>
         <p>By submitting this form, you agree that you will abide by the [Event Code of Conduct].</p>
    
        </div>

        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
      <div id="individual-modal" class="modal">
       <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Individual Registration</h2>
        <p>You have chosen to register as an individual for this event.</p>
        <confirmIndividualBtn id="confirm-individual">Confirm</confirmIndividualBtn>
        <input value={formData.individual}
             onChange={handleInputChange}></input>
       </div>
      </div>

      <div id="team-modal" class="modal">
       <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Team Registration</h2>
        <p>Would you like to create a new team or join an existing team?</p>
        <button id="create-team">Create Team</button>
        <button id="join-team">Join Team</button>
       </div>
      </div>

      <div id="create-team-modal" class="modal">
       <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Create Team</h2>
        <label for="team-name">Team Name:</label>
        <input type="text" id="team-name" name="team-name" required value={formData.createTeam}
             onChange={handleInputChange}></input>
        <button id="generate-code">Generate Code</button>
        <p id="team-code">Note: Please share this code with your teammates in order to register.</p>
        <confirmCreateTeamBtn id="confirm-create-team">Confirm</confirmCreateTeamBtn>
       </div>
      </div>

      <div id="join-team-modal" class="modal">
       <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Join Team</h2>
        <label for="join-code">Enter Team Code:</label>
        <input type="text" id="join-code" name="join-code" value={formData.joinTeam}
             onChange={handleInputChange} required></input>
        <joinTeamBtn id="confirm-join-team">Join Team</joinTeamBtn>
       </div>
      </div>
    </div>

  )
}

function submitForm(formData) {
  // Send the form data to the server for processing
  // using fetch, XMLHttpRequest, or another method
  console.log(formData);
}

export default Technofest
