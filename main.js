//function is responsible for validating the form inputs
function affichage() {
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;
    const dateInput = document.getElementById('date').value;
    const textInput = document.getElementById('message').value;

    var testemail = document.getElementById('spemail');
    var testphone = document.getElementById('sphone');
    var testdate = document.getElementById('spdate');
    var testtext = document.getElementById('sptext');

    // Validating email adress
    var regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput == "") {
        testemail.innerHTML = "*Email is required";
    } else if (!regexEmail.test(emailInput)) {
        testemail.innerHTML = "*Email address invalid";
    } else {
        testemail.innerHTML = "";
    }
    // Validating phone number
    var regexPhone = /^\+212 \d{3}-\d{3}-\d{3}$/;
    if (phoneInput == "") {
        testphone.innerHTML = "*Phone is required";
    } else if (!regexPhone.test(phoneInput)) {
        testphone.innerHTML = "*Phone number should be in this foum +212 xxx-xxx-xxx";
    } else {
        testphone.innerHTML = "";
    }
    // Validating text
    var regexText = /^[A-Za-z]+$/;
    if (textInput == "") {
        testtext.innerHTML = "*Text is required";
    } else if (!regexText.test(textInput)) {
        testtext.innerHTML = "*Message should only contain letters";
    } else {
        testtext.innerHTML = "";
    }
    // Validating date
    var currentDate = new Date(dateInput);
    var year = currentDate.getFullYear();
    if (isNaN(currentDate) || year < 2000 || year > 2024) {
        testdate.innerHTML = "*Date should be between 2000 and 2024";
      
    } else {
        testdate.innerHTML = "";
    }
    //called the showPopup() function
    if (testemail.innerHTML == "" && testphone.innerHTML == "" && testdate.innerHTML == "" && testtext.innerHTML == "") {
    showPopup();
    }
}
//function retrieves the input values again
function showPopup() {
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;
    const dateInput = document.getElementById('date').value;
    const textInput = document.getElementById('message').value;
    const popupContainer = document.getElementById('popupContainer');

    const popupContent = `
        <div id="popup" class="popup">
            <h2>Form Submission</h2>
            <p>Email: ${emailInput}</p>
            <p>Phone: ${phoneInput}</p>
            <p>Date: ${dateInput}</p>
            <p>Text: ${textInput}</p>
            <button id="closeButton">Close</button>
        </div>
    `;

    popupContainer.innerHTML = popupContent;

    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', closePopup);
}
// function simply clears the content of the popupContainer
function closePopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.innerHTML = "";
}