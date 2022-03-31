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

const returnComments = arr => {
	let container = document.createElement('div');
	container.classList.add('container');

	arr.forEach(obj => {
		let commentDiv = document.createElement('div'),
				content = document.createElement('p'),
				user = document.createElement('p'),
				time = document.createElement('p');
		
		commentDiv.classList.add('comment');
		content.classList.add('content');
		user.classList.add('username');
		time.classList.add('time');
		
		content.innerText = obj.content;
		user.innerText = obj.username;
		time.innerText = obj.timeCreated;

		commentDiv.append(content, user, time);
		container.appendChild(commentDiv);
	});

	return container;
}

const clearBody = () => {
	let bodyNodes = document.body.childNodes;

	Array.from(bodyNodes).forEach(node => node.remove());
	return (Array.from(bodyNodes).length ? false : true);
}

export { returnPost, returnComments, clearBody };