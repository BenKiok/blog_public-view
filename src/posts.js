const posts = await (async () => {
  let postContainer = document.createElement('div');
  
  const posts = await fetch('http://localhost:3000/api/posts')
    .then(res => res.json())
    .catch(err => console.log(err));

  posts.forEach(post => {
    let container = document.createElement('div'),
        postTitle = document.createElement('h1'),
        postContent = document.createElement('p'),
        postTime = document.createElement('p');
    
    container.classList.add('post');

    postTitle.innerText = post.title;
    postContent.innerText = post.content;
    postTime.innerText = post.time.created;

    container.append(postTitle, postContent, postTime);
    postContainer.appendChild(container);
  });

  postContainer.classList.add('container');
  return postContainer;
})();

export default posts;