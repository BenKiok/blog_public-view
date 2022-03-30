const returnPost = post => {
	let container = document.createElement('div'),
			postTitle = document.createElement('h1'),
			postContent = document.createElement('p'),
			postTime = document.createElement('p');
	
	container.classList.add('post');

	postTitle.innerText = post.title;
	postContent.innerText = post.content;
	postTime.innerText = post.time.created;

	container.append(postTitle, postContent, postTime);
	return container;
}

export { returnPost };