

let articleCover = document.querySelector('#article-cover');
let articleCoverBgImage = document.querySelector("#article-bg-image");

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      articleCoverBgImage.style.backgroundImage = `url(${e.target.result})`;
      dragElement(articleCoverBgImage);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

document.querySelector("#article-cover-bg").addEventListener('change',function() {
  readURL(this);
});