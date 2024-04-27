import React, { useEffect } from "react";
import "./RegForm.css";
import EventCards from './EventCards.js';
const GSHEETS_API_LINK =
  "https://script.google.com/macros/s/AKfycby8vPh7UnHj6H632aWQaZm0Giw9so8ZaKVQ5XSqDiHXWdMLk42kkVWAZr7NrlEXa_QN-g/exec";

const BTFRegistration = () => {
  /*const [showIndividualModal, setShowIndividualModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  */

  const handleSubmit = (event, tabName) => {
    event.preventDefault();
    const messageElement = document.getElementById(`message-${tabName}`);
    const messageElement_text = messageElement.querySelector("p");

    const submitButton = document.getElementById(`submit-button-${tabName}`);
    
    messageElement.style.display = "block";
    messageElement_text.textContent = "Registering...";
    messageElement_text.style.backgroundColor = "white";
    messageElement_text.style.color = "black";
    submitButton.disabled = true;

    // Collect the form data
    var formData = new FormData(event.target);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to your Google Apps Script
    fetch(GSHEETS_API_LINK, {
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
        // localStorage.setItem("registered_BTF", "1");
        // Display a success message
  
        let name = "Thahir";
        let institute = "BITS";
        messageElement.querySelector("img").src = "https://btf.pythonanywhere.com/badge-going?n=" + name + "&i=" + institute;
  
        messageElement_text.innerHTML = "Your registration was successful!<br/>Here's your badge! 👇";
        messageElement_text.style.backgroundColor = "green";
        messageElement_text.style.color = "beige";
        
        messageElement.style.display = "block";
        let rect = messageElement.querySelector("img").getBoundingClientRect();
        window.scrollTo(
          0,
          rect.bottom
        )

        submitButton.disabled = false;
        event.target.reset();

        // setTimeout(function () {
        //   messageElement.textContent = "";
        //   messageElement.style.display = "none";
        //   // document.getElementById(tabName).style.display = "none";
        // }, 2600);

        //setFormSubmitted(true);
        //url = "https://btf.pythonanywhere.com/send-registration-confirmation?n=" + data["Name"].replace(" ", "+") + "&i=" + data["Institution"].replace(" ", "+") + "&e=" + data["Email"].replace(" ", "");
        //console.log(data);
      })
      .catch(function (error) {
        // Handle errors, you can display an error message here
        console.error(error);
        messageElement_text.textContent =
          "An error occurred while submitting the form: " + error;
        messageElement.style.display = "block";
        messageElement.style.backgroundColor = "white";
        messageElement.style.color = "red";
      });
  };

  const handleNameInput = (event) => {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/[^A-Za-z\s]/g, "");
    event.target.value = sanitizedValue;
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

    // const didRegister = localStorage.getItem("registered_BTF");
    // if (didRegister === "1") {
    //   console.log("can't register!");
    //   alert("You have already registered for BTF!");
    //   return;
    // }
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
    <div id='reg-form'>
      {/* <h2>Register Now!</h2> */}
      {/* <p> Technofest is our exclusive tech festival for the next generation of engineers. If you are an aspiring engineer, come on over and show off your skills at Technofest 2024.</p> <br/>
      <p> Enginuity is an exclusive tech festival for university students.</p> <br/> */}
      {/* <p> Register now! </p> <br/> */}
      <div className="tab">
        <button
          className="tablinks"
          onClick={(evt) => openTab(evt, "Technofest")}
        >
          School
        </button>
        <button
          className="tablinks"
          onClick={(evt) => openTab(evt, "Enginuity")}
        >
          University
        </button>
      </div>
      <div id="Enginuity" className="tabcontent">
        {/* <span
          id="closeEnginuity"
          className="topright"
        >
          &times;
        </span> */}
        {/* <img alt='badge' src="https://btf.pythonanywhere.com/badge-going?n=Ahmed+Thahir&i=BITS+Pilani+Dubai+Campus" /> */}
        <form
          className="container m-4 pl-4"
          onSubmit={(event) => handleSubmit(event, "Enginuity")}
        >
          <h2>Enginuity</h2>
          {/* <p>May 2nd, 2024</p> */}
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Full Name"
                name="Name"
                pattern="[A-Za-z\s]+"
                title="Please enter only alphabets and spaces"
                onInput={handleNameInput}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="text" name="Institute" list="universities" placeholder="University" required />
              <datalist id="universities">
                <option value="BITS"></option>
                <option value="Amity"></option>
                <option value="Manipal"></option>
              </datalist>
            </div>
          </div>
          <div className="field">
            {/* <label className="label">Email</label> */}
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="Email"
                required
              />
            </div>
          </div>
          <div className="field">
            {/* <label className="label">Mobile Number</label> */}
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
                placeholder="Mobile Number (0501234567)"
                name="Mobile"
                maxLength="10"
                required
              />
            </div>
          </div>
          <div className="field is-grouped submit">
            <div className="control">
              <button
                className="sign-up-button"
                type="submit"
                id="submit-button-Enginuity"
              >
                Register
              </button>
            </div>
          </div>
          <div class="message_container" id="message-Enginuity" style={{ display: "none" }}>
          <p></p>
          <img class="badge_preview" src="#"/>
        </div>
        </form>
      </div>

      <div id="Technofest" className="tabcontent">
        {/* <span
          id="closeTechnofest"
          className="topright"
        >
          &times;
        </span> */}
        {/* <img alt='badge' src="https://btf.pythonanywhere.com/badge-going?n=Ahmed+Thahir&i=BITS+Pilani+Dubai+Campus" /> */}
        <form
          className="container m-4 pl-4"
          onSubmit={(event) => handleSubmit(event, "Technofest")}
        >
          <h2>Technofest</h2>
          {/* <p>May 1st, 2024</p> */}
          <div className="field">
            {/* <label className="label">Name</label> */}
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Full Name"
                name="Name"
                pattern="[A-Za-z\s]+"
                title="Please enter only alphabets and spaces"
                onInput={handleNameInput}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="text" id="institute-name" list="schools" placeholder="School" name="Institute" required />
              <datalist id="schools">
                <option value="DPS"></option>
                <option value="IHS"></option>
                <option value="GEMS"></option>
              </datalist>
            </div>
          </div>
          <div className="field">
            {/* <label className="label">Email</label> */}
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="Email"
                required
              />
            </div>
          </div>
          <div className="field">
            {/* <label className="label">Mobile Number</label> */}
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
                placeholder="Mobile Number (0501234567)"
                name="Mobile Number"
                maxLength="10"
                required
              />
            </div>
          </div>
          {/* <div className="events-container">
            <label className="label">Which event(s) would you like to register for?</label>
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="Event 1"
                />
              </label>
            </div>
          </div> */}
          <div className="field is-grouped submit">
            <div className="control">
              <button
                className="sign-up-button"
                type="submit"
                id="submit-button-Technofest"
              >
                Register
              </button>
            </div>
          </div>
          <div class="message_container" id="message-Technofest" style={{ display: "none" }}>
          <p></p>
          <img class="badge_preview" src="#"/>
        </div>
        </form>
      </div>

    </div>
  );
};

export default BTFRegistration;