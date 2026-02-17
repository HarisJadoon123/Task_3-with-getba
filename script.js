function submission(e) {
    e.preventDefault();
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let dob = document.querySelector("#dob");
    let phone = document.querySelector("#phone");
    let cnic = document.querySelector("#cnic");
    let picture = document.querySelector("#picture")

    document.getElementById("error").innerText = "";
    document.getElementById("error1").innerText = "";
    document.getElementById("error2").innerText = "";
    document.getElementById("error3").innerText = "";
    document.getElementById("error4").innerText = "";
    document.getElementById("error5").innerText = "";

    if (name.value.trim() === "")                                            //Name Validation 
        document.getElementById("error").innerText = "Please Enter Your Name";
    else if (/\d/g.test(name.value))
        document.getElementById("error").innerText = "Name Only Contain Alphabets";

    else if (email.value.trim() === "")                                      //Emial Validation
        document.getElementById("error1").innerText = "Please Enter Your Email Address ";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
        document.getElementById("error1").innerText = "Invalid Email Address";

    else if (dob.value.trim() === "")                                        //DOB Validation
        document.getElementById("error2").innerText = "Please Select Your Date Of Birth";

    else if (phone.value.trim() === "")                                      //Phone Validation
        document.getElementById("error3").innerText = "Please Enter Your Phone Number";

    else if (phone.value.trim().length > 11)
        document.getElementById("error3").innerText = "Phone Number Cannot Exceed 11 digit";

    else if (!/^\d+$/.test(phone.value))
        document.getElementById("error3").innerText = "Phone Number Only Contain Numbers";

    else if (cnic.value.trim() === "")                                      //CNIC Validation
        document.getElementById("error4").innerText = "Please Enter Your CNIC";
    else if (cnic.value.trim().length > 13)
        document.getElementById("error4").innerText = "CNIC Cannot Exceed 13 digit";
    else if (!/^\d+$/.test(cnic.value))
        document.getElementById("error4").innerText = "CNIC Only Contain Numbers";

        else if (picture.value.trim() === "")                             //Picture Validation
        document.getElementById("error5").innerText = "Please Upload Your Profile Picture";
    else
        alert("FORM SUBMITTED SUCCESSFULLY")
}