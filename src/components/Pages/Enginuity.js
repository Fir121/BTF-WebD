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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted", formData);
  };

  return (
    <div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Enginuity (for Universities) - Registration Page</h1>
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
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group-personal">
          <label htmlFor="contact-phone">Contact number:</label>
          <input
            type="tel"
            id="contact-phone"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
          />
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
      {/* ... modals ... */}
    </div>
  );
}

export default Enginuity;