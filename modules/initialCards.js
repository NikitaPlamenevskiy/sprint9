api.getInitialCards()
  .then((cards) => {
    const cardList = new CardList(placesList, cards)
    cardList.render(cards)
})