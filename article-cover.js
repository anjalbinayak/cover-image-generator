

let articleCover = document.querySelector('#article-cover');

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      articleCover.style.backgroundImage = `url(${e.target.result})`;
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

document.querySelector("#article-cover-bg").addEventListener('change',function() {
  readURL(this);
});