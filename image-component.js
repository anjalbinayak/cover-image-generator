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

	let zIndexController = document.createElement('input');
	zIndexController.setAttribute('placeholder',' Z index Of Image ');
	zIndexController.type="number";
	zIndexController.setAttribute('id',`zindex-controller-${image.id}`);
	imageController.appendChild(zIndexController);


	attachWidthControl(image,widthController);
	attachHeightControl(image,heightController);
	attachZIndexControl(image.parentElement,zIndexController);

	sidebar.appendChild(imageController);

}

function attachZIndexControl(image,input){
	   input.addEventListener('change',function(){
   	  image.style.zIndex = parseInt(input.value);
   });
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