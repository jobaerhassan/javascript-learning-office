const milestonData = JSON.parse(data).data;

//load milestones data
function loadMilestones()
{
    const milestones = document.querySelector('.milestones')
    
    milestones.innerHTML = `${milestonData.map((milestone)=>{
        return `<div class="milestones">
        <div class="milestone border-b">
          <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div onclick = "openMilestone(this)">
              <p>
                ${milestone.name}
                <span><i class="fas fa-chevron-down"></i></span>
              </p>
            </div>
          </div>
          ${milestone.modules.map((module)=>{
            return `
            <div class="hidden_panel ">
            <div class="module border-b">
                <p>${module.name}</p>
            </div>
            </div>`
          }).join("")}
        </div>`;
    }).join("")}`
    
}
function openMilestone(element)
{
    const parent = element.parentNode.nextElementSibling;
    const shownPanel = document.querySelector('.show');
    const activePanel = document.querySelector('.active');
    if(!element.classList.contains('active') && activePanel){
        activePanel.classList.remove('active');
    }
    element.classList.toggle('active')
    if(!parent.classList.contains("show") && shownPanel){
        shownPanel.classList.remove('show')
    }
    parent.classList.toggle('show')
   

}

loadMilestones()
