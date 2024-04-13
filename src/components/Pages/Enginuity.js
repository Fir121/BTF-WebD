import React, { useState } from 'react';
import './RegForm.css';

function Enginuity() {
  const [formData, setFormData] = useState({
    schoolName: "",
    name: "",
    studentID: "",
    emiratesID: "",
    grade: "",
    email: "",
    contactNo: "",
    event: "",
    accomodations: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <h1>Enginuity for Universities</h1>
        <h3>University details</h3>
        <div className="input-group-school">
          <label htmlFor="school-name">University Name:</label>
          <select
            id="school-name"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
            required
          >
            <option value="">Select University</option>
            <option value="BITS">BITS</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group-personal">
          <label htmlFor="contact-phone">Contact number</label>
          <input
            type="tel"
            id="contact-phone"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
          />
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
          <br />
          <label htmlFor="special-accommodations">
            Please let us know if you have any special dietary restrictions or require accessibility accommodations:
          </label>
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
      {/* ... modals ... */}
    </div>
  );
}

export default Enginuity;