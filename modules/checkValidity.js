function checkValidity(event) {
  const profilename = profileForm.elements.profilename;
  const about = profileForm.elements.about;
  const errorName = document.querySelector('.popup__error_name');
  const errorAbout = document.querySelector('.popup__error_about');
  // Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов' 
  // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
  // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
  // Далее words передаётся в функцию и используется.
  if (profilename.value.length === 0) {
    errorName.textContent = 'Это обязательное поле';
  } else if (profilename.value.length < 2) {
    errorName.textContent = 'Должно быть от 2 до 30 символов';
  } else {
    errorName.textContent = null;
  }

  if (about.value.length === 0) {
    errorAbout.textContent = 'Это обязательное поле';
  } else if (about.value.length < 2) {
    errorAbout.textContent = 'Должно быть от 2 до 30 символов';
  } else {
    errorAbout.textContent = null;
  }

}