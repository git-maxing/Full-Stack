const newDiv = document.createElement('div')
newDiv.id = 'myDiv';
newDiv.textContent = 'Hello,I am a new div!';
document.body.appendChild(newDiv);


//acessing the elemnt using DOM
const accessedDiv = document.getElementById('newDiv');

console.log(accessedDiv.textContent);