<?php

function head(){
    


?>
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link href="/Ejercicio2/res/css/bootstrap.min.css" rel="stylesheet" >   
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">  
      </head>
      <body>
        <div id="app" class="container-fluid">
            <header class="row bg-light text-dark m-0">
                <div class="col-md">
                    <h1 class="titulo">Blog Excepcional</h1>
                </div>
                <!-- <div class="col-md text-right">
                    <img src="/res/images/" class="mt-1" style="height:40px" alt="">
                </div> -->
            </header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light " style="box-shadow: 0 10px 25px #DDD">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">BlogX</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio <i class="bi bi-house-door"></i></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#">Ultimas publicaciones <i class="bi bi-stopwatch"></i></a>
                      </li>
                      
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Publicar <i class="bi bi-pen"></i></a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Buscar en publicaciones" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit"> <i class="bi bi-search"></i></button>
                    </form>
                  </div>
                </div>
            </nav>
<?php
}


function footer(){

    
?>
        <script src="/Ejercicio2/res/js/bootstrap.bundle.min.js"></script>
        <script src="/Ejercicio2/res/js/jquery.min.js"></script>
        </div>
      </body>
    </html>
<?php
}

?>
