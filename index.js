const placesList = document.querySelector('.places-list');
const popUpButton = document.querySelector('.button');
const editButton = document.querySelector('.edit-button');
const popUp = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup-profile');
const popupImage = document.querySelector('.popup-image');
const popUpClose = document.querySelector('.popup__close');
const popUpCloseProfile = document.querySelector('.popup-profile__close');
const popUpCloseImg = document.querySelector('.popup-image__close');
const popupImageContent = document.querySelector('.popup-image__content');
const cardForm = document.forms.newCard;
const cardLink = cardForm.elements.link;
const cardName = cardForm.elements.name;
const profileForm = document.forms.newProfile;
const about = profileForm.elements.about;
const cardList = new CardList(placesList);
const profileName = profileForm.elements.profilename;
const popup = new Popup(popUp);
const popupProf = new Popup(popupProfile);
const popupImg = new Popup(popupImage);
const cardImg = document.querySelectorAll('.place-card__image');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');


profileForm.addEventListener('submit', addUserInfo);
profileForm.addEventListener('input', checkValidity);

cardForm.addEventListener('submit', function (event) {
  event.preventDefault();

  cardList.addCard(cardForm.elements.link.value, cardForm.elements.name.value);

  cardForm.reset();
  popup.close();
});

editButton.addEventListener('click', function () {
  popupProf.open();
});

popUpCloseProfile.addEventListener('click', function () {
  popupProf.close();
});

popUpButton.addEventListener('click', function () {
  popup.open();
});

popUpClose.addEventListener('click', function () {
  popup.close();
});

popUpCloseImg.addEventListener('click', function () {
  popupImg.close();
});

cardImg.forEach(function (cardImg) {
  cardImg.addEventListener('click', (event) =>
    popupImg.open(popupImageContent.src = cardImg.style.backgroundImage.slice(5, -2)))
});


/**
 * Здравствуйте. Хорошо проработаны классы и взаимодействие между классами.
 *
 * Надо исправить: При отключении сети, когда страница загрузилась, можно изменить профиль пользователя

 !!! Эммм, у меня не получается без сети изменить, пишет:
 "Подвердите действие на странице 127.0.0.1:53381"
 "TypeError: Failed to fetch"
 *
 * Надо исправить: При добавлении карточки возникает ошибка, которую можно видеть в консоли
 *index.js:31 Uncaught ReferenceError: cardList is not defined
    at HTMLFormElement.<anonymous> (index.js:31)
 *
 * Упс, нечаянно удалил XD
 *
 */

/**
 * Здравствуйте, записал видео для вас
 * https://www.youtube.com/watch?v=aqIkJzOpJb0
 * менять DOM можно только после того как придут данные с сервера
 *    
 !!!Я не знаю как это пофиксить, примите работу, у меня завтра сессия начинается, а я потом со своим наставником сделаю это с доп.заданиями как сессия закончится :(
 */