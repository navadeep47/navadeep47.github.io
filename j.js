const a=document.querySelector(".form")
const input1=document.querySelector(".input")
const e1=document.querySelector(".list")
a.addEventListener("submit", (event)=>{
    event.preventDefault();
    todolist();
});
function todolist(){
    let newtask=input1.value;
    const liE1 = document.createElement("li");
    liE1.innerHTML = newtask;
    e1.appendChild(liE1)
    input1.value=""
    const checkbox = document.createElement("div");
    checkbox.innerHTML = `<i class="fas fa-check-square"></i>`;
    liE1.appendChild(checkbox);

    const trashbin = document.createElement("div");
    trashbin.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liE1.appendChild(trashbin);

    checkbox.addEventListener("click", ()=>{
        liE1.classList.toggle("checked")
    });
    trashbin.addEventListener('click', ()=>{
        liE1.remove();
    });
}
