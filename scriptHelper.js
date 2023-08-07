// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const destination=document.getElementById("missionTarget");
    destination.innerHTML=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
    let form=document.getElementById("launchForm");
    form.addEventListener("submit", function(event){
        event.preventDefault()
        if(testInput.trim()===""){
            return "Empty";
        }
        if(!isNaN(testInput.value)){
            return "Is a Number"
        }
        return "Not a Number"
    })
    
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form=document.getElementById("launchForm");
    form.addEventListener("submit",function(event){
        event.preventDefault();

        list =[]
        pilot= document.getElementByTagName("pilotName")
        copilot=document.getElementByTagName("copilotName")
        fuelLevel=document.getElementByTagName("fuelLevel")
        cargoLevel=document.getElementByTagName("cargoMass")

        list.push(pilot,copilot,fuelLevel,cargoLevel);
        
        for (let i =0;i<list.length;i++){
            let validationResult =validateInput(list[i]);
            if(validationResult==="Empty"){
                alert("All Fields are Required");
            }else if(validationResult==="Not a Number"){
                alert("Please enter a valid number for fuel level and cargo mass!")
            }
        }

        fuelLevel=Number(fuelLevel);
        cargoLevel=Number(cargoLevel);

        if (fuelLevel < 10000 && cargoLevel > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("faultyItems").innerHTML = `Fuel Level: Not enough fuel for the journey<br>Cargo Mass: Too much mass for the shuttle`;
            document.getElementById("h2").innerHTML = "Shuttle not ready for launch";
            document.getElementById("h2").style.color = "red";
        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("faultyItems").innerHTML = `Fuel Level: Not enough fuel for the journey<br>Cargo Mass: Low enough for launch`;
            document.getElementById("h2").innerHTML = "Shuttle not ready for launch";
            document.getElementById("h2").style.color = "red";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("faultyItems").innerHTML = `Fuel Level: High enough for launch<br>Cargo Mass: Too much mass for the shuttle`;
            document.getElementById("h2").innerHTML = "Shuttle not ready for launch";
            document.getElementById("h2").style.color = "red";
        } else {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("faultyItems").innerHTML = `Fuel Level: High enough for launch<br>Cargo Mass: Low enough for launch`;
            document.getElementById("h2").innerHTML = "Shuttle ready for launch";
            document.getElementById("h2").style.color = "green";
        }
    });
    return
}    


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
