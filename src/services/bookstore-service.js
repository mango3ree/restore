export default class BookstoreService {
  data = [
    { id: 1, title: 'Production', author: 'Susan Folwer3' },
    { id: 2, title: 'Deploy', author: 'Dan Woll2' },
    { id: 3, title: 'Start', author: 'Chuan Li1' }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 1000)
    })
  }
}
