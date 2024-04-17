import React from "react";
import './RegForm.css';

const API_LINK =
  "https://script.google.com/macros/s/AKfycbz_FzYhH1h0WZIhvpLicgxWQxqpFnkUGAvLN-oTUdMkImJe_hWqDlaQT8GdPn5MPsVmVA/exec";

const Technofest = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("message").textContent = "Submitting..";
    document.getElementById("message").style.display = "block";
    document.getElementById("submit-button").disabled = true;

    // Collect the form data
    var formData = new FormData(event.target);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to your Google Apps Script
    fetch(API_LINK, {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    })
      .then(function (response) {
        // Check if the request was successful
        if (response) {
          return response; // Assuming your script returns JSON response
        } else {
          throw new Error("Failed to submit the form.");
        }
      })
      .then(function (data) {
        // Display a success message
        document.getElementById("message").textContent =
          "Data submitted successfully!";
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.backgroundColor = "green";
        document.getElementById("message").style.color = "beige";
        document.getElementById("submit-button").disabled = false;
        event.target.reset();

        setTimeout(function () {
          document.getElementById("message").textContent = "";
          document.getElementById("message").style.display = "none";
        }, 2600);
      })
      .catch(function (error) {
        // Handle errors, you can display an error message here
        console.error(error);
        document.getElementById("message").textContent =
          "An error occurred while submitting the form." + ": " + error;
        document.getElementById("message").style.display = "block";
      });
  };

  return (
    <div>
      
      <form id="reg-form" className="container m-4 pl-4" onSubmit={handleSubmit}>
        <h3>Registration Form</h3>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Full Name"
              name="Name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">School</label>
          <div className="control">
            <div className="select">
              <select name="School/University">
                <option value="">Select an option</option>
                <option value="DPS">DPS</option>
                <option value="GEMS">GEMS</option>
                <option value="IHS">IHS</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Student-ID</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Student-ID"
              name="Student-ID"
            />
          </div>
        </div>
        <div className="field">
        <label className="label">Emirates-ID</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter valid Emirates ID"
            name="Emirates-ID"
            maxLength="18"
            onKeyDown={(event) => {
              const input = event.target;
              const key = event.key;
              const value = input.value;
              const selectionStart = input.selectionStart;

              if (key === 'Backspace') {
                if (value[selectionStart - 1] === '-') {
                  event.preventDefault();
                  input.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
                  input.setSelectionRange(selectionStart - 1, selectionStart - 1);
                }
              }
            }}
            onInput={(event) => {
              const input = event.target;
              let value = input.value.replace(/\D/g, ''); // Remove non-digit characters
              const groups = [3, 4, 7, 4]; // Digit groups for formatting

              let formattedValue = '';
              let startIndex = 0;

              for (let i = 0; i < groups.length; i++) {
                if (value.length > startIndex) {
                  if (i > 0) {
                    formattedValue += '-';
                  }
                  formattedValue += value.substr(startIndex, groups[i]);
                  startIndex += groups[i];
                } else {
                  break;
                }
              }

              input.value = formattedValue;
            }}
            required
          />
        </div>
      </div>
        <div className="field">
          <label className="label">Grade</label>
          <div className="control">
            <input
              className="input"
              type="number"
              onInput={(event) => {
                if (event.target.value.length > event.target.maxLength) {
                  event.target.value = event.target.value.slice(
                    0,
                    event.target.maxLength
                  );
                }
              }}
              placeholder="Grade"
              name="Grade"
              maxLength="2"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="Email"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Mobile Number</label>
          <div className="control">
            <input
              className="input"
              type="number"
              onInput={(event) => {
                if (event.target.value.length > event.target.maxLength) {
                  event.target.value = event.target.value.slice(
                    0,
                    event.target.maxLength
                  );
                }
              }}
              placeholder="10 digit Number"
              name="Mobile Number"
              maxLength="10"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Interests</label>
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" 
                name="Interests" 
                value="Sports" 
              />
              Sports
            </label>
            <label className="checkbox">
              <input 
                type="checkbox" 
                name="Interests" 
                value="Music" 
              />
              Music
            </label>
            <label className="checkbox">
              <input 
              type="checkbox" 
              name="Interests" 
              value="Reading" 
            />
              Reading
            </label>
            <label className="checkbox">
              <input 
              type="checkbox" 
              name="Interests" 
              value="Travel" 
            />
              Travel
            </label>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-primary"
              type="submit"
              id="submit-button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div id="message" style={{ display: "none" }}></div>
    </div>
  );
};

export default Technofest;