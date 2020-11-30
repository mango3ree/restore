export default class BookstoreService {
	data = [
		{ id: 1, title: 'Production', author: 'Susan Folwer3', price: 40 },
		{ id: 2, title: 'Deploy', author: 'Dan Woll2', price: 50 },
		{ id: 3, title: 'Start', author: 'Chuan Li1', price: 10 }
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// resolve(this.data)
				resolve(this.data);
			}, 1000);
		});
	}
}
