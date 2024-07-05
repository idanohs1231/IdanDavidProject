let valueWidth,
valueHeight,
valueArea,
valueColor,
valueLarge,
valueThick,
valuePadding,
valueBox;

function upWidth() {
valueWidth = document.getElementById("lWidth").value + "px";
}
function upHeight() {
valueHeight = document.getElementById("lHeight").value + "px";
}
function upArea() {
valueArea = document.getElementById("lContent").value;
}
function upColor() {
valueColor = document.getElementById("lColor").value;
}
function upLarge() {
valueLarge = document.getElementById("lLarge").value + "em";
}
function upThick() {
valueThick = document.getElementById("newInput").value;
}
function upPadding() {
valuePadding = document.getElementById("newInputTwo").value + "px";
}
function upRaduis() {
valueRaduis = document.getElementById("newInputThree").value + "px";
}
function upBox() {
valueBox = document.getElementById("newInputFour").value;
}
document.getElementById("btn").addEventListener("click", myFunction);
function myFunction() {
document.documentElement.style.setProperty("--width1", valueWidth);
document.documentElement.style.setProperty("--height1", valueHeight);
document.documentElement.style.setProperty(
  "--background-color1",
  valueColor
);

if (isColorCloseToWhite(valueColor)) {
  document.getElementById("outputDiv").style.color = "black";
}
document.getElementById("outputDiv").innerText = valueArea;
document.documentElement.style.setProperty("--font-size1", valueLarge);
document.documentElement.style.setProperty("--border1", valueThick);
document.documentElement.style.setProperty("--padding1", valuePadding);
document.documentElement.style.setProperty("--raduis1", valueRaduis);
document.documentElement.style.setProperty("--box-shdow1", valueBox);
}

document.getElementById("cou").addEventListener("click", addLabelAndInput);

function addLabelAndInput(event) {
var couElement = document.getElementById("cou");

var rect = couElement.getBoundingClientRect();

var isClickOnArrow =
  event.clientX >= rect.left - 20 &&
  event.clientX <= rect.left &&
  event.clientY >= rect.top + rect.height / 2 - 10 &&
  event.clientY <= rect.top + rect.height / 2 + 10;

// Create new label and input elements
if (isClickOnArrow) {
  if (!isLabelExists()) {
    var newLabelOne = document.createElement("label");
    newLabelOne.setAttribute("for", "newInput");
    newLabelOne.textContent = "עיצוב מסגרת האלמנט";

    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "newInput");
    newInput.setAttribute("name", "newInput");
    newInput.setAttribute("oninput", "upThick()");

    // Append the new elements to the div
    couElement.appendChild(newLabelOne);
    couElement.appendChild(newInput);

    var newLabelTwo = document.createElement("label");
    newLabelTwo.setAttribute("for", "newInputTwo");
    newLabelTwo.textContent = "ריווח פנימי וריווח חיצוני";

    var newInputTwo = document.createElement("input");
    newInputTwo.setAttribute("type", "text");
    newInputTwo.setAttribute("id", "newInputTwo");
    newInputTwo.setAttribute("name", "newInputTwo");
    newInputTwo.setAttribute("oninput", "upPadding()");

    // Append the new elements to the div
    couElement.appendChild(newLabelTwo);
    couElement.appendChild(newInputTwo);

    var newLabelThree = document.createElement("label");
    newLabelThree.setAttribute("for", "newInputThree");
    newLabelThree.textContent = "פינות מעגולות";

    var newInputThree = document.createElement("input");
    newInputThree.setAttribute("type", "text");
    newInputThree.setAttribute("id", "newInputThree");
    newInputThree.setAttribute("name", "newInputThree");
    newInputThree.setAttribute("oninput", "upRaduis()");

    // Append the new elements to the div
    couElement.appendChild(newLabelThree);
    couElement.appendChild(newInputThree);

    var newLabelFour = document.createElement("label");
    newLabelFour.setAttribute("for", "newInputFour");
    newLabelFour.textContent = "אלמנט צל";

    var newInputFour = document.createElement("input");
    newInputFour.setAttribute("type", "text");
    newInputFour.setAttribute("id", "newInputFour");
    newInputFour.setAttribute("name", "newInputFour");
    newInputFour.setAttribute("oninput", "upBox()");

    // Append the new elements to the div
    couElement.appendChild(newLabelFour);
    couElement.appendChild(newInputFour);
  } else {
    console.log("The label already exists!");
  }
}
}

function isLabelExists() {
var existingLabel = document.getElementById("newInput");
return existingLabel !== null;
}

document.getElementById("btn1").addEventListener("click", function () {
// Clear the created element content
var outputDiv = document.getElementById("outputDiv");
outputDiv.innerText = "";

// Reset styles
document.documentElement.style.setProperty("--width1", "0px");
document.documentElement.style.setProperty("--height1", "0px");
document.documentElement.style.setProperty(
  "--background-color1",
  "#00000000"
);
document.documentElement.style.setProperty("--font-size1", "0em");
document.documentElement.style.setProperty(
  "--border1",
  "0px solid white"
);
document.documentElement.style.setProperty("--padding1", "0px");
document.documentElement.style.setProperty("--raduis1", "0px");
document.documentElement.style.setProperty(
  "--box-shdow1",
  "0px 0px lightblue"
);
});

function isColorCloseToWhite(color) {
// Convert hex color to RGB
const hex = color.replace("#", "");
const r = parseInt(hex.substring(0, 2), 16);
const g = parseInt(hex.substring(2, 4), 16);
const b = parseInt(hex.substring(4, 6), 16);

// Calculate brightness (perceived luminance)
const brightness = (r * 299 + g * 587 + b * 114) / 1000;

// Return true if brightness is higher than 200 (close to white)
return brightness > 200;
}