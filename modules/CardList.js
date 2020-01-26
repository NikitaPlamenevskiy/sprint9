class CardList {
  constructor(container, cards) {
    // container не используется в коде
    this.container = placesList;
    this.cards = cards;
  }
  //Добавление карточки 
  addCard(link, name) {
    // cardElement не используется в коде
    const { cardElement } = new Card(link, name);

  }
  //Рендер первоначальных карточек
  render() {
    // newArray не используется в коде
    const newArray = this.cards.map(function (item) {
      const { link, name } = item;
      return new Card(link, name);
    });
  }
}


