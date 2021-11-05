const cardSection = document.getElementById("cards");
const cardAddInput = document.getElementById("input-for-add-card");
const tables = document.getElementById("tables");
const cardSettings = document.getElementById("card-settings");
const tableName = document.getElementById("main-table-name");
let nowEditCard = false;
let draggables = document.querySelectorAll(".draggable");
let containers = document.querySelectorAll(".container");
let draggables2 = [];

const cardSection2 = document.getElementById("cards2");
const cardAddInput2 = document.getElementById("input-for-add-card2");
const tables2 = document.getElementById("tables2");
const cardSettings2 = document.getElementById("card-settings2");
const tableName2 = document.getElementById("main-table-name2");

const cardSection3 = document.getElementById("cards3");
const cardAddInput3 = document.getElementById("input-for-add-card3");
const tables3 = document.getElementById("tables3");
const cardSettings3 = document.getElementById("card-settings3");
const tableName3 = document.getElementById("main-table-name3");

const cardSection4 = document.getElementById("cards4");
const cardAddInput4 = document.getElementById("input-for-add-card4");
const tables4 = document.getElementById("tables4");
const cardSettings4 = document.getElementById("card-settings4");
const tableName4 = document.getElementById("main-table-name4");

const save = document.getElementById("save");

save.addEventListener("click", Save);

Print();

//////////////////////////////
function createCard(text) {
  const date = document.createElement("p");
  date.classList.add("date");
  date.innerText = "🕰️18 April";

  const color = document.createElement("div");
  color.classList.add("color__card");

  const label = document.createElement("p");
  label.className = "cardLabel";
  label.innerText = text;

  const editLabel = document.createElement("a");
  editLabel.className = "labelEditor";

  const card = document.createElement("div");
  card.className = "card";

  card.appendChild(color);
  card.appendChild(label);
  card.append(editLabel);
  card.append(date);
  card.classList.add("draggable");
  card.setAttribute("draggable", "true");

  addCardEvent(card);
  draggables2.push(text);

  return card;
}
/////////////////////////////////////////////////////////////
function addCardEvent(card) {
  const label = card.querySelector(".cardLabel");

  label.addEventListener("click", editCard);
}

//////////////////////////////////////////////////////////
function DragnDropp() {
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");

      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
}

function addCard() {
  if (cardAddInput.value) {
    cardSection.appendChild(createCard(cardAddInput.value));
    cardAddInput.value = ""; // clear input value for next card
    draggables = document.querySelectorAll(".draggable");
    containers = document.querySelectorAll(".container");
    console.log(draggables);
  } else {
    alert("To add a card enter text in input");
  }

  DragnDropp();
}

function addCard2() {
  if (cardAddInput2.value) {
    cardSection2.appendChild(createCard(cardAddInput2.value));
    cardAddInput2.value = ""; // clear input value for next card
    draggables = document.querySelectorAll(".draggable");
    containers = document.querySelectorAll(".container");
  } else {
    alert("To add a card enter text in input22222222222");
  }
  DragnDropp();
}

function addCard3() {
  if (cardAddInput3.value) {
    cardSection3.appendChild(createCard(cardAddInput3.value));
    cardAddInput3.value = ""; // clear input value for next card
    draggables = document.querySelectorAll(".draggable");
    containers = document.querySelectorAll(".container");
  } else {
    alert("To add a card enter text in input22222222222");
  }
  DragnDropp();
}

function addCard4() {
  if (cardAddInput4.value) {
    cardSection4.appendChild(createCard(cardAddInput4.value));
    cardAddInput4.value = ""; // clear input value for next card
    draggables = document.querySelectorAll(".draggable");
    containers = document.querySelectorAll(".container");
    console.log(draggables);
  } else {
    alert("To add a card enter text in input");
  }

  DragnDropp();
}
//////////////////////////////////////////////
function addCard01(ss) {
  cardSection.appendChild(createCard(ss));
  draggables = document.querySelectorAll(".draggable");
  containers = document.querySelectorAll(".container");
  DragnDropp();
}
function addCard02(ss) {
  cardSection2.appendChild(createCard(ss));
  draggables = document.querySelectorAll(".draggable");
  containers = document.querySelectorAll(".container");
  DragnDropp();
}

function addCard03(ss) {
  cardSection3.appendChild(createCard(ss));
  draggables = document.querySelectorAll(".draggable");
  containers = document.querySelectorAll(".container");
  DragnDropp();
}

function addCard04(ss) {
  cardSection4.appendChild(createCard(ss));
  draggables = document.querySelectorAll(".draggable");
  containers = document.querySelectorAll(".container");
  DragnDropp();
}

//////////////////////////////////////////////////
function Save() {
  for (let i = 0; i < 4; i++) {
    if (containers[i].childNodes[0] != undefined) {
      let j = 0;
      let x = 0;
      while (containers[i].childNodes[j] != undefined) {
        x = i * 10 + j;
        x.toString(10);
        sessionStorage.setItem(
          x.toString(10),
          containers[i].childNodes[j].childNodes[1].innerText
        );

        j += 1;
      }
    } else {
      for (let j = 0; j < 10; j++) {
        let o = i * 10 + j;
        sessionStorage.setItem(o.toString(10), "masterYi");
      }
    }
  }
}

function Print() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 10; j++) {
      let x = i * 10 + j;
      let ss = sessionStorage.getItem(x.toString(10));
      if (ss == "masterYi") {
        break;
      } else {
        if (ss != null) {
          switch (i) {
            case 0:
              addCard01(ss);
              break;
            case 1:
              addCard02(ss);
              break;
            case 2:
              addCard03(ss);
              break;
            case 3:
              addCard04(ss);
              break;
          }
        }
      }
    }
  }
}

//////////////////////////////////////////////////
function editCard(event) {
  const card = this.parentNode;
  const label = card.querySelector(".cardLabel");

  const editPanelLabel = cardSettings.querySelector("#cardLabelheader");
  const editPanelListInfo = cardSettings.querySelector("#card-list-info");
  const editPanelInput = cardSettings.querySelector(
    "#input-for-change-card-label"
  );

  card.classList.toggle("nowediting");
  const isEditing = card.classList.contains("nowediting");

  const saveButton = cardSettings.querySelector("#saved-card-changes");
  const deleteButton = cardSettings.querySelector("#delete-card");
  const closeButton = cardSettings.querySelector("#close-edit-panel");

  if (isEditing) {
    saveButton.addEventListener("click", function () {
      document
        .querySelector(".nowediting")
        .querySelector(".cardLabel").innerText = editPanelInput.value;
      card.classList.remove("nowediting");
      CloseEditPanel();
    });

    deleteButton.addEventListener("click", function () {
      if (isEditing) {
        deleteCard(document.querySelector(".nowediting"));
        card.classList.remove("nowediting");
        CloseEditPanel();
      }
    });

    closeButton.addEventListener("click", function () {
      card.classList.remove("nowediting");
      CloseEditPanel();
    });
  }

  editPanelListInfo.innerHTML = "in list " + tableName.innerHTML;
  editPanelLabel.innerHTML = label.innerText;
  editPanelInput.value = label.innerText;

  ShowEditPanel();
}

//part3
function deleteCard(card) {
  cardSection.removeChild(card);
}

//part3
function ShowEditPanel() {
  if (nowEditCard) {
    cardSettings.style.display = "none";
    nowEditCard = false;
  } else {
    cardSettings.style.display = "block";
    nowEditCard = true;
  }
}

//part3
function CloseEditPanel() {
  cardSettings.style.display = "none";
  nowEditCard = false;
}
////////////////////////////////////////////////////////////////////////////////////////
