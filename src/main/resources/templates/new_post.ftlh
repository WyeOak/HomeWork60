<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX with Fetch</title>
</head>
<body>
    <h1>Adding new post </h1>

    <form id="postForm" enctype="multipart/form-data" action="/addPost" method="post">
        <div>
            <input type="hidden" id="user_id" name="user_id" value="75" />
            <label for="description"></label>
            <input type="text" placeholder="description" name="description" id="description">
            <input type="file" id="image" name="image"/>
            <button type="button" id="btnSubmit"> Upload picture </button>
        </div>
    </form>

</body>
</html>
<script src="/js/script2.js" ></script>
