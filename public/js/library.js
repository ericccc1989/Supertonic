const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

function dragStart(){
    draggableTodo = this;
    console.log("dragStart");
}

function dragEnd(){
    draggableTodo = null;
    console.log("dragEnd");
}

all_status.forEach((status) =>{
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

function dragOver(e){
    e.preventDefault();
    // console.log("dragOver");
}

function dragEnter(){
    this.style.border = "1px dashed #ccc";
    console.log("dragEnter");
}

function dragLeave(){
    this.style.border = "none";
    console.log("dragLeave");
}
function dragDrop(){
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");
}

// modal;

const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* create todo */
const kanban_submit = document.getElementById('todo_submit');

kanban_submit.addEventListener("click", createTaskdiv);

function createTaskdiv(){
    /* task div and checkbox are created in this part*/
    const a =document.createElement("a");
    const todo_div = document.createElement("div");
    const check = document.createElement("input");

    /* This part imports user's input and get ready to be appended in div. I also set a max string length of 15 in order to ensure text in the task div will not be too long. */
    const input_val_link = document.getElementById("todo_input_link").value;
    const input_val_name = document.getElementById("todo_input_name").value;
    const txt = document.createTextNode(input_val_name);
    var input_val_max =input_val_name.substring(0,15)+"...";
    const txt_max = document.createTextNode(input_val_max);

    a.href="https://"+input_val_link.toString();

    /* This if statement help select text that will appear in the div. If input length smaller than 15, all the string will be presented, if larger than 15, only first 15 characters will be presented*/
    if (input_val_name.length <=15){
       a.appendChild(txt);}
    else{
       a.appendChild(txt_max);
    }

    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable","true");

    /* create span */
    const span = document.createElement("span");
    const span_txt =document.createTextNode("\u00D7");
    span.classList.add("close");

    no_status.appendChild(todo_div);
    todo_div.appendChild(a);
    todo_div.appendChild(span);
    span.appendChild(span_txt);

    span.addEventListener('click', ()=>{
        span.parentElement.style.display = "none";
    });
    //console.log(todo_div);
    todo_div.addEventListener("dragstart", dragStart);
    todo_div.addEventListener("dragend", dragEnd);

    document.getElementById("todo_input_name").value="";
    todo_form.classList.remove("active");
    overlay.classList.remove("active");
}

const close_btns = document.querySelectorAll(".close");
close_btns.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
        btn.parentElement.style.display = "none";
    });
});
