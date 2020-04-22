import "./styles.css";
let tempLetter = "F";
document.getElementById("app").innerHTML = `
<h1>Temperature converter</h1>
<div>
  <p id= "p">Enter a temperature to convert:</sup>
  <br>
  
    <label for="temp-in"></label>
    <input type="number" id="temp-in" value="0"></input>
    <a id="varT">${tempLetter}<sup>o</sup></a>
 
  <br>
    <form id="far-cel" class="radio-buttons">
      <input type="radio" id="far" class="radios" name="temp-select" value="Farenheit" checked>Farenheit</input>
      <input type="radio" id="cel" class="radios" name="temp-select" value="Celcius">Celcius</input>
      <input type="button" id="sub-butn" value="Convert"></input>
      </form>
</div>
`;

const radioSelect = document.querySelector("#far-cel");
radioSelect.onclick = function() {
  let radioSelected = document.querySelectorAll('input[name="temp-select"]');
  for (const radioType of radioSelected) {
    if (radioType.checked) {
      tempLetter = radioType.value[0];
      let tSwitch= document.getElementById("varT")
      tSwitch.innerHTML =`${tempLetter}<sup>o</sup>`
      break;
    }
  }
};

var finalTemp;
const subButn = document.querySelector("#sub-butn");
subButn.onclick = function() {
  let tmptype = document.querySelectorAll('input[name="temp-select"]');
  let selectedValue;
  for (const ttype of tmptype) {
    if (ttype.checked) {
      selectedValue = ttype.value;
      console.log(selectedValue);
      break;
    }
  }
  if (typeof finalTemp !== "undefined") {
    // console.log(finalTemp);
    let temp = document.querySelector("#temp-el");
    document.body.removeChild(temp);
  }
  let tempIn = document.getElementById("temp-in").value;
  // console.log(tempIn)
  if (selectedValue === "Farenheit") {
    finalTemp = ((tempIn - 32) * 5) / 9;
    var oppositeValue = "C";
  } else if (selectedValue === "Celcius") {
    finalTemp = (tempIn / 5) * 9 + 32;
    oppositeValue = "F";
  }

  let returnTemp = document.createElement("p");
  returnTemp.id = "temp-el";
  returnTemp.innerHTML = `<h2>${finalTemp}<sup>o</sup>${oppositeValue}</h2>`;
  document.body.appendChild(returnTemp);
};

// }
