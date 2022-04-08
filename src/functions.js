const returnPost = post => {
	let container = document.createElement('div'),
			header = document.createElement('div'),
			title = document.createElement('h1'),
			content = document.createElement('p'),
			time = document.createElement('p');
	
	container.classList.add('post');
	header.classList.add('post-head');

	title.innerText = post.title;
	content.innerText = post.content;
	time.innerText = post.time.created.substring(4, 16);
	
	header.append(title, time);
	container.append(header, content);
	return container;
}

const returnComments = arr => {
	let container = document.createElement('div');
	container.classList.add('comments');

	arr.forEach(obj => {
		let commentDiv = document.createElement('div'),
				commentBase = document.createElement('div'),
				content = document.createElement('p'),
				user = document.createElement('p'),
				time = document.createElement('p');
		
		commentDiv.classList.add('comment');
		commentBase.classList.add('comment-base');
		content.classList.add('content');
		user.classList.add('username');
		time.classList.add('time');
		
		content.innerText = obj.content;
		user.innerText = obj.username;
		time.innerText = obj.timeCreated.substring(4, 16) + ' at ' + obj.timeCreated.substring(16, 21);

		commentBase.append(user, time);
		commentDiv.append(content, commentBase);
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