import { returnComments } from "./functions";

const commentForm = id => {
  const form = document.createElement('form'),
        usernameLabel = document.createElement('label'),
        usernameInput = document.createElement('input'),
        contentLabel = document.createElement('label'),
        contentInput = document.createElement('input'),
        button = document.createElement('button');

  usernameLabel.innerText = 'Username: ';
  usernameInput.type = 'text';
  usernameInput.name = 'username';
  usernameInput.placeholder = 'johndoe123';
  usernameInput.required = true;
  contentLabel.innerText = 'Comment: ';
  contentInput.type = 'text';
  contentInput.name = 'content';
  contentInput.placeholder = 'Wow! Great article!';
  contentInput.required = true;
  button.innerText = 'Post';

  usernameLabel.appendChild(usernameInput);
  contentLabel.appendChild(contentInput);
  form.append(usernameLabel, contentLabel, button);

  button.addEventListener('click', event => {
    event.preventDefault();

    if (usernameInput.value.length && contentInput.value.length) {
      (async () => {
        let comments = [];
        const commentData = {
          username: usernameInput.value,
          content: contentInput.value,
          timeCreated: Date()
        }

        await fetch('http://localhost:3000/api/posts/' + id + '/comments/new',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
          }
        )
        .catch(err => console.log(err));

        usernameInput.value = '';
        contentInput.value = '';

        const data = await fetch('http://localhost:3000/api/posts/' + id + '/comments')
          .then(res => res.json())
          .catch(err => console.log(err));

        data.forEach(obj => comments.unshift(obj));
        
        Array.from(document.body.childNodes)[3].remove();
        document.body.appendChild(returnComments(comments));
      })();
    }
  });

  return form;
}

export default commentForm;