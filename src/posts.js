import { returnPost } from "./functions";
import postAndComments from "./postAndComments";

const posts = await (async () => {
  let postContainer = document.createElement('div'),
      posts = [];
  
  const data = await fetch('http://localhost:3000/api/posts')
    .then(res => res.json())
    .catch(err => console.log(err));

  data.forEach(element => posts.unshift(element));

  posts.forEach(post => {
    let postElement = returnPost(post);
    postElement.addEventListener('click', () => postAndComments(post._id));
    postContainer.appendChild(postElement);
  });

  postContainer.classList.add('container');
  return postContainer;
})();

export default posts;