'use strict';

window.addEventListener('load', function () {

    const post = fetch("http://localhost:9889/addPost");
    console.log(post);

    const savePostButton = document.getElementById("btnSubmit");

    savePostButton.addEventListener("click", function() {
        const postForm = document.getElementById("postForm");
        let data = new FormData(postForm);

        fetch("http://localhost:9889/addPost", {
            method: 'POST',
            body: data
        }).then(r => r.json()).then(data => {window.location.href = "http://localhost:9889/demo"});
    });
});