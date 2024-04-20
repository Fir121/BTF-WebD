import React, { useEffect } from "react";
import "./RegForm.css";
import EventCards from './EventCards.js';
const API_LINK =
  "https://script.google.com/macros/s/AKfycbx0W50mPE7jEUkQu2jQcJGZG_QLcR1vwdqllRoMu-H2dM-NNrBqWdB13_owEjxGyaJ6zA/exec";

const BTFRegistration = () => {
  /*const [showIndividualModal, setShowIndividualModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  */

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

        //setFormSubmitted(true);
        //url = "https://btf.pythonanywhere.com/send-registration-confirmation?n=" + data["Name"].replace(" ", "+") + "&i=" + data["Institution"].replace(" ", "+") + "&e=" + data["Email"].replace(" ", "");
        //console.log(data);
      })
      .catch(function (error) {
        // Handle errors, you can display an error message here
        console.error(error);
        document.getElementById("message").textContent =
          "An error occurred while submitting the form: " + error;
        document.getElementById("message").style.display = "block";
      });
  };

  /*
  const openModal = (modal) => {
    switch (modal) {
      case 'individual':
        setShowIndividualModal(true);
        break;
      case 'team':
        setShowTeamModal(true);
        break;
      case 'createTeam':
        setShowCreateTeamModal(true);
        break;
      case 'joinTeam':
        setShowJoinTeamModal(true);
        break;
      default:
        break;
    }
  };

  const closeModal = () => {
    setShowIndividualModal(false);
    setShowTeamModal(false);
    setShowCreateTeamModal(false);
    setShowJoinTeamModal(false);
  };

  const confirmIndividual = () => {
    closeModal();
    // Perform individual registration logic
  };

  const generateTeamCode = () => {
    const teamCode = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('team-code').textContent = `Team Code: ${teamCode}`;
  };

  const confirmCreateTeam = () => {
    //const teamName = document.getElementById('team-name').value;
    //const teamCode = document.getElementById('team-code').textContent;
    // Perform create team logic with teamName and teamCode
    closeModal();
  };

  const confirmJoinTeam = () => {
    //const joinCode = document.getElementById('join-code').value;
    // Perform join team logic with joinCode
    closeModal();
  };
  */

  const openTab = (evt, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  };
  useEffect(() => {
    const closeButtons = document.getElementsByClassName("topright");
    for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener("click", function () {
        this.parentElement.style.display = "none";
      });
    }
  }, []);

  return (
    <div>
      <h2>Register Now!</h2>
      <div className="tab">
        <button
          className="tablinks"
          onClick={(evt) => openTab(evt, "Enginuity")}
        >
          Enginuity
        </button>
        <button
          className="tablinks"
          onClick={(evt) => openTab(evt, "Technofest")}
        >
          Technofest
        </button>
      </div>
      <div id="Enginuity" className="tabcontent">
        <span
          id="closeEnginuity"
          class="topright"
        >
          &times;
        </span>
        {/* <img alt='badge' src="https://btf.pythonanywhere.com/badge-going?n=Ahmed+Thahir&i=BITS+Pilani+Dubai+Campus" /> */}
        <form
          id="reg-form"
          className="container  m-4 pl-4"
          onSubmit={handleSubmit}
        >
          <h3>Enginuity (for Universities) Registration Form</h3>
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
            <label className="label">Institution</label>
            <div className="control">
              <div className="select">
                <select name="Institution">
                  <option value="">Select an option</option>
                  <option value="BITS">BITS</option>
                  <option value="Manipal">Manipal</option>
                  <option value="Amity">Amity</option>
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

                  if (key === "Backspace") {
                    if (value[selectionStart - 1] === "-") {
                      event.preventDefault();
                      input.value =
                        value.slice(0, selectionStart - 1) +
                        value.slice(selectionStart);
                      input.setSelectionRange(
                        selectionStart - 1,
                        selectionStart - 1
                      );
                    }
                  }
                }}
                onInput={(event) => {
                  const input = event.target;
                  let value = input.value.replace(/\D/g, ""); // Remove non-digit characters
                  const groups = [3, 4, 7, 4]; // Digit groups for formatting

                  let formattedValue = "";
                  let startIndex = 0;

                  for (let i = 0; i < groups.length; i++) {
                    if (value.length > startIndex) {
                      if (i > 0) {
                        formattedValue += "-";
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
            <label className="label">Year</label>
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
                placeholder="Year"
                name="Year"
                maxLength="1"
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
          <div className="events-container">
            <label className="label">Events</label>
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 1"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                 <EventCards 
                   src='images/event1.jpg'
                   eventName='event1'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='1'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 2"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event2.jpg'
                   eventName='event2'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='2'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 3"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event3.jpg'
                   eventName='event3'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='3'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 4"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event4.jpg'
                   eventName='event4'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='4'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 5"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event5.jpg'
                   eventName='event5'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='5'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 6"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event6.jpg'
                   eventName='event6'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='6'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 7"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event7.jpg'
                   eventName='event7'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='7'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 8"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event8.jpg'
                   eventName='event8'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='8'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 9"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event1.jpg'
                   eventName='event9'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='9'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 10"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event2.jpg'
                   eventName='event10'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='10'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 11"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event3.jpg'
                   eventName='event11'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='11'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 12"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event4.jpg'
                   eventName='event12'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='12'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 13"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event5.jpg'
                   eventName='event13'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='13'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 14"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event6.jpg'
                   eventName='event14'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='14'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 15"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event7.jpg'
                   eventName='event15'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='15'/>
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

      <div id="Technofest" className="tabcontent">
        <span
          id="closeEnginuity"
          class="topright"
        >
          &times;
        </span>
        {/* <img alt='badge' src="https://btf.pythonanywhere.com/badge-going?n=Ahmed+Thahir&i=BITS+Pilani+Dubai+Campus" /> */}
        <form
          id="reg-form"
          className="container  m-4 pl-4"
          onSubmit={handleSubmit}
        >
          <h3>Technofest (for Schools) Registration Form</h3>
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
                <select name="School">
                  <option value="">Select an option</option>
                  <option value="BITS">GEMS</option>
                  <option value="Manipal">IHS</option>
                  <option value="Amity">DPS</option>
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

                  if (key === "Backspace") {
                    if (value[selectionStart - 1] === "-") {
                      event.preventDefault();
                      input.value =
                        value.slice(0, selectionStart - 1) +
                        value.slice(selectionStart);
                      input.setSelectionRange(
                        selectionStart - 1,
                        selectionStart - 1
                      );
                    }
                  }
                }}
                onInput={(event) => {
                  const input = event.target;
                  let value = input.value.replace(/\D/g, ""); // Remove non-digit characters
                  const groups = [3, 4, 7, 4]; // Digit groups for formatting

                  let formattedValue = "";
                  let startIndex = 0;

                  for (let i = 0; i < groups.length; i++) {
                    if (value.length > startIndex) {
                      if (i > 0) {
                        formattedValue += "-";
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
                maxLength="1"
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
            <label className="label">Events</label>
            <div className="control">
            <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 1"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                 <EventCards 
                   src='images/event1.jpg'
                   eventName='event1'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='1'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 2"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event2.jpg'
                   eventName='event2'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='2'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 3"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event3.jpg'
                   eventName='event3'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='3'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 4"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event4.jpg'
                   eventName='event4'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='4'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 5"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event5.jpg'
                   eventName='event5'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='5'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 6"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event6.jpg'
                   eventName='event6'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='6'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 7"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event7.jpg'
                   eventName='event7'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='7'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 8"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event8.jpg'
                   eventName='event8'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='8'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 9"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event1.jpg'
                   eventName='event9'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='9'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 10"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event2.jpg'
                   eventName='event10'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='10'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 11"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event3.jpg'
                   eventName='event11'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='11'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 12"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event4.jpg'
                   eventName='event12'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='12'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 13"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event5.jpg'
                   eventName='event13'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='13'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 14"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event6.jpg'
                   eventName='event14'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='14'/>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 15"
                  value="False"
                  /*onChange={(event) => {
                  if (event.target.checked) {
                    openModal("team");
                  }
                }}*/
                />
                <EventCards 
                   src='images/event7.jpg'
                   eventName='event15'
                   text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis accumsan aliquet. Nullam erat nulla, facilisis eu neque sed, lacinia pellentesque nisi. Etiam quis laoreet nisl, nec bibendum tortor.'
                   label='15'/>
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

    </div>
  );
};

export default BTFRegistration;

// Modal logic for each event
/*

      {showTeamModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content">
            <div className="box">
              <h2>Team Registration</h2>
              <p>Would you like to create a new team or join an existing team?</p>
              <button className="button is-primary" onClick={() => openModal('createTeam')}>Create Team</button>
              <button className="button is-primary" onClick={() => openModal('joinTeam')}>Join Team</button>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
      )}

      {showCreateTeamModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content">
            <div className="box">
              <h2>Create Team</h2>
              <div className="field">
                <label className="label" htmlFor="team-name">Team Name:</label>
                <div className="control">
                  <input className="input" type="text" id="team-name" name="team-name" required />
                </div>
              </div>
              <button className="button is-primary" onClick={generateTeamCode}>Generate Code</button>
              <p id="team-code"></p>
              <button className="button is-primary" onClick={confirmCreateTeam}>Confirm</button>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
      )}

      {showJoinTeamModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content">
            <div className="box">
              <h2>Join Team</h2>
              <div className="field">
                <label className="label" htmlFor="join-code">Enter Team Code:</label>
                <div className="control">
                  <input className="input" type="text" id="join-code" name="join-code" required />
                </div>
              </div>
              <button className="button is-primary" onClick={confirmJoinTeam}>Join Team</button>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
      )}
      {showIndividualModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content">
            <div className="box">
              <h2>Individual Registration</h2>
              <p>You have chosen to register as an individual for this event.</p>
              <button className="button is-primary" onClick={confirmIndividual}>Confirm</button>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
      )}
      */
