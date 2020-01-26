function checkInputPopup() {
  const profileName = profileForm.elements.profilename;
  const about = profileForm.elements.about;
  const name = cardForm.elements.name;
  const link = cardForm.elements.link;
  const popupBtn = document.querySelector('.popup__button');
  const profileBtn = document.querySelector('.popup-profile__button');

  if (profileName.value === '' || profileName.value.length < 2 || about.value === '' || about.value.length < 2) {
    profileBtn.setAttribute('disabled', 'disabled');
    profileBtn.classList.remove('button_enabled');
  } else {
    profileBtn.removeAttribute('disabled');
    profileBtn.classList.add('button_enabled');
  }

  if (name.value === '' || link.value === '') {
    popupBtn.setAttribute('disabled', 'disabled');
    popupBtn.classList.remove('button_enabled-card');
  } else {
    popupBtn.removeAttribute('disabled');
    popupBtn.classList.add('button_enabled-card');
  }
}