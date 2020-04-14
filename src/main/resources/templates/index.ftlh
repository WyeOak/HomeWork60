<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Microgram </title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body class="no-scroll">
<div class="container">
    <div class="row justify-content-center">
        <div class="col col-lg-7 posts-container" id="posts">
            <button onclick="showSplashScreen()"> Show splash screen</button>
            <!-- single post start -->
            <div class="card my-3">
                <!-- image block start -->
                <div>
                    <img class="d-block w-100 first_image" src="http://placekitten.com/500/500" alt="Post image">
                </div>
                <!-- image block end -->
                <div class="px-4 py-3">

                    <!-- post reactions block start -->
                    <div class="d-flex justify-content-around">
                        <span class="h1 mx-2 muted" id="like">
                            <i class="far fa-heart"></i>
                        </span>
                        <span class="h1 mx-2 muted">
                            <i class="far fa-comment"></i>
                        </span>
                        <span class="mx-auto"></span>               <!-- space between icons -->
                        <span class="h1 mx-2 muted" id="save">
                            <i class="far fa-bookmark"></i>
                        </span>
                    </div>
                    <!-- post reactions block end -->
                    <hr>
                    <!-- post section start -->
                    <div id="first_post">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
                    </div>
                    <!-- post section end -->
                    <hr>
                    <!-- comments section start -->
                    <div id="comments">

                        <div class="py-2 pl-3">
                            <a href="#" class="muted">someusername</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis!
                                Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
                        </div>

                        <div class="py-2 pl-3">
                            <a href="#" class="muted">someusername</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
                        </div>

                    </div>

                    <button onclick="addComment()"> Add comment </button>
                    <!-- comments section end -->
                </div>
            </div>
            <!-- single post end -->
            <button onclick="addPost()"> Add post </button>
        </div>
    </div>
</div>

<!-- Splash screen -->
    <section id="page-splash" class="page-splash">
        <div class="card" id="registration-form">
            <div class="card-body">
                <h3 class="h3">Зарегистрируйтесь</h3>
                <button onclick="hideSplashScreen()" id="login_button"> Войти </button>
            </div>
        </div>
    </section>
</body>
</html>
<script src="/js/script.js"></script>