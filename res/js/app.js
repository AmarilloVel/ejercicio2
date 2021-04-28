const app = {

    urlPosts : "https://jsonplaceholder.typicode.com/posts",
    urlComments : "https://jsonplaceholder.typicode.com/comments",
    urlUsers : "https://jsonplaceholder.typicode.com/users",
    userId : "",
    palabraClave : "",

    cargarPosts : function(){
        const cont = document.querySelector("#content");
        cont.style.width = "100%"; 
        cont.classList.add(['mx-auto'],['mt-5']);
        let html ="";   
        this.urlPosts = "https://jsonplaceholder.typicode.com/posts"
        if(this.userId !== ""){
            this.urlPosts += "?userId=" + this.userId;
        }

        fetch(this.urlPosts)
            .then(response => response.json())
            .then(posts => {
                for( let post of posts){
                    if(post.body.indexOf(this.palabraClave) !== -1){
                        console.log(this.palabraClave);
                    html += `
                    <div class="card mb-2">
                        
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                            
                        </div>
                        <div class="card-footer text-muted">
                            <button class="btn btn-link" type="button" 
                                id="btn-ver-com${post.id}" 
                                onclick="app.cargarComent(${post.id})">

                                Ver comentarios <i class="bi bi-caret-down"></i>
                            </button><div class="spinner-border text-primary d-md-none float-end" id="cargando${post.id}" role="status">
                            <span class="visually-hidden">Cargando...</span>
                          </div>
                            <button class="btn btn-link d-md-none" type="button" 
                                id="btn-cerrar-com${post.id}" 
                                onclick="app.cerrarComent(${post.id})">

                                Cerrar comentarios <i class="bi bi-caret-down-fill"></i>
                            </button>
                            <div class="card d-md-none" id="cardCom${post.id}" >
                                <ul class="list-group list-group-flush" id="comments${post.id}">

                                </ul>
                            </div> 
                        </div>
                    </div>
                    
                    
                    `;
                    }
                }
                cont.innerHTML = html;
            }).catch( error => console.error(error));
    },

    cargarComent: function(postId){
        let html = "";
        const listaCom = $("#comments"+postId);
        $("#cargando"+postId).toggleClass("d-md-none",false);

        fetch(this.urlComments + "?postId=" + postId)
            .then(response => response.json())
            .then(comentarios => {
                for(let c of comentarios){
                    html += `<li class="list-group-item"> De: <b>${c.email}</b><br>${c.body} </li>`;
                }
                listaCom.html(html);
                $("#cardCom"+postId).toggleClass("d-md-none",false);
                $("#btn-ver-com"+postId).toggleClass("d-md-none",true);
                $("#btn-cerrar-com"+postId).toggleClass("d-md-none",false);
                
            }).catch(error => console.log(error))
            .finally( () => {
                $("#cargando"+postId).toggleClass("d-md-none",true);
                
            });
    },

    cerrarComent: function(postId){
        const listaCom = $("#comments"+postId);
        listaCom.html("");
        $("#cardCom"+postId).toggleClass("d-md-none",true);
        $("#btn-ver-com"+postId).toggleClass("d-md-none",false);
        $("#btn-cerrar-com"+postId).toggleClass("d-md-none",true);
    },

    cargarUsuarios: function(){
        const users = $("#usuarios");
        let html = "";
        users.html(html);
        fetch(this.urlUsers )
            .then(response => response.json())
            .then(usuarios => {
                for(let usuario of usuarios){
                    html+=`
                    <button type="button" class="list-group-item list-group-item-action "
                    id="up${usuario.id}" 
                    onclick="app.userPosts(${usuario.id})">
                        ${usuario.name}<br><small>${usuario.email}</small>
                    </button>`;   
                }
                users.html(html);
                
            }).catch(error => console.log(error));
            
    },

    userPosts: function(uid){
        $("#up"+this.userId).removeClass("active");
        this.userId = uid;
        $("#up"+uid).addClass("active");
        this.cargarPosts();
    },

    buscarPalabra: function(){
        $("#up"+this.userId).removeClass("active");
        this.userId = "";
        this.palabraClave = $("#buscar-palabra").val();
        console.log(this.palabraClave);
        this.cargarPosts();

    }


}

window.onload = function(){
    app.cargarPosts();
    app.cargarUsuarios();

}