
function notify(type,message) {
  let n = document.createElement("div");
  const id = Math.random().toString(36).slice(2);
  n.setAttribute("id", id);
  n.classList.add("notification", type);
  n.innerText = message;
  document.getElementById("notification-area").appendChild(n);
  
  setTimeout(() => {
    // const toRemove = document.getElementById(id);
    n.remove()
  },5000);
}

function notifySuccess(){
    notify('success', "this is success message");
}

function notifyError(){
    notify('error', "this is error message");
}

function notifyInfo(){
    notify('info', "this is info message");
}