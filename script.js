
var section = document.getElementsByTagName("section")[0];


const changeTab = (nameTab) => {
    document.getElementsByTagName("h1")[0].innerText = nameTab;  

    switch (nameTab) {
        case "Portfolio":
          portfolioTab();
        break;     
        case "Projects":
          projectsTab();
        break;
        case "About":
          aboutTab();
        break; 
        case "Contact":
          contactTab();
        break;
        case "Login":
            loginTab();
        break;
        default:
          portfolioTab();
      }

}

const portfolioTab = () => {

  section.innerHTML = "";

    if(document.getElementsByClassName("home-div").length==0){

      let div = document.createElement("div");
      div.setAttribute("class","home-div");
      section.appendChild(div);

      let h2 = document.createElement("h2");
      h2.setAttribute("class","home-h2");
      div.appendChild(h2);

      let par = document.createElement("p");
      par.setAttribute("class","home-p");
      div.appendChild(par);

      let img = document.createElement("img");
      img.setAttribute("class","hacker");
      img.src = "https://raw.githubusercontent.com/AsmrProg-YT/Personal-Portfolios/master/Personal%20Portfolio%20%2301/images/header.png";
      img.alt = "Programista"
      section.appendChild(img);

      h2.innerText = "Hi, I'am ";
      let txt = "Jestem studentem na Uniwersytecie Śląskim w Katowicach III roku informatyki ze specjalizacją ISI - inżynieria systemów informatycznych. Mój główny stack to HTML+CSS+JS+PHP. W przyszłości chciałbym zostać Frontend developerem lub Programistą FULLSTACK. Aktualnie pracuje jako specjalista ds. technicznych w Promitel";
        
      par.innerText = txt; 
    
  }
}

const projectsTab = () => {
   section.innerHTML = "";
  
   if(document.getElementsByClassName("projects-div").length==0){

    let div = document.createElement("div");
    div.setAttribute("class","projects-div");
    section.appendChild(div);

    //bootstrap modal    

    //zakładka z projektami, prawdopodobnie będą w formie kart które będą się
    //powiekszały i będą prezentować galerię zdjęć+opis+komentarze.
    //komentarze beda przechowywane w bazie wraz z id projektu
    //projekt w bazie bedzie mial id, tytul,opis
    
    }

}

const aboutTab = () => {
    section.innerHTML = "";

    if(document.getElementsByClassName("about-div").length==0){

      let div = document.createElement("div");
      div.setAttribute("class","about-div");
      section.appendChild(div);
      
      let par = document.createElement("p");
      par.setAttribute("class","about-p");
      div.appendChild(par);
      let txt = "Jestem studentem na Uniwersytecie Śląskim w Katowicach III roku informatyki ze specjalizacją ISI - inżynieria systemów informatycznych. Mój główny stack to HTML+CSS+JS+PHP. W przyszłości chciałbym zostać Frontend developerem lub Programistą FULLSTACK. Aktualnie pracuje jako specjalista ds. technicznych w Promitel";
      
      par.innerText += txt;  
      par.innerText += txt; 
      //sekcja o mnie
  
      //Opis, doświadczenie, języki itp, może być w formie słupków
      //procentowych z https://getbootstrap.com/docs/4.0/components/progress/

      }
}

const contactTab = () => {

    section.innerHTML = "";

    if(document.getElementsByClassName("contact-div").length==0){

let h2 = document.createElement('h2');
h2.setAttribute('class', 'contact-h2');
h2.innerText = 'Send Your ';

let divContact = document.createElement('div'); 
divContact.setAttribute('class', 'container w-25 contact-div'); 

let formContact = document.createElement("form");
formContact.method = "POST";
formContact.action = "script.php";
divContact.appendChild(formContact);
let divMail = document.createElement('div'); 
divMail.setAttribute('class', 'mb-4 form-floating');

let inputMail = document.createElement('input'); 
inputMail.type = 'email'; 
inputMail.name = 'contactEmail';
inputMail.setAttribute('class', 'form-control'); 
inputMail.setAttribute('id', 'emailInput'); 
inputMail.placeholder = 'name@example.com'; 

let labelMail = document.createElement('label'); 
labelMail.setAttribute('for', 'emailInput'); 
labelMail.innerText = 'Email address';  

divMail.appendChild(inputMail); 
divMail.appendChild(labelMail); 

let divTextArea = document.createElement('div'); 
divTextArea.setAttribute('class', 'mb-4 form-floating'); 

let textArea = document.createElement('textarea'); 
textArea.setAttribute('class', 'form-control'); 
textArea.setAttribute('id', 'textAreaInput'); 
textArea.setAttribute('rows', '3'); 
textArea.name = "contactTextArea";

textArea.setAttribute("oninput","checkContactForm()");
inputMail.setAttribute("oninput","checkContactForm()");

let labelTextArea = document.createElement('label'); 
labelTextArea.setAttribute('for', 'textAreaInput'); 
labelTextArea.innerText = 'Your Message';

divTextArea.appendChild(textArea);
divTextArea.appendChild(labelTextArea); 
let sendButton = document.createElement('input'); 
sendButton.type ="submit"; 
sendButton.value = "Send Messages"; 
sendButton.setAttribute('class', 'btn btn-primary'); 
sendButton.setAttribute('id', 'contactSubmit'); 
sendButton.disabled = true;

section.appendChild(h2);
section.appendChild(divContact);
formContact.appendChild(divMail);
formContact.appendChild(divTextArea);
formContact.appendChild(sendButton);

      }
}

const checkContactForm = () => {

    let mail = document.getElementById('emailInput').value;
    let textAreaContent = document.getElementById('textAreaInput').value;

    if(mail.length>0 && textAreaContent.length>0 && mail.includes("@") && mail.includes(".") && !(mail.includes(';') ||mail.includes('"') || mail.includes("'")) && !(textAreaContent.includes(';') || textAreaContent.includes('"') || textAreaContent.includes("'"))){
      document.getElementById("contactSubmit").disabled = false;
    }
    else{
      document.getElementById("contactSubmit").disabled = true;
    }

}

const loginTab = () => {
    section.innerHTML = "";

    if(document.getElementsByClassName("login-div").length==0){

      let div = document.createElement("div");
      div.setAttribute("class","login-div");
      section.appendChild(div);

      let h2 = document.createElement('h2');
      h2.setAttribute('class', 'login-h2');
      h2.innerText = 'Please login to your ';
      div.appendChild(h2);

      let form = document.createElement("form");
      form.setAttribute("class","form-floating mb-3 login-form");
      form.method = "POST";
      form.action = "script.php";
      div.appendChild(form);

      let divMail = document.createElement("div");
      divMail.setAttribute("class","form-floating mb-3 mail-login");
      form.appendChild(divMail);

      let mailInput = document.createElement("input");
      mailInput.type = "email";
      mailInput.setAttribute("class","form-control");
      mailInput.setAttribute("id","floatingMail");
      mailInput.placeholder = "name@example.com";
      mailInput.name = "mail-login";
      mailInput.required = true;
      mailInput.setAttribute("oninput","checkLoginForm()");

      let mailLabel = document.createElement("label");
      mailLabel.setAttribute("for","floatingMail");
      mailLabel.innerText = "Login: email";

      divMail.appendChild(mailInput);
      divMail.appendChild(mailLabel);

      let divPassword = document.createElement("div");
      divPassword.setAttribute("class","form-floating mb-3 password-login");
      form.appendChild(divPassword);

      let passwordInput = document.createElement("input");
      passwordInput.type = "password";
      passwordInput.setAttribute("class","form-control");
      passwordInput.setAttribute("id","floatingPassword");
      passwordInput.placeholder = "password";
      passwordInput.name = "password-login";
      passwordInput.required = true;
      passwordInput.setAttribute("oninput","checkLoginForm()");
      
      let passwordLabel = document.createElement("label");
      passwordLabel.setAttribute("for","floatingPassword");
      passwordLabel.innerText = "Login: password";

      divPassword.appendChild(passwordInput);
      divPassword.appendChild(passwordLabel);

      let submitButton = document.createElement('input');
      submitButton.type ="submit";
      submitButton.setAttribute('class', 'btn btn-primary w-50 login-btns sbmt');
      submitButton.value = 'Log in';
      submitButton.setAttribute('id','submitLogin');
      submitButton.disabled = true;

      //let captchaDiv = document.createElement("div");
      //captchaDiv.setAttribute("class","form-floating mb-3 captcha-div");
      //form.appendChild(captchaDiv);

      let divButtons = document.createElement("div");
      divButtons.setAttribute("class","form-floating mb-3 buttons-login");
      form.appendChild(divButtons);

      let signinButton = document.createElement('input');
      signinButton.type ="button";
      signinButton.setAttribute('class', 'btn btn-primary w-50 login-btns');
      signinButton.value = 'Sign in';
      signinButton.setAttribute('onclick', 'registerNewUser()');
      divButtons.appendChild(submitButton);
      divButtons.appendChild(signinButton);
  
      }
      
}

const registerNewUser = () => {

  section.innerHTML = "";
  window.location.href = 'http://localhost/project/#register';

  if(document.getElementsByClassName("register-div").length==0){

    let div = document.createElement("div");
    div.setAttribute("class","register-div");
    section.appendChild(div);

    let h2 = document.createElement('h2');
    h2.setAttribute('class', 'register-h2');
    h2.innerText = 'Create a new ';
    div.appendChild(h2);

    let form = document.createElement("form");
    form.setAttribute("class","form-floating mb-3 register-form");
    form.method = "POST";
    form.action = "script.php";
    div.appendChild(form);

    let divMail = document.createElement("div");
    divMail.setAttribute("class","form-floating mb-3 mail-login");
    form.appendChild(divMail);

    let mailInput = document.createElement("input");
    mailInput.type = "email";
    mailInput.setAttribute("class","form-control");
    mailInput.setAttribute("id","floatingRegisterMail");
    mailInput.placeholder = "name@example.com";
    mailInput.name = "mail-register";
    mailInput.setAttribute("oninput","checkRegisterForm()");
    
    let mailLabel = document.createElement("label");
    mailLabel.setAttribute("for","floatingRegisterMail");
    mailLabel.innerText = "Register: email";

    divMail.appendChild(mailInput);
    divMail.appendChild(mailLabel);

    let divPassword = document.createElement("div");
    divPassword.setAttribute("class","form-floating mb-3 password-login");
    form.appendChild(divPassword);

    let divPassword2 = document.createElement("div");
    divPassword2.setAttribute("class","form-floating mb-3 password2-login");
    form.appendChild(divPassword2);

    let passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.setAttribute("class","form-control");
    passwordInput.setAttribute("id","floatingPassword");
    passwordInput.placeholder = "password";
    passwordInput.name = "password-register";
    passwordInput.setAttribute("oninput","checkRegisterForm()");
    

    let passwordInput2 = document.createElement("input");
    passwordInput2.type = "password";
    passwordInput2.setAttribute("class","form-control");
    passwordInput2.setAttribute("id","floatingPassword2");
    passwordInput2.placeholder = "password";
    passwordInput2.name = "password2-register";
    passwordInput2.setAttribute("oninput","checkRegisterForm()");
    
    
    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for","floatingPassword");
    passwordLabel.setAttribute("class","registerLabels");
    passwordLabel.innerText = "Register: password";
    passwordLabel.setAttribute('id','labelRegister');

    let passwordLabel2 = document.createElement("label");
    passwordLabel2.setAttribute("for","floatingPassword2");
    passwordLabel2.setAttribute("class","registerLabels");
    passwordLabel2.innerText = "Please repeat here your password";
    passwordLabel2.setAttribute('id','labelRegister2');

    divPassword.appendChild(passwordInput);
    divPassword.appendChild(passwordLabel);
    divPassword2.appendChild(passwordInput2);
    divPassword2.appendChild(passwordLabel2);

    let submitButton = document.createElement('input');
    submitButton.type ="submit";
    submitButton.setAttribute('class', 'btn btn-primary w-50 register-btns sbmt');
    submitButton.value = 'Sign up';
    submitButton.setAttribute('id','submitRegister');
    submitButton.disabled = true;

    let loginButton = document.createElement('input');
    loginButton.type ="button";
    loginButton.setAttribute('class', 'btn btn-primary w-50 login-btns sbmt');
    loginButton.value = 'Login';
    loginButton.setAttribute('id','buttonLogin');
    loginButton.setAttribute('onclick','loginTab()');

    let divButtons = document.createElement("div");
    divButtons.setAttribute("class","form-floating mb-3 buttons-register");
    form.appendChild(divButtons);

    divButtons.appendChild(submitButton);
    divButtons.appendChild(loginButton);

    }

}

//guest może przeglądać wiadomości wysłane z powiązanym mailem i sprawdzać
//czy odczytane

//admin może przeglądać wiadomości + przeglądać statystyki
//nie moze "wyswietlac wiadomosci"

//owner moze wyswietlac wiadomosci + statystyki + zarządzać projektami

const checkRegisterForm = () => {

  let login = document.getElementById("floatingRegisterMail").value;
  let password1 = document.getElementById("floatingPassword").value;
  let password2 = document.getElementById("floatingPassword2").value;
  let submit = document.getElementById("submitRegister");

  submit.disabled = true;

   if(login.length>0 && password1.length>0 && password2.length>0 && login.includes("@") && login.includes(".") && !(login.includes(';') || login.includes('"') || login.includes("'")) && !(password1.includes(';') || password1.includes('"') || password1.includes("'") || password2.includes(';') || password2.includes('"') || password2.includes("'"))){

      if(password1 != password2){
          document.getElementById("labelRegister").innerText = "Password are not the same ❌";
          document.getElementById("labelRegister2").innerText = "Password are not the same ❌";
          document.getElementById("labelRegister").color = "red";
      }
      else{
        document.getElementById("labelRegister").innerText = "Register: password ✔️";
        document.getElementById("labelRegister2").innerText = "Register: password ✔️";
        submit.disabled = false;
      }
   }
}

const checkLoginForm = () => {

  let login = document.getElementById("floatingMail").value;
  let password = document.getElementById("floatingPassword").value;

  if(login.length>0 && password.length>0 && login.includes("@") && login.includes(".") && !(login.includes(';') || login.includes('"') || login.includes("'")) && !(password.includes(';') || password.includes('"') || password.includes("'"))){
  
    document.getElementById("submitLogin").disabled = false;

  }
  else{

    document.getElementById("submitLogin").disabled = true;

  }

}

//różne funkcję do css
const customCursor = document.querySelector('.custom-cursor');

section.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  customCursor.style.left = x + 'px';
  customCursor.style.top = y + 'px';
  customCursor.style.transform = 'translate(-50%, -50%)';
});

var header = document.getElementsByClassName("header")[0];
const scrollPosition = 10;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollPosition) {
      // Po przewinięciu strony o odpowiednią pozycję zmieniamy kolor tła menu
      header.style.backgroundColor = "black";
  } else {
      // W przeciwnym wypadku przywracamy pierwotny kolor
      header.style.backgroundColor = "transparent";
  }
});







