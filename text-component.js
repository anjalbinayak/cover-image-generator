
const TEXT_COMPONENT_CLASS = 'bin-text-component';


function createText(textNode, type, color){
	let textContainer = document.createElement('div');
	textContainer.classList.add('text-container');
	textContainer.setAttribute('id',ID());
	let text = document.createElement(type);
	text.innerHTML = textNode;
	text.style.color = color;
	textContainer.appendChild(text);
	document.body.appendChild(textContainer);
	attachController(textContainer);
	dragElement(textContainer);

}

function attachController(elmt){
	let controllersGroup = document.querySelector('.controllers');
	let controller = document.createElement('div');
	controller.classList.add('controller');
	controller.setAttribute('id',`controller-${elmt.id}`);
	let textInput = document.createElement('input');
	textInput.classList.add('change-text');
	textInput.setAttribute('id',`change-text-${elmt.id}`);
	textInput.setAttribute('placeholder','Text');
	textInput.value=elmt.childNodes[0].innerHTML;
	controller.appendChild(textInput);

	let topPos = document.createElement('input');
	topPos.type='number';
	topPos.setAttribute('id',`top-pos-${elmt.id}`);
	topPos.classList.add('top-pos');
	topPos.setAttribute('placeholder','Top Position');
	topPos.value = elmt.style.top;
	controller.appendChild(topPos);

	let leftPos = document.createElement('input');
	leftPos.classList.add('left-pos');
	leftPos.type='number';
	leftPos.setAttribute('id',`left-pos-${elmt.id}`);
	leftPos.setAttribute('placeholder','Left Position');
	leftPos.value= elmt.style.left;
	controller.appendChild(leftPos);


	let color = document.createElement('input');
	color.classList.add('color');
	color.type="color";
	color.setAttribute('id',`color-${elmt.id}`);
	color.setAttribute('title','Change Color');
	color.value = elmt.style.color;
	controller.appendChild(color);


    let backgroundColor = document.createElement('input');
	backgroundColor.classList.add('bg-color');
	backgroundColor.type="color";
	backgroundColor.setAttribute('id',`bg-color-${elmt.id}`);
	backgroundColor.setAttribute('title','Change Background Color');
	backgroundColor.value = elmt.style.color;
	controller.appendChild(backgroundColor);

	attachTextControl(elmt,textInput);
	attachTopPosition(elmt,topPos);
	attachLeftPosition(elmt,leftPos);
	attachColorControl(elmt,color);
	attachBgColorControl(elmt,backgroundColor);

	controllersGroup.appendChild(controller);

}

function attachTextControl(element,inputController){
	inputController.addEventListener('keyup',function(){
		element.childNodes[0].innerHTML = inputController.value;
	});
}

function attachColorControl(element,inputController){
	inputController.addEventListener('change', function(){
		element.childNodes[0].style.color = inputController.value;
	});
}

function attachBgColorControl(element,inputController){
	inputController.addEventListener('change', function(){
		element.childNodes[0].style.backgroundColor = inputController.value;
	});
}

function attachTopPosition(element,inputController){
	inputController.addEventListener('keyup',function(){
		element.style.top = parseInt(inputController.value)+"px";
	});
}

function attachLeftPosition(element,inputController){
	inputController.addEventListener('keyup',function(){
		element.style.left = parseInt(inputController.value)+"px";
	});
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    updatePositionControllerValue(elmnt);
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

}

function updatePositionControllerValue(elmt){
	let topPos = document.getElementById(`top-pos-${elmt.id}`);
	let leftPos = document.getElementById(`left-pos-${elmt.id}`);
	if(topPos)
	topPos.value = parseInt(elmt.style.top);
	if(leftPos)
	leftPos.value = parseInt(elmt.style.left);
}

function ID() {
  return '_' + Math.random().toString(36).substr(2, 9);
};