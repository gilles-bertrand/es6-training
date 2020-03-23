const posts = [
    { id:1, title :'Titre 1', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem ipsa aliquid ullam unde facilis consequuntur. Debitis et labore, tempora esse libero pariatur quos enim totam possimus corrupti velit! Omnis.'},
    { id:2, title :'Titre 2', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut suscipit sunt. Ullam tempore omnis quo dicta dolores et aliquid cum quasi nemo, harum pariatur, dignissimos earum ducimus! Fugiat, animi.'},
    { id:3, title :'Titre 3', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, consequuntur officia provident pariatur dolores rem dignissimos beatae nesciunt consectetur voluptatum id ab iusto? Odit tenetur repellendus reprehenderit iste mollitia rerum?'},
    { id:4, title :'Titre 4', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis cupiditate sapiente quae similique aspernatur! Cum, fugit voluptates aut, quae dolorem dolore laboriosam iure deserunt rem nulla odit. Alias, dicta.'},
    { id:5, title :'Titre 5', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum est doloribus consequuntur odio nam at perferendis rerum, quas delectus culpa molestiae id quo, voluptas recusandae reprehenderit, facilis nulla beatae.'},
];

let ul = document.getElementById('posts_list');
let content = document.getElementById('posts_content');

posts.map(function(post){
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerText = post.title;
    a.href = '#post_'+post.id;
    li.appendChild(a);
    ul.appendChild(li);
    
    a.addEventListener('click', function(){
        showDetails(post.id); // j'appelle une fonction en lui passant l'id de l'élément cliqué
    });
});

function showDetails(id) {
    content.innerHTML = "";

    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    let detail = posts.find(function(post){
        return post.id == id;
    });

    h2.innerText = detail.title;
    p.innerText = detail.content;
    content.appendChild(h2);
    content.appendChild(p);
}