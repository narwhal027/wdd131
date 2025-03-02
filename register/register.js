// register.js
document.addEventListener("DOMContentLoaded", () => {
    // Set initial participant count
    let participantCount = 1;
  
    // Get elements from the DOM
    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector("fieldset.participants");
    const form = document.querySelector("form");
    const summarySection = document.getElementById("summary");
  
    // Function to generate participant section HTML with unique ids
    function participantTemplate(count) {
      return `
        <section class="participant${count}">
          <p>Participant ${count}</p>
          <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" required />
          </div>
          <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
          </div>
          <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
          </div>
          <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
          </div>
          <div class="item">
            <p>Grade</p>
            <select id="grade${count}" name="grade${count}">
              <option selected value="" disabled></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>
      `;
    }
  
    // Event listener for Add Participant button
    addButton.addEventListener("click", () => {
      participantCount++;
      // Insert the new participant section before the Add button.
      addButton.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
    });
  
    // Function to calculate the total fees entered for all participants
    function totalFees() {
      // Grab any element whose id starts with "fee"
      let feeElements = document.querySelectorAll("[id^=fee]");
      // Convert NodeList to an Array and sum up the values
      return [...feeElements].reduce((total, input) => {
        // Parse the fee value as a float, default to 0 if empty or invalid
        let fee = parseFloat(input.value) || 0;
        return total + fee;
      }, 0);
    }
  
    // Template for success message using info object
    function successTemplate(info) {
      return `
        <p>Thank you ${info.adultName} for registering.</p>
        <p>You have registered ${info.participantCount} participant(s) and owe $${info.totalFees} in fees.</p>
      `;
    }
  
    // Event listener for form submit
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Calculate the total fees
      const feeTotal = totalFees();
      // Get the adult's name
      const adultName = document.getElementById("adult_name").value;
  
      // Hide the form
      form.style.display = "none";
      // Insert the success message into the summary element and display it
      summarySection.innerHTML = successTemplate({
        adultName: adultName,
        participantCount: participantCount,
        totalFees: feeTotal,
      });
      summarySection.style.display = "block";
    });
  });