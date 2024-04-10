import React, { useState } from 'react';
import './RegForm.css';

function Enginuity() {
  const [formData, setFormData] = useState({
    schoolName: "",
    name: "",
    studentID: "",
    emiratesID:"",
    grade:"",
    email: "",
    contactNo: "",
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
    console.log("Submitted");
  }

  const addParticipant = (event) => {
    console.log("Needs to be added");
  }
  return (
    <div>
      <form>
        <h1>Enginuity for Universities</h1>
        <h3>University details</h3>
        <div className="input-group-school">
            <label htmlFor="school-name">University Name:</label>
             <select id="school-name" name="school-name" value={formData.schoolName} onChange={handleInputChange} required>
              <option value="BITS">BITS</option>
              <option value="2nd">2nd </option>
              <option value="3rd ">3rd</option>
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
           <label for="grade">Grade:</label>
           <input type="text" id="grade" name="grade" value={formData.contactName}
             onChange={handleInputChange} required></input>
        </div>
        <div className="input-group-personal">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email}
             onChange={handleInputChange}/>
        </div>
        <div className="input-group-personal">
          <label htmlFor="contact-phone">Contact number</label>
          <input type="tel" id="contact-phone" value={formData.contactNo}
             onChange={handleInputChange}/>
        </div>
        <div>
         <h3>Events </h3>
         <div>
           <br/>
           <input type="checkbox" id="coding-competitions" name="event-activities" value={formData.event}
             onChange={handleInputChange}></input>
           <label htmlFor="coding-competitions">Coding Competitions</label>
         </div>
         <div>
           <br />
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
         <br/>
         <label htmlFor="special-accommodations">
          Please let us know if you have any special dietary restrictions or require accessibility accommodations:</label>
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
          <button id="confirm-individual">Confirm</button>
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
        <button id="confirm-create-team">Confirm</button>
       </div>
      </div>

      <div id="join-team-modal" class="modal">
       <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Join Team</h2>
        <label for="join-code">Enter Team Code:</label>
        <input type="text" id="join-code" name="join-code" required value={formData.joinTeam}
             onChange={handleInputChange}></input>
         <button id="confirm-join-team">Join Team</button>
       </div>
      </div>
    </div>

  )
}

export default Enginuity
