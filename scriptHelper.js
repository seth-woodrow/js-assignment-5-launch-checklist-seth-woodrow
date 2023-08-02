// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    window.addEventListener("load",function(){
        let form =document.querySelector("form");
        form.addEventListener("submit",function(event){
            let input=document.querySelector("input[name=testInput]");
            if(input.value==="")
            return "Empty";
            
            if(isNaN(input.value))
            return "Not a Number";

            return"Is a Number";
        })
    })
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    window.addEventListener("load",function(){
        let document=document.querySelector("document");
        document.addEventListener("submit",function(event){
            let pilot= document.querySelector("input[name=pilotName]");
            let copilot=document.querySelector("input[name=copilotName]");
            let fuelLevel =document.querySelector("input[name=fuelLevel]");
            let cargoLevel=document.querySelector("input[name=cargoMass]");
            let list = [pilot, copilot, fuelLevel,cargoLevel];

            for(let i =0;i<list.length;i++){
                validateInput(list[i]);
            }


        })
    })
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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
