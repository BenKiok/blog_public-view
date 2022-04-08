import posts from './posts';
import header from './header';

const app = (() => {
  document.body.append(header, posts);
})();