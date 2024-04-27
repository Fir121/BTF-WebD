import React, { useEffect } from "react";
import "./RegForm.css";
import EventCards from './EventCards.js';
import outgoing_link from "./../outgoing_link.svg"
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
    messageElement_text.style.backgroundColor = "hsla(60, 100%, 20%, 1)";
    messageElement_text.style.color = "white";
    submitButton.disabled = true;

    // Collect the form data
    let formData = new FormData(event.target);
    let form_data_entries = formData.entries()
    let keyValuePairs = [];

    let name = "";
    let institute = "";

    for (let pair of form_data_entries) {
      if (pair[0] == "Name") {
        name = pair[1];
      }
      if (pair[0] == "Institute") {
        institute = pair[1];
      }
      if (pair[1] == "off") {
        pair[1] = false;
      }
      if (pair[1] == "on") {
        pair[1] = true;
      }

      console.log(pair[0] + "=" + pair[1]);

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

        messageElement.querySelector("img").src = "https://btf.pythonanywhere.com/badge-going?n=" + name + "&i=" + institute;

        messageElement_text.innerHTML = "Your registration was successful!<br/>Here's your badge! 👇";
        messageElement_text.style.backgroundColor = "green";
        messageElement_text.style.color = "beige";

        messageElement.style.display = "block";
        // let rect = messageElement.querySelector("img").getBoundingClientRect();
        // window.scrollTo(
        //   0,
        //   rect.bottom
        // )

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
      <h2>Registration</h2>
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
          {/* <h2>Enginuity</h2> */}
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
              <input className="input" type="text" name="Institute"
                // list="universities"
                placeholder="University" required />
              {/* <datalist id="universities">
                <option value="BITS"></option>
                <option value="Amity"></option>
                <option value="Manipal"></option>
              </datalist> */}
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
          <div className="events_container">
            <div>
              Select the events that you're interested in.
            </div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Event</th>
                  <th>Organizing Club(s)</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Circuit_Debugging"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Circuit Debugging</td>
                  <td>Assoc. of Electronic Eng</td>
                  <td><a href="https://drive.google.com/file/d/1p2BFO7sBfIsN-XdWWlKXWMpVPpokwtt2/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Coding_Kombat"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Coding Kombat</td>
                  <td>Microsoft Tech Club<br />Google Dev Club</td>
                  <td><a href="https://drive.google.com/file/d/1CIFQ6c6Qb9mk0-hdwG_YL8OlL2-Gxour/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Crack_The_Password"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Crack The Password</td>
                  <td>Institution of Engineers India</td>
                  <td><a href="https://drive.google.com/file/d/1CMAgY_DEJDDz05w6fEkOLUj0c7MUNuCB/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Crime_Scene_Investigation"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Crime Scene Investigation</td>
                  <td>Chimera (Biotechnology)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Escape_The_Matrix"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Escape The Matrix</td>
                  <td>Assoc. of Computing Machinery</td>
                  <td><a href="https://drive.google.com/file/d/1xSYVwd-MCI9Aqnb8wga91PHoJaITDdqC/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Minimalism"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Minimalism</td>
                  <td>OhCrop (Design)</td>
                  <td><a href="https://drive.google.com/file/d/1_Gf9FOmlixMRF522nxeUE4bcMZqPbyuS/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Robotics_Building_Competition"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Robotics Building Competition</td>
                  <td>Team IFOR (Robotics)</td>
                  <td><a href="https://drive.google.com/file/d/1_Gf9FOmlixMRF522nxeUE4bcMZqPbyuS/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Slide_to_Win"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Slide to Win</td>
                  <td>Assoc. of Computing Machinery-Women</td>
                  <td><a href="https://drive.google.com/file/d/1XnRhp_ILzLDurAeBXjS-u4H_pEzN_cqd/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="The_Spaghetti_Bridge_Building_Spectacle"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Spaghetti Bridge Building</td>
                  <td>Skyline (Civil Eng)</td>
                  <td><a href="https://drive.google.com/file/d/1XnRhp_ILzLDurAeBXjS-u4H_pEzN_cqd/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Trash_to_Cash"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Trash to Cash</td>
                  <td>American Institute of Chem Eng</td>
                  <td><a href="https://drive.google.com/file/d/1p2BFO7sBfIsN-XdWWlKXWMpVPpokwtt2/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                
              </tbody>
            </table>
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


          <div className="message_container" id="message-Enginuity" style={{ display: "none" }}>
            <p></p>
            <img className="badge_preview" src="#" />
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
          {/* <h2>Technofest</h2> */}
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
              <input className="input" type="text" id="institute-name"
                // list="schools"
                placeholder="School" name="Institute" required />
              {/* <datalist id="schools">
                <option value="DPS"></option>
                <option value="IHS"></option>
                <option value="GEMS"></option>
              </datalist> */}
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
          <div className="events_container">
            <div>
              Select the events that you're interested in.
            </div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Event</th>
                  <th>Organizing Club(s)</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Algorithmic_Art"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Algorithmic Art</td>
                  <td>Microsoft Tech Club</td>
                  <td><a href="https://drive.google.com/file/d/1QWG5-muNuiyOnKI5L3MyoZGaSvYjHHWm/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Debate"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Debate</td>
                  <td>Expressions (Debate)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Face_Mask_Detection_Using_Drone"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Face Mask Detection</td>
                  <td>Team IFOR (Robotics)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Hacker's_Hideout"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Hacker's Hideout</td>
                  <td>Assoc. of Computing Machinery</td>
                  <td><a href="https://drive.google.com/file/d/1RjLYgZAAOQFRcBexCc8WLqBepz7UMZvR/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Jenga_Jam"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Jenga Jam</td>
                  <td>Assoc. of Computing Machinery-Women</td>
                  <td><a href="https://drive.google.com/file/d/1hHMJZ-7UpoZ0kDUqHG2XeumR-x1xYKAh/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Lost_In_The_Wilderness"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Lost In The Wilderness</td>
                  <td>Institute of Engineers-India</td>
                  <td><a href="https://drive.google.com/file/d/1ZkR_I3kOMynQC-BSxMUvHPes9cnnjIW0/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Skribbl.(B)io"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Skribbl.(B)io</td>
                  <td>Chimera (Biotech)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Trivium"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Trivium</td>
                  <td>Flummoxed (Quiz)</td>
                  <td><a href="https://drive.google.com/file/d/1K6cdaLiAJ_Y4L-5dwJ8ewl6SvGfggKkn/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      type="checkbox"
                      name="Throw!_Get!_Plug!"
                      defaultChecked={false}
                    />
                  </td>
                  <td>Throw! Get! Plug!</td>
                  <td>Assoc. of Electronic Eng</td>
                  <td><a href="https://drive.google.com/file/d/1K6cdaLiAJ_Y4L-5dwJ8ewl6SvGfggKkn/view?usp=drive_link" target="_blank">
                    <img style={{ height: 1.25 + 'em', fill: "#fff" }} src={outgoing_link}></img>
                  </a></td>
                </tr>

              </tbody>
            </table>
          </div>

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
          <div className="message_container" id="message-Technofest" style={{ display: "none" }}>
            <p></p>
            <img className="badge_preview" src="#" />
          </div>
        </form>
      </div>

    </div>
  );
};

export default BTFRegistration;
