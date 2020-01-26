class Card {
  constructor(link, name) {
    this.cardElement = this.create(link, name);
    this.cardElement
      .querySelector('.place-card__like-icon')
      .addEventListener('click', this.like);
    this.cardElement
      .querySelector('.place-card__delete-icon')
      .addEventListener('click', this.remove);

  }

  create(link, name) {
    const placeCard = document.createElement('div');
    placeCard.classList.add('place-card');

    const placeImage = document.createElement('div');
    placeImage.classList.add('place-card__image');
    placeImage.style.cursor = 'pointer';
    placeImage.style.backgroundImage = `url("${link}")`;

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('place-card__delete-icon');

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');

    const cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');
    cardName.textContent = `${name}`;

    const buttonLike = document.createElement('button');
    buttonLike.classList.add('place-card__like-icon');

    placeImage.appendChild(buttonDelete);
    placeCard.appendChild(placeImage);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(buttonLike);
    placeCard.appendChild(cardDescription);
    placesList.appendChild(placeCard);
    
    return placeCard;
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove(event) {
    placesList.removeChild(event.target.closest('.place-card'));
    event.stopPropagation();
  }
}





