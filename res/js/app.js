const app = {

    urlPosts : "https://jsonplaceholder.typicode.com/posts",
    urlComments : "https://jsonplaceholder.typicode.com/comments",

    cargarPosts : function(){
        const cont = document.querySelector("#content");
        cont.style.width = "100%"; 
        cont.classList.add(['mx-auto'],['mt-5']);
        let html ="";   

        fetch(this.urlPosts)
            .then(response => response.json())
            .then(posts => {
                for( let post of posts){
                    html += `
                    <div class="card mb-2">
                        
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                            
                        </div>
                        <div class="card-footer text-muted">
                            <button class="btn btn-link" type="button" onclick="app.cargarComent(${post.id})">
                            Ver comentarios
                            </button>
                            <div class="card d-md-none" id="cardCom${post.id}" >
                                <ul class="list-group list-group-flush" id="comments${post.id}">

                                </ul>
                            </div> 
                        </div>
                    </div>
                    
                    
                    `;
                }
                cont.innerHTML = html;
            }).catch( error => console.error(error));
    },

    cargarComent: function(postId){
        let html = "";
        const listaCom = $("#comments"+postId);
        fetch(this.urlComments + "?postId=" + postId)
            .then(response => response.json())
            .then(comentarios => {
                for(let c of comentarios){
                    html += `<li class="list-group-item"> De: <b>${c.email}</b><br>${c.body} </li>`;
                }
                listaCom.html(html);
                $("#cardCom"+postId).toggleClass("d-md-none",false);
            }).catch(error => console.log(error));
    }

}

window.onload = function(){
    app.cargarPosts();
}