const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const studentcourse = document.getElementById('studentCourse');
const profile = document.getElementById("profile");
const change = document.getElementById("changeBackground");
const show = document.getElementById("toggleDetails");
const details = document.getElementById("details");



buttonname.addEventListener("click", function(){
    studentname.textContent = "Melissa Bandoquillo";
}

);

change.addEventListener("click", 
    function(){
            change.classList.toggle("active");
           
            if(change.classList.contains("active")){
                profile.style.backgroundColor ="#0d94892c";
            }
            else{
                profile.style.backgroundColor ="white";
            }
    }
);

show.addEventListener("click", 
    function(){
        show.classList.toggle("active");

        if(show.classList.contains("active")){
            details.style.display ="block";
        }

        else{
             details.style.display ="none";
        }
    }
);



