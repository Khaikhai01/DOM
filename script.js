//Getting references to elements
const form = document.getElementsByTagName("form")
[0];2
const age = document.getElementById("age")
const ageResult = document.getElementById("ageInput")
// Handle events

// Event Listener Method
form. addEventListener("submit", function (event) {
    event.preventDefault();
    console. log(event);

    // Updating elements/content on the page
    const ageInput = age.value;
    ageResult.textContent = ageInput

    // Updating the styling of elements on the page
    if (ageInput < 18) {
        ageResult.style.color = "red";
    } 
    //return 0;
});
// Event properties