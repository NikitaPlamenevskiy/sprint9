function takeUserInfo(){
  api.getUserInfo()
    .then((res) =>{
      userName.textContent = res.name; 
      userJob.textContent = res.about;     
    })
}

takeUserInfo();

