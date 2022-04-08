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
        commentElements = returnComments(comments),
        commentTitle = document.createElement('h2');
  let returnButton = document.createElement('button');

  postElement.id = 'post';
  commentTitle.innerText = 'Comments';
  returnButton.innerText = 'Back to articles';
  returnButton.addEventListener('click', () => {
    location.reload();
  });

  commentElements.insertBefore(commentForm(id), commentElements.firstChild);
  commentElements.insertBefore(commentTitle, commentElements.firstChild);
  commentElements.appendChild(returnButton);
  document.body.append(postElement, commentElements);
}

export default postAndComments;