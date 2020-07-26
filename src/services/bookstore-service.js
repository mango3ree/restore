export default class BookstoreService {
  data = [
    { id: 1, title: 'Production', author: 'Susan Folwer' },
    { id: 2, title: 'Deploy', author: 'Dan Woll' },
    { id: 3, title: 'Start', author: 'Chuan Li' }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 900);
    })
  }
}
