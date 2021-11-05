const inputforchange = document.getElementById("table-name-input");

const name = document.getElementById("main-table-name");

const completer = document.getElementById("completer");

const namechanger = document.getElementById("namechanger");

let nowChanges = false;

function ChangeTableName() {
  if (nowChanges) {
    completer.style.display = "none";
    inputforchange.value = name.innerHTML;
    inputforchange.style.display = "none";
    namechanger.innerHTML = "<li class='div first-edit'></li>";
    nowChanges = false;
  } else {
    completer.style.display = "block";
    namechanger.innerHTML = "<li class='far fa-times-circle'></li>";
    inputforchange.value = name.innerHTML;
    inputforchange.style.display = "block";
    nowChanges = true;
  }
}

function SaveTableNameChanges() {
  if (inputforchange.value) {
    name.innerHTML = inputforchange.value;

    completer.style.display = "none";
    inputforchange.style.display = "none";
    namechanger.innerHTML = "<li class='div first-edit'></li>";
    nowChanges = false;
  } else {
    alert("The table must have a name!");
  }
}
const inputforchange2 = document.getElementById("table-name-input2");
const name2 = document.getElementById("main-table-name2");
const completer2 = document.getElementById("completer2");
const namechanger2 = document.getElementById("namechanger2");
let nowChanges2 = false;
function ChangeTableName2() {
  if (nowChanges2) {
    completer2.style.display = "none";
    inputforchange2.value = name2.innerHTML;
    inputforchange2.style.display = "none";
    namechanger2.innerHTML = "<li class='fas fa-edi2t'></li>";
    nowChanges2 = false;
  } else {
    completer2.style.display = "block";
    namechanger2.innerHTML = "<li class='far fa-times-circle2'></li>";
    inputforchange2.value = name2.innerHTML;
    inputforchange2.style.display = "block";
    nowChanges2 = true;
  }
}

function SaveTableNameChanges2() {
  if (inputforchange2.value) {
    name2.innerHTML = inputforchange2.value;

    completer2.style.display = "none";
    inputforchange2.style.display = "none";
    namechanger2.innerHTML = "<li class='div first-edit'></li>";
    nowChanges2 = false;
  } else {
    alert("The table must have a name!");
  }
}
const inputforchange3 = document.getElementById("table-name-input3");
const name3 = document.getElementById("main-table-name3");
const completer3 = document.getElementById("completer3");
const namechanger3 = document.getElementById("namechanger3");
let nowChanges3 = false;
function ChangeTableName3() {
  if (nowChanges3) {
    completer3.style.display = "none";
    inputforchange3.value = name3.innerHTML;
    inputforchange3.style.display = "none";
    namechanger3.innerHTML = "<li class='div first-edit'></li>";
    nowChanges3 = false;
  } else {
    completer3.style.display = "block";
    namechanger3.innerHTML = "<li class='circle3'></li>";
    inputforchange3.value = name3.innerHTML;
    inputforchange3.style.display = "block";
    nowChanges3 = true;
  }
}

function SaveTableNameChanges3() {
  if (inputforchange3.value) {
    name3.innerHTML = inputforchange3.value;

    completer3.style.display = "none";
    inputforchange3.style.display = "none";
    namechanger3.innerHTML = "<li class='div first-edit'></li>";
    nowChanges3 = false;
  } else {
    alert("The table must have a name!");
  }
}
const inputforchange4 = document.getElementById("table-name-input4");
const name4 = document.getElementById("main-table-name4");
const completer4 = document.getElementById("completer4");
const namechanger4 = document.getElementById("namechanger4");
let nowChanges4 = false;
function ChangeTableName4() {
  if (nowChanges4) {
    completer4.style.display = "none";
    inputforchange4.value = name4.innerHTML;
    inputforchange4.style.display = "none";
    namechanger4.innerHTML = "<li class='div first-edit'></li>";
    nowChanges4 = false;
  } else {
    completer4.style.display = "block";
    namechanger4.innerHTML = "<li class='circle4'></li>";
    inputforchange4.value = name4.innerHTML;
    inputforchange4.style.display = "block";
    nowChanges4 = true;
  }
}

function SaveTableNameChanges4() {
  if (inputforchange4.value) {
    name4.innerHTML = inputforchange4.value;

    completer4.style.display = "none";
    inputforchange4.style.display = "none";
    namechanger4.innerHTML = "<li class='div first-edit'></li>";
    nowChanges4 = false;
  } else {
    alert("The table must have a name!");
  }
}
