const addButton = document.getElementById('btnAdd');
const inputField = document.getElementById('inputField');
const toDoList = document.getElementById('toDoList');

addButton.addEventListener('click', () => {    
    let pline = inputField.value;
    inputField.value = '';

    if(pline !== '') {
    const listLine = document.createElement('li');
    const listCheck = document.createElement('input');
    listCheck.type = 'checkbox'
    const listSpan = document.createElement('span');
    const listBtn = document.createElement('button');
    listBtn.id = 'delButton'

    listLine.appendChild(listCheck);
    listLine.appendChild(listSpan);
    listSpan.textContent = pline;
    listLine.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    toDoList.appendChild(listLine);
    
        listBtn.addEventListener('click', ()=>{
            toDoList.removeChild(listLine)
        })
    }

})

