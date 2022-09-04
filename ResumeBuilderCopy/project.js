//----------------------------------------------------------------------
//---------Project Info----------------------------------------------
var projName = document.getElementById("projectname");
var projAssoc = document.getElementById("assoc");
var projCur = document.getElementById("present");
var projSdate = document.getElementById("sdate");
var projEdate = document.getElementById("edate");
var projDesc = document.getElementById("desc");
var projDetails = document.getElementById("ProjectsDetails");

var project = new Array();

var i = 0;
projCur.addEventListener('change' , function(e){
    if(projCur.checked==true){
        projEdate.setAttribute("disabled" , "");
        i = 1;
    }
    else{
        projEdate.removeAttribute("disabled");
        i = 0;
    }
});

document.getElementById("projectButton").addEventListener('click' , function(e){
    if(projName.value.trim()=="" || projAssoc.value.trim()=="" || projSdate.value=="" || projDesc.value.trim()=="" || (i==0 && projEdate.value=="")){
        alert("Enter all the required fields in PROJECT DETAILS");
        projName.value = "";
        projAssoc.value = "";
        projDesc.value = "";
        projSdate.value = "";
        if(i==0){
            projEdate.value = "";
        }
    }
    else{
        var projNameDisp = document.createElement("span");
        var projAssocDisp = document.createElement("p");
        var projDateDisp = document.createElement("span");
        var projDescDisp = document.createElement("p");
        var rm_proj = document.createElement("button");
        var projCont = document.createElement("div");

        projCont.appendChild(rm_proj);
        projCont.appendChild(projNameDisp);
        projCont.appendChild(projDateDisp);
        projCont.appendChild(projAssocDisp);
        projCont.appendChild(projDescDisp);
        projDetails.appendChild(projCont);

        projNameDisp.classList.add("projname");
        projAssocDisp.classList.add("projassoc");
        projDateDisp.classList.add("projdate");
        projDescDisp.classList.add("projdesc");
        projCont.classList.add("projcon");

        rm_proj.classList.add("x")
        rm_proj.innerHTML = "X";

        projNameDisp.innerHTML = projName.value;
        projAssocDisp.innerHTML = projAssoc.value;
        projDescDisp.innerHTML = projDesc.value;
        if(i==1){
            var projdate = projSdate.value + " to present";
        }
        else{
            var projdate = projSdate.value + " to "+projEdate.value;
        }
        projDateDisp.innerHTML = projdate;

        project.push({
            "name": projName.value,
            "org": projAssoc.value,
            "date": projdate,
            "desc": projDesc.value
        });

        var len = project.length;
        console.log(project);
        
        projName.value = "";
        projAssoc.value = "";
        projSdate.value = "";
        projDesc.value = "";
        projEdate.value = "";

        rm_proj.addEventListener('click' , function(e){
            var par = rm_proj.parentElement.parentElement;
            par.removeChild(projCont);
            project.splice(len-1 , 1);
        });
    }
});

//-------------------------------------------------------------------------
//--------------save&next--------------------------------------------------
document.getElementById("save_next").addEventListener('click' , function(e){
    e.preventDefault();

    if(project.length!=0){
        var projobj = {
            "data": project
        }

        fetch("project.php" , {
            method: "post",
            body: JSON.stringify(projobj),
            headers: {
                'Content-Type': 'application.json'
            }
        }).catch(function(error){
            console.log(error);
        });
    }

    window.location.href = "Internship_Experience.html"
});