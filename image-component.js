let sidebar = document.querySelector('.sidebar');

function createImageController(image){
	let imageController = document.createElement('div');
	imageController.classList.add('image-controller');

	let widthController = document.createElement('input');
	widthController.setAttribute('placeholder',' Width Of Image ');
	widthController.type="number";
	widthController.setAttribute('id',`width-controller-${image.id}`);
	imageController.appendChild(widthController);


	let heightController = document.createElement('input');
	heightController.setAttribute('placeholder',' Height Of Image ');
	heightController.type="number";
	heightController.setAttribute('id',`height-controller-${image.id}`);
	imageController.appendChild(heightController);

	attachWidthControl(image,widthController);
	attachHeightControl(image,heightController);
	sidebar.appendChild(imageController);

}

function attachWidthControl(image,input){
   input.addEventListener('change',function(){
   	  image.style.width = parseInt(input.value)+"px";
   });
}

function attachHeightControl(image,input){
	 input.addEventListener('change',function(){
   	  image.style.height = parseInt(input.value)+"px";
   });
}