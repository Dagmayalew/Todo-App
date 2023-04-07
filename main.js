document.querySelector("#submit").onclick = function () {
  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Enter Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#newTask input").value}
              </span>
              <button class="delete">
                  X
              </button>
          </div>
      `;
    const Input = document.getElementById("input");
    Input.value = "";
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
