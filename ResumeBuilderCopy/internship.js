//----------------------------------------------------------------------
//---------Internship Info----------------------------------------------
var interName = document.getElementById("inttitle");
var interType = document.getElementById("inttype");
var interOrg = document.getElementById("intorg");
var interCur = document.getElementById("intpresent");
var interSdate = document.getElementById("intsdate");
var interEdate = document.getElementById("intedate");
var interDesc = document.getElementById("intdesc");
var interDetails = document.getElementById("InternshipsDetails");

var internship = new Array();

var j = 0;
interCur.addEventListener('change' , function(e){
    if(interCur.checked==true){
        interEdate.setAttribute("disabled" , "");
        j = 1;
    }
    else{
        interEdate.removeAttribute("disabled");
        j = 0;
    }
});

document.getElementById("internshipButton").addEventListener('click' , function(e){
    if(interName.value.trim()=="" || interType.value=="None" ||interOrg.value.trim()=="" || interSdate.value=="" || interDesc.value.trim()=="" || (j==0 && interEdate.value=="")){
        alert("Enter all the required fields in INTRENSHIP/JOB DETAILS");
        interName.value = "";
        interType.value = "None";
        interOrg.value = "";
        interDesc.value = "";
        interSdate.value = "";
        if(j==0){
            interEdate.value = "";
        }
    }
    else{
        var interNameDisp = document.createElement("span");
        var interOrgDisp = document.createElement("p");
        var interDateDisp = document.createElement("span");
        var interDescDisp = document.createElement("p");
        var rm_inter = document.createElement("button");
        var interCont = document.createElement("div");

        interCont.appendChild(rm_inter);
        interCont.appendChild(interNameDisp);
        interCont.appendChild(interDateDisp);
        interCont.appendChild(interOrgDisp);
        interCont.appendChild(interDescDisp);
        interDetails.appendChild(interCont);

        interNameDisp.classList.add("intername");
        interOrgDisp.classList.add("interorg");
        interDateDisp.classList.add("interdate");
        interDescDisp.classList.add("interdesc");
        interCont.classList.add("intercon");

        rm_inter.classList.add("x")
        rm_inter.innerHTML = "X";

        interNameDisp.innerHTML = interName.value + " | " + interType.value;
        interOrgDisp.innerHTML = interOrg.value;
        interDescDisp.innerHTML = interDesc.value;
        if(j==1){
            var interdate = interSdate.value + " to present";
        }
        else{
            var interdate = interSdate.value + " to "+interEdate.value;
        }
        interDateDisp.innerHTML = interdate;

        internship.push({
            "name": interName.value,
            "role": interType.value,
            "org": interOrg.value,
            "time": interdate,
            "desc": interDesc.value
        });

        var len = internship.length;
        console.log(internship);
        
        interName.value = "";
        interType.value = "None";
        interOrg.value = "";
        interSdate.value = "";
        interDesc.value = "";
        interEdate.value = "";
        
        rm_inter.addEventListener('click' , function(e){
            var par = rm_inter.parentElement.parentElement;
            par.removeChild(interCont);
            internship.splice(len-1 , 1);
        });
    }
});

//-------------------------------------------------------------------------
//--------------save&next--------------------------------------------------
document.getElementById("save_next").addEventListener('click' , function(e){
    e.preventDefault();

    if(internship.length!=0){
        var internobj = {
            "data": internship
        }

        fetch("internship.php" , {
            method: "post",
            body: JSON.stringify(internobj),
            headers: {
                'Content-Type': 'application.json'
            }
        }).catch(function(error){
            console.log(error);
        });
    }

    window.location.href = "Courses_Activities.html"
});