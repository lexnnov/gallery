export const getUsers = async (url) => {
	try {
		const response = await fetch(url)
		const users = await response.json()

		return users

	} catch (error) {
	}
}

export const getAlbums = async (url) => {
	try {
		const response = await fetch(url)
		const albums = await response.json()

		return albums

	} catch (error) {
	}
}

export const getPhotos = async (url) => {
	try {
		const response = await fetch(url)
		const photos = await response.json()

		return photos

	} catch (error) {
	}

}