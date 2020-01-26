function addUserInfo(event) {
  event.preventDefault();
  api.sendUserInfo(profileName, about)
    .then((res) => {
      userName.textContent = profileName.value;
      userJob.textContent = about.value;
      popupProf.close();
    })
    .catch((err) => {
      console.log(err);
    })
}