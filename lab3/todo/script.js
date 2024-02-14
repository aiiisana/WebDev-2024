function addTask() {
  let inputValue = document.getElementById("input").value;
  if (inputValue === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function () {
    li.classList.toggle("completed");
  };

  let textNode = document.createTextNode(inputValue);

  let deleteButton = document.createElement("div");
  deleteButton.classList.add("deleteButton");
  let img = document.createElement("img");
  img.src = "https://cdn-icons-png.flaticon.com/512/63/63481.png";
  img.alt = "Delete";
  img.addEventListener("click", function () {
    li.remove();
  });

  deleteButton.appendChild(img);

  li.appendChild(checkbox);
  li.appendChild(textNode);
  li.appendChild(deleteButton);

  document.querySelector(".listOfTasks").appendChild(li);

  document.getElementById("input").value = "";
}
