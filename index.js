function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = htmlFor;
  return label;
}
function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}
const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", function (ev) {
  const stackInputs = document.getElementById("stackInputs");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome: ", "Nome:");
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  const expLabel = createLabel("Experiência:", "Experiência:");
  const id1 = "0-2" + "-anos";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id1);
  const id2 = "3-4" + "-anos";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel3 = createLabel("+5 anos", id2);
  const id3 = "+5" + "-anos";
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  const expLabel4 = createLabel("5+ anos", id3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = " button ";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel2,
    expRadio2,
    expLabel3,
    expRadio3,
    expLabel4,
    removeRowBtn
  );

  stackInputs.appendChild(newRow);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullnameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { fullname: fullnameInput.value, technologies: technologies };
  developers.push(newDev);
  alert("Dev cadastrado com sucesso!");

  fullnameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
