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
    let form=document.getElementById("testForm");
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
    let form=document.getElementById("testForm");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let list =[]
        let pilot= document.getElementByTagName("pilotName").value;
        let copilot=document.getElementByTagName("copilotName").value;
        let fuelLevel=document.getElementByTagName("fuelLevel").value;
        let cargoLevel=document.getElementByTagName("cargoMass").value;

        list.push(pilot,copilot,fuelLevel,cargoLevel);

        for(let i=0;i<list.length;i++){
            let hold=[]
            if(validateInput(list[i]==="Empty")){
                alert("All Fields are Required!");
            }
            if(validateInput(list[i]==="Not a Number")){
                document.getElementById("faultyItems").style.visibility="visible";
                document.getElementById("faultyItems").innerHTML.pilotStatus=`Pilot Ready : ${pilot}`;
                document.getElementById("faultyItems").innerHTML.copilotStatus=`Co-pilot Ready:${copilot}`;
            }
            if(validateInput(list[i]==="Is a Number")){
                list[i].push(hold);
            }
            else if(hold[0]>10000&&hold[1]<10000){
                document.getElementById("faultyItems").style.visibility="visible";
                document.getElementById("faultyItems").innerHTML.fuelStatus="Not enought fuel for the journey";
                document.getElementById("faultyItems").innerHTML.cargoStatus="Too much mass for the shuttle";
                document.getElementById("h2").innerHTML="Shuttle not ready for launch"
                document.getElementById("h2").style.color-"red"
            }
            else if (hold[0]>10000&&hold[1]>10000){
            document.getElementById("faultyItems").style.visibility="visible";
            document.getElementById("faultyItems").innerHTML.fuelStatus="Not enought fuel for the journey";
            document.getElementById("faultyItems").innerHTML.cargoStatus="Cargo mass low enough for launch";
            document.getElementById("h2").innerHTML="Shuttle not ready for launch"
            document.getElementById("h2").style.color-"red"
            }
            else if (hold[0]<10000&&hold[1]<10000){
            document.getElementById("faultyItems").style.visibility="visible";
            document.getElementById("faultyItems").innerHTML.fuelStatus="Fuel level high enough for launch";
            document.getElementById("faultyItems").innerHTML.cargoStatus="Too much mass for the shuttle";
            document.getElementById("h2").innerHTML="Shuttle not ready for launch"
            document.getElementById("h2").style.color-"red"
            }
            else if (hold[0]<=10000&&hold[1]>=10000){
                document.getElementById("faultyItems").style.visibility="visible";
                document.getElementById("faultyItems").innerHTML.fuelStatus="Fuel level high enough for launch";
                document.getElementById("faultyItems").innerHTML.cargoStatus="Cargo mass low enough for launch";
                document.getElementById("h2").innerHTML="Shuttle  ready for launch"
                document.getElementById("h2").style.color-"green"
            }
            else{
                alert("All Fields Required")
            }
        }
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
