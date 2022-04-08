import { returnPost, returnComments, clearBody } from "./functions";
import commentForm from "./commentForm";

const postAndComments = async id => {
  clearBody();
  let comments = [];
  const post = await fetch('http://localhost:3000/api/posts/' + id)
    .then(res => res.json())
    .catch(err => console.log(err));
  const data = await fetch('http://localhost:3000/api/posts/' + id + '/comments')
    .then(res => res.json())
    .catch(err => console.log(err));
  
  data.forEach(obj => comments.unshift(obj));

  const postElement = returnPost(post),
        commentElements = returnComments(comments);
  let returnButton = document.createElement('button');

  returnButton.innerText = 'Go back';
  returnButton.addEventListener('click', () => {
    location.reload();
  });

  document.body.append(postElement, returnButton, commentForm(id), commentElements);
}

export default postAndComments;