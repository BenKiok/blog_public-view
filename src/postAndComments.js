import { returnPost, returnComments, clearBody } from "./functions";

const postAndComments = async id => {
  clearBody();

  const post = await fetch('http://localhost:3000/api/posts/' + id)
      .then(res => res.json())
      .catch(err => console.log(err));
  const comments = await fetch('http://localhost:3000/api/posts/' + id + '/comments')
      .then(res => res.json())
      .catch(err => console.log(err));
  
  const postElement = returnPost(post),
        commentElements = returnComments(comments);
        
  document.body.append(postElement, commentElements);
}

export default postAndComments;