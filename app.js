let input=document.getElementById('input')
let addButton=document.getElementById('button')
let todolist=document.getElementById('todolist')

let storage=[]
 addButton.onclick=click 

 input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        click();
    }
});


 function click() {
    storage.push(input.value)
    console.log(storage) 
    input.value = '' 
    show()
 }

 function  show (){
    todolist.innerHTML =''
    storage.forEach(function(todo,index){
        todolist.innerHTML +=
       "<li>"
            +todo+
            "<a onclick='edithandle(" + index + ")'>EditTodo</a>" +
        "<a onclick='deletehandle(" + index + ")'>&times;</a>" +
        "</li>" 
    }) 
}

function edithandle(index){
let newValue=prompt('Please insert your new value')
if (newValue.length>0){
storage.splice(index,1,newValue)
show() ;
}
}

function deletehandle(index){
storage.splice(index,1)
show()
}

 