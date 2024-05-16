let dataLikes = [531412, 255314, 999123]; 
let dataTexts = ["TUTUTUTU MAX VERSTAPPEN", "Smoooth operatoooor", "I am stupid, I am stupid"] 
let dataImgs = ["max.jpg", "sainz.jpg", "leclerc.jpg"] 
 
let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 
 
for(let i = 0; i < 100; i++){ 
    let newPost = originalPost.cloneNode(true); 
 
    let img = newPost.getElementsByClassName("img")[0]; 
    img.setAttribute("src", dataImgs[i%3]); 
 
    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0] 
    numberOfLikes.innerHTML = dataLikes[i%3]; 
 
    let postText = newPost.getElementsByClassName("postText")[0] 
    postText.innerHTML = dataTexts[i%3]; 
 
    let likeBtn = newPost.getElementsByClassName("likeBtn")[0] 
    likeBtn.setAttribute("onclick", "likes(" + i + ")") 
 
    korobkaPostov.appendChild(newPost); 
} 
 
 
function like(){ 
     
}