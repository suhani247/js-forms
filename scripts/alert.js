window.onload = function(){var submitButton = document.querySelector('.btn');
//var submitButton = document.getElementById('submitbutton')
submitButton.addEventListener('click',function(){
   var details = getDetails();
   var value = verify(details);
   if(value != true)
   {
      sweetAlert({
                    title: "Error!",
                    text: value,
                    type: "error",
                    confirmButtonText: "Close"
                  });
   }
   else
   {
      show(details);
   }
});}();


function getDetails()
{
   
   var name = document.getElementById("usr");
    var genders = document.getElementsByName("gender");
    var gender;
         for(var i= 0, length = genders.length; i<length; i++)
         {
            if(genders[i].checked)
               {
                  gender=genders[i].value; 
                  break;
               
               }
         }
   var Address = document.getElementById("address");
   var phone = document.getElementById("phone");
   var email = document.getElementById("email");
   var org = document.getElementById("org");
   
   var detailsObject = {
      usrName : name.value,
      usrGender : gender,
      usrAddress : Address.value,
      usrPhone : phone.value,
      usrEmail : email.value,
      usrOrg : org.value
   };
   
   return detailsObject;
}

function verify(obj)
{
   if (obj.usrName == '')
   return ('Please enter your name');
   if(obj.usrGender == null)
   return ('Please select gender');
   if(obj.usrAddress == '')
   return ('Please enter address');
   if(obj.usrPhone == '')
   {
      return ('Please enter mobile no.')
   }
   if(!obj.usrPhone.match(/^\d+$/))
   {
      return ('Only digits allowed in phone number');
   }
   if(obj.usrPhone.length!=10)
   {
      return ('Enter a valid 10 digit mobile number');
   }
   var x = obj.usrEmail;
   var atpos = x.indexOf("@");
   var dotpos = x.lastIndexOf(".");
   if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      return ("Not a valid e-mail address");}
   if(obj.usrOrg == '')
   return ('Please enter your organisation');
   
   return true;
       
}

function show(obj)
{
   sweetAlert("Data Entered!","Name : " + obj.usrName + "\nGender : " + obj.usrGender + "\nAddress : " + obj.usrAddress + "\nPhone : " + obj.usrPhone + "\nEmail : " + obj.usrEmail + "\nOrganisation : " + obj.usrOrg,"success");
}
