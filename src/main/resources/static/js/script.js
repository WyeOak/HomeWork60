'use strict';

let post = {
    id: '1',
    description: 'post description1',
    picture: 'https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg'
};

let comment = {
    id: 'comment1',
    text: 'some text',
    postId: 'post1',
    userId: 'user1'
};

let user = {                                //creating object of user
    id: 'user1',
    name: 'username1',
    isAuthorized: true
};

function showSplashScreen() {
    let x = document.getElementById("page-splash");
    x.style.visibility = "visible";
    document.body.classList.add("no-scroll");
}

function hideSplashScreen() {
    let x = document.getElementById("page-splash");
    x.style.visibility = "hidden";
    document.body.classList.remove("no-scroll");
}

function createCommentElement(comment){
    let content = '<a href="#" class="muted">' + user.name + '</a>' + '<p>'+ comment.text + '</p>';
    let element = document.createElement('div');
    element.innerHTML = content;
    element.className = "py-2 pl-3";
    return element;
}

function createPostElement(post) {
    let post_content = `
          <!-- image block start -->
          <div>
            <img class="d-block w-100" src="${post.picture}" alt="Post image">
          </div>
          <!-- image block end -->
          <div class="px-4 py-3">
            <!-- post reactions block start -->
            <div class="d-flex justify-content-around">
              <span class="h1 mx-2 muted">
                <i class="far fa-heart"></i>
              </span>
              <span class="h1 mx-2 muted">
                <i class="far fa-comment"></i>
              </span>
              <span class="mx-auto"></span>
              <span class="h1 mx-2 muted">
                <i class="far fa-bookmark"></i>
              </span>
            </div>
            <!-- post reactions block end -->
            <hr>
            <!-- post section start -->
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima
                 illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima
                 illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
            </div>
            <!-- post section end -->
            <hr>
            <!-- comments section start -->
            <div>
              <div class="py-2 pl-3">
                <a href="#" class="muted">someusername</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim
                voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
              </div>
              <div class="py-2 pl-3">
                <a href="#" class="muted">someusername</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim
                voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
              </div>
            </div>
            <!-- comments section end -->
          </div>`;

    let post_element = document.createElement(`div`);
    post_element.innerHTML += post_content;
    post_element.classList.add("card", "my-3");
    return post_element;
}

function addComment(){
    document.getElementById("comments").insertAdjacentElement("afterend", createCommentElement(comment));
}

function addPost() {
    document.getElementById("posts").append(createPostElement(post));
}

let like = document.getElementById('like');
like.addEventListener('click', function(){
    let heart = like.children[0];
    if(heart.classList.contains("text-danger")){
        heart.classList.remove("text-danger","fas");
    }else{
        heart.classList.add("text-danger","fas");
    }
});

let save = document.getElementById('save');
save.addEventListener('click', function(){
    let icon = save.children[0];
    if(icon.classList.contains("fas")){
        icon.classList.remove("fas");
    }else{
        icon.classList.add("fas");
    }
});

let firstPostImage = document.getElementsByClassName("first_image")[0];
console.log(firstPostImage);
firstPostImage.addEventListener('dblclick',function(){
    let heartByImage = like.children[0];
    if(heartByImage.classList.contains("text-danger")){
        heartByImage.classList.remove("text-danger","fas");
    }else{
        heartByImage.classList.add("text-danger","fas");
    }
});

// const url = 'http://localhost:9889/demo';

// document.addEventListener('DOMContentLoaded', init);
//
// function init(){
//     document.getElementById('btnSubmit').addEventListener('click', upload);
// }
//
// function upload(ev){
//     ev.preventDefault();    //stop the form submitting
//
//     //create any headers we want
//     let h = new Headers();
//     h.append('Accept', 'application/json'); //what we expect back
//     //bundle the files and data we want to send to the server
//     let fd = new FormData();
//     fd.append('user-id', document.getElementById('user_id').value);
//
//     let myFile = document.getElementById('avatar_img').files[0];
//     fd.append('avatar', myFile, "avatar.png");
//     // $_FILES['avatar']['file_name']  "avatar.png"
//
//     let req = new Request(url, {
//         method: 'POST',
//         headers: h,
//         mode: 'no-cors',
//         body: fd
//     });
//
//     let post_data = {
//         id: '2',
//         picture: URL.createObjectURL(myFile)
//     };
//
//     let new_post = createPostElement(post_data);
//     document.getElementById("posts").append(createPostElement(new_post));
//
//     fetch(req)
//         .then( (response)=>{
//             document.getElementById('output').textContent = "Response received from server";
//         })
//         .catch( (err) =>{
//             console.log('ERROR:', err.message);
//         });
// }

