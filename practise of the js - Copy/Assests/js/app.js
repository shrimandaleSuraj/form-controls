let cl = console.log;


  const db = {
    email : 'suraj@123',
    password : "Pass@123",
  }
  const loginform = document.getElementById('loginform');
 const  emailcontrol = document.getElementById('email')
 const passwordcontrol = document.getElementById('password');




  const onLoginhandler = (eve)=>{
          eve.preventDefault ();
      const emailval = emailcontrol.value;
      const passwordval= passwordcontrol.value;

     cl(email,password)

     if(emailval===db.email && passwordval===db.password){
           alert('login successfully')
     }else{
        alert('invalid username or password')
     }
  }




  loginform.addEventListener('submit',onLoginhandler)







