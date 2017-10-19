class CheckUp {

   constructor(){
     //Declaration of instance
     this.formLogin     = document.getElementById('formLogin');
     this.formRegister  = document.getElementById('formRegister');
     this.btnTask       = document.getElementById('btnTask');
     this.error         = "";
     this.checkUp       = "";
     this.checkUpLoop   = 0;
     this.home          = "./index.php";
     this.task          = "./task.php";
   }

   checkConnect(storageConnect = false){
     if (storageConnect) {
        let tmp = JSON.parse(storageConnect)
         if (tmp.email == null || tmp.email == 'undefined'){
           location.href = this.home;
         }else{
           let ConnexionPersonStorage = JSON.parse(storageConnect);
           let userConnect  = document.getElementById('userConnect');
           //console.log(userConnect);
           userConnect.innerHTML = ConnexionPersonStorage.email;
           userConnect.insertAdjacentHTML('afterend','<button id="logout">Logout</button>')
         }
     }else{
       return false;
     }
   }

   checkLogout(){
     let logout  = document.getElementById('logout');
     logout.addEventListener("click", function(){
       alert("Logout bay !");
       localStorage.removeItem("personLogin");
       location.href = this.home;
     }.bind(this));
   }

   checkLogin(storageObject = false, storageLogin = false) {
     formLogin.addEventListener("submit", function (event) {
         event.preventDefault();
         var email = document.getElementById("emailLogin").value;
         var password = document.getElementById("passwordLogin").value;

         if (email.lenght !== 0 && password.lenght !== 0) {
           //encrypt password for compare
           let passwordSecure = window.btoa(unescape(encodeURIComponent( password )));
           let login = { "email":email, "password":passwordSecure };

           var LoginPersonStorage = "";
           for(let value of storageObject) {
               //console.log(value)
               LoginPersonStorage = JSON.parse(value);
               //console.log(LoginPersonStorage)
               //console.log(login.email, login.password);
              console.log(LoginPersonStorage.email, LoginPersonStorage.password);
               if (LoginPersonStorage.email == login.email && LoginPersonStorage.password == login.password) {
                 this.checkUp = '1';
                 break;
               }else{
                 this.checkUp = '0';
               }
           }

           if (this.checkUp == 1) {
             //alert('valide', this.checkUp);
             let loginPush = {email: login.email, time: Date.now() }
             let loginJSON = JSON.stringify(loginPush);
             //storageLogin.push(loginJSON);
             localStorage.setItem('personLogin', JSON.stringify(loginJSON));
             console.log(this, this.task);
             location.href = this.task;
           }else{
             alert('Email or Password is not valid !');
           }

         }else{
           alert("email and password did not empty !")
         }
     }.bind(this), false);
   }

   checkRegister(storageObject) {
     formRegister.addEventListener("submit", function (event) {
         event.preventDefault();
         let email = document.getElementById("emailRegister").value;
         let username = document.getElementById("usernameRegister").value;
         let password = document.getElementById("passwordRegister").value;

         if (email.lenght !== 0 && password.lenght !== 0) {
           //encrypt password
           let passwordSecure = window.btoa(unescape(encodeURIComponent( password )));
           let user = { "email":email, "username": username ,"password":passwordSecure };

           var person = "";
           for(let value of storageObject) {
               person = JSON.parse(value);
               if (person.email == user.email) {
                 this.checkUp = '1';
                 break;
               }else{
                 this.checkUp = '0';
               }
           }

           if (this.checkUp == 1) {
             alert('Email non valide');
           }else{
             let userJSON = JSON.stringify(user);
             storageObject.push(userJSON);
             localStorage.setItem('personRegister', JSON.stringify(storageObject));
             alert('Successfull register '+ user.email);
           }
         }else{
           alert("email and password  did not empty !")
         }
     }, false);

   }



   addTask(storageObject = false, taskObject = false) {
     btnTask.addEventListener("click", function (event) {
         event.preventDefault();
         let nameTask      = document.getElementById('task').value;
         let colorTask     = document.getElementById('color').value;
         let personTask = JSON.parse(storageObject);
         let uniqid = new Date().getTime() + Math.floor((Math.random()*10000) + 1);

         var d = new Date();
         var dd = d.getDate();
         var mm = d.getMonth();
         var yyyy = d.getFullYear();
         var hh = d.getHours();
         var min = d.getMinutes();
         var sec = d.getSeconds();

         if(dd < 10 ){ dd = '0'+dd; }
         if(mm < 10 ){ mm = '0'+mm; }
         if(hh < 10 ){ hh = '0'+hh; }
         if(min < 10 ){ min = '0'+min; }
         if(sec < 10 ){ sec = '0'+sec; }

         var dater = dd+'/'+mm+'/'+yyyy+' - '+hh+':'+min+':'+sec;
         let todo = { "id":uniqid, "name": nameTask ,"user": personTask.email, "color":colorTask, "private": 1, "created": dater };
         let taskJSON = JSON.stringify(todo);
         taskObject.push(taskJSON);
         localStorage.setItem('taskList', JSON.stringify(taskObject));
         location.reload();
     }, false);

   }

   showTask(personLogin = false, taskObject = false) {
     let listTask      = document.getElementById('listTask');
     if (taskObject !== false) {
       for(let tasks of taskObject) {
           let task = JSON.parse(tasks);
           let taskJsonAction = JSON.stringify(task);

           //verif user task
           let userCon = JSON.parse(personLogin);
           if (userCon.email == task.user) {
             listTask.insertAdjacentHTML('afterend',
             '<div class="resp-box col-2"><div class="form-signin" style="background-color:'+task.color+';padding: unset; width: 90%;font-weight: bold; ">'+task.name+'<br> <img src="img/edit.png" data-id="'+task.id+'" data-name="'+task.name+'" data-user="'+task.user+'" data-color="'+task.color+'" data-private="'+task.private+'" data-created="'+task.created+'" id="edit" class="small_icon edit"> <img src="img/delete.png" id="delete" data-id="'+task.id+'" data-color="'+task.color+'" data-name="'+task.name+'" data-user="'+task.user+'" data-private="'+task.private+'" data-created="'+task.created+'" class="small_icon delete"> <img src="img/shared.png" data-id="'+task.id+'" data-name="'+task.name+'" data-user="'+task.user+'" data-color="'+task.color+'" data-private="'+task.private+'" data-created="'+task.created+'" id="share" class="small_icon share"> </div></div>')
          }
       }
     }
   }

   actionTask(storageObject = false, taskObject = false) {
     let edit       = document.getElementsByClassName('edit');
     let del        = document.getElementsByClassName('delete');
     let share      = document.getElementsByClassName('share');

     for (var i = 0; i < edit.length; i++) {
       edit[i].addEventListener("click", function (event) {
           event.preventDefault();
           let valueEdit = prompt("Update your task", "");
           if (valueEdit !== "" || valueEdit.length > 0) {
             let dataEdit = { "id": parseInt(this.dataset.id), "name":  this.dataset.name, "user": this.dataset.user, "color": this.dataset.color, "private": parseInt(this.dataset.private), "created": this.dataset.created };
             let dataStringEdit = JSON.stringify(dataEdit);
             let posEdit = taskObject.indexOf(dataStringEdit);

             taskObject.splice(posEdit, 1);

             console.log(taskObject, dataStringEdit, posEdit);

             dataEdit = { "id": parseInt(this.dataset.id), "name":  valueEdit, "user": this.dataset.user, "color": this.dataset.color, "private": parseInt(this.dataset.private), "created": this.dataset.created };
             dataStringEdit = JSON.stringify(dataEdit);

             //clear task data storage
             localStorage.removeItem("taskList");

             //resetting task data storage


             taskObject.push(dataStringEdit);
             localStorage.setItem('taskList', JSON.stringify(taskObject));

             location.reload();
           }
       }.bind(this))
     }

     for (var i = 0; i < del.length; i++) {
       del[i].addEventListener("click", function (event) {
           event.preventDefault();
           let dataSend = { "id": parseInt(this.dataset.id), "name": this.dataset.name ,"user": this.dataset.user, "color":this.dataset.color, "private": parseInt(this.dataset.private), "created": this.dataset.created };
           let dataString = JSON.stringify(dataSend);

           let pos = taskObject.indexOf(dataString);
           taskObject.splice(pos, 1);

           //clear task data storage
           localStorage.removeItem("taskList");
           //resetting task data storage
           localStorage.setItem('taskList', JSON.stringify(taskObject));
           console.log(taskObject);

           location.reload();
           //console.log(taskJSON_R2, pos);
       }.bind(this))
     }

     for (var i = 0; i < share.length; i++) {
       share[i].addEventListener("click", function (event) {
           event.preventDefault();
           alert('share')
       }.bind(this))
     }

   }

   //encrypt
   static utf8_to_b64( str ) {
     return window.btoa(unescape(encodeURIComponent( str )));
   }

   //Decrypt
   static b64_to_utf8( str ) {
     return decodeURIComponent(escape(window.atob( str )));
   }

   //checker var
   checkRootCount() {
     setInterval(function(){
       this.checkUp = '0';
       console.log(this.checkUp);
     }, 100);
   }

}
