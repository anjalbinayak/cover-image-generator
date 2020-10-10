

let articleCover = document.querySelector('#article-cover');
let articleCoverBgImage = document.querySelector("#article-bg-image");

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      let imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');
      let image = document.createElement('img'); 
      imageContainer.appendChild(image);
      articleCoverBgImage.appendChild(imageContainer);
      image.id=ID();
      image.style.width='600px';
      image.style.height='300px';
      image.src= e.target.result;
      createImageController(image);
      dragElement(imageContainer);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

document.querySelector("#article-cover-bg").addEventListener('change',function() {
  readURL(this);
});