
// Write your JavaScript code here!
window.addEventListener("load", function() {

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
      div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li> 
         </ol>
         <img src=${json[index].image}>
         `
   });
});
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("Error: All fields are required!");
         event.preventDefault();
      }
      if (isNaN(fuelLevelInput.value)) {
         alert("Error: Invalid entry. 'Fuel Level' must be a number.");
         event.preventDefault();
      }
      if (isNaN(cargoMassInput.value)) {
            alert("Error: Invalid entry. 'Cargo Mass' must be a number.");
            event.preventDefault();
      }
      if (!pilotNameInput.value.match(/^[A-Za-z]+$/)) {
         alert("Error: Invalid entry. 'Pilot Name' must be a valid name.");
         event.preventDefault();
      }
      if (!copilotNameInput.value.match(/^[A-Za-z]+$/)) {
         alert("Error: Invalid entry. 'Co-pilot Name' must be a valid name.");
         event.preventDefault();
      }
      let x = document.getElementById("pilotStatus")
      x.innerHTML = `Pilot Status: ${pilotNameInput.value} is ready for launch`;
      let y = document.getElementById("copilotStatus")
      y.innerHTML = `Copilot Status: ${copilotNameInput.value} is ready for launch`;
      document.getElementById("faultyItems").style.visibility = "visible";
      

      if (fuelLevelInput.value < 10000) {
         document.getElementById("fuelStatus").style.visibility = "visible";
         let z = document.getElementById("fuelStatus")   
         z.innerHTML = "Fuel Status: Fuel level too low to launch."
         let changeColor = document.querySelector("#launchStatus")
         launchStatus.style.color = "red" 
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
      }

      if (cargoMassInput.value > 10000) {
         document.getElementById("cargoStatus").style.visibility = "visible";
         let a = document.getElementById("cargoStatus")   
         a.innerHTML = "Cargo Status: Cargo mass too heavy to launch."
         let changeColor = document.querySelector("#launchStatus")
         launchStatus.style.color = "red" 
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
      }
      if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
         let changeColor = document.querySelector("#launchStatus")
         launchStatus.style.color = "green" 
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
      }
event.preventDefault();
});
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
