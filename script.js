function submission(e){
    e.preventDefault();
    let email = document.querySelector("#email");
    let name = document.querySelector("#name");
    let organization = document.querySelector("#organization");
    let checkBox = document.querySelector(".o2")
    if( name.value.trim() ==="")
        alert("Please Enter Your Name");
    else if(/\d/g.test(name.value) )
        alert("Name Only Contain Alphabets");
    
    else if(/\d/g.test(name.value) )
        alert("Name Only Contain Alphabets");

    else if( email.value.trim() ==="")
        alert("Please Enter Your Email Address ");


   else if( organization.value.trim() ==="")
        alert("Please Enter Your Organization Name");

   else
    alert("FORM SUBMITTED SUCCESSFULLY")
}