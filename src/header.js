const header = (() => {
  const h1 = document.createElement('h1'),
        container = document.createElement('header');
  
  h1.innerText = 'BlogTime';
  container.classList.add('header');
  container.appendChild(h1);

  return container;
})();

export default header;