var form =document.querySelector("#main-2")
var adder = document.querySelector("#additem")
var items = document.querySelector("#lists")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todoValue = adder.value
    if(todoValue){
        const todoElem = document.createElement("li")
        todoElem.innerHTML = todoValue
        items.appendChild(todoElem)
        adder.value = ""

        const completed =document.createElement("button")
        completed.setAttribute("id","completed")
        completed.innerHTML =" &#10003 ";
        todoElem.appendChild(completed)

        const deleted = document.createElement("button")
        deleted.setAttribute("id","deleted")
        deleted.innerHTML = "&#10006";
        todoElem.appendChild(deleted)

        completed.addEventListener("click",()=>{
            todoElem.classList.toggle("myLi")
        })
        deleted.addEventListener("click",()=>{
            todoElem.remove()
        })
    }
});
