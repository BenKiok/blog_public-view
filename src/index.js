const app = (() => {
  const welcome = document.createElement('h1');
  welcome.innerText = 'Welcome to my blog!';

  document.body.appendChild(welcome);
})();