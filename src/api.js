// send methods
const apiUrl = 'https://warsawjs-21-api.herokuapp.com'

const transformJsonResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return response.json();
}

const login = ({username, password}) => {
	return window.fetch(apiUrl + '/auth', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	})
	.then(transformJsonResponse)
}

const readPostList = () => {
	return window.fetch(apiUrl + '/posts')
		.then(function(response) {
      return response.json()
    })
}

const createPost = ({ username, title, image }) => {
	const data = new FormData()
	data.append('username', username)
	data.append('title', title)
	data.append('image', image)

	return window.fetch(apiUrl + '/posts', {
		method: 'POST',
		body: data
	})
	.then(transformJsonResponse)
}

const readPost = (postId) => {
	return window.fetch(apiUrl + '/posts/' + postId)
		.then(function(response) {
      return response.json()
    })
}
//post id"5b2f603f0d50ef001464c361"

//{ postId: string, username: String, body: String, position: { x: Number, y: Number } }
const createComment = ({ postId, username, body, position: {x, y} }) => {
	return window.fetch(apiUrl + '/posts/' + postId + '/comments', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({ postId, username, body, position: {x, y} })
	})
	.then(function(response) {
    return response.json()
  })
}

export { login, readPostList, createPost, readPost, createComment }