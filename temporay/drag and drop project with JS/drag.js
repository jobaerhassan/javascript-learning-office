let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let size = 0;
let drag =  null;
let boxx = null;
btn.onclick = function(){
    if(inp.value!= '')
    {
        boxs[0].innerHTML += `<p class="item" draggable="true" >${inp.value}</p>`
    }
    inp.value = '';
    
    //function for dragging
    dragItems();
}
function dragItems()
{
    let items = document.querySelectorAll('.item');
    // let size = items.length;
    items.forEach(item => {
        item.addEventListener('dragstart', function(){
            drag = item;
            item.style.opacity = '0.5';
        })
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = '1';
        })
    });
    boxs.forEach(box=>{
        refresh(box);
        box.addEventListener('dragover',function(e){
            console.log('dragover')
            refresh(box)
            e.preventDefault()
            this.style.background = '#090';
            this.style.color = '#fff';
            
            
        })
        box.addEventListener('dragleave',function(){
            console.log('dragleave')
            refresh(box);
           
            boxx = box;
            this.style.background = '#fff';
            this.style.color = '#000';
        })
        box.addEventListener('drop', function(){
            console.log('drop')
            refresh(box)
            box.append(drag);
            this.style.background = '#fff';
            this.style.color = '#000';
            let sourceBox = drag.closest('.box');
             refresh(sourceBox);
        })
        
    })
   
}
function refresh(box)
{
    let sz = box.querySelectorAll('.item');
    let len = sz.length;
    box.querySelector('#listCount').innerHTML = len;
}