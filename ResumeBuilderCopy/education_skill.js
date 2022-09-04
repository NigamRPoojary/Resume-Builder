//----------------------------------------------------------------------
//---------Education Info-----------------------------------------------
var eduDeg = document.getElementById("deg");
var eduScore = document.getElementById("score");
var eduSdate = document.getElementById("startdate");
var eduEdate = document.getElementById("enddate");
var eduInst = document.getElementById("inst");
var eduDetails = document.getElementById("EdInfoDetails");

var education = new Array();

document.getElementById("addedu").addEventListener('click' , function(e){
    if(eduDeg.value=="None" || eduScore.value.trim()=="" || eduSdate.value=="" || eduInst.value.trim()==""){
        alert("Enter all the required fields in EDUCATIONAL DETAILS");
        eduScore.value = "";
        eduInst.value = "";
        eduSdate.value = "";
        eduEdate.value = "";
        eduDeg.value = "None";
    }
    else{
        var eduDegDisp = document.createElement("span");
        var eduYearDisp = document.createElement("span");
        var eduInstDisp = document.createElement("span");
        var eduScoreDisp = document.createElement("span");
        var sp = document.createElement("br");
        var rm_edu = document.createElement("button");
        var eduCont = document.createElement("div");

        eduCont.appendChild(rm_edu);
        eduCont.appendChild(eduDegDisp);
        eduCont.appendChild(eduYearDisp);
        eduCont.appendChild(sp);
        eduCont.appendChild(eduInstDisp);
        eduCont.appendChild(eduScoreDisp);
        eduDetails.appendChild(eduCont);

        eduDegDisp.classList.add("degree");
        eduYearDisp.classList.add("Eduyear");
        eduInstDisp.classList.add("college");
        eduScoreDisp.classList.add("Eduaggregate");
        eduCont.classList.add("educon");

        rm_edu.classList.add("x")
        rm_edu.innerHTML = "X";

        eduDegDisp.innerHTML = eduDeg.value;
        eduYearDisp.innerHTML = eduSdate.value+" to "+eduEdate.value;
        eduInstDisp.innerHTML = eduInst.value;
        eduScoreDisp.innerHTML = eduScore.value;

        education.push({
            "degree": eduDeg.value,
            "inst": eduInst.value,
            "date": eduSdate.value+" to "+eduEdate.value,
            "score": eduScore.value
        });

        var len = education.length;
        console.log(education);
        
        eduDeg.value = "None";
        eduSdate.value = "";
        eduEdate.value = "";
        eduInst.value = "";
        eduScore.value = "";

        rm_edu.addEventListener('click' , function(e , i){
            var par = rm_edu.parentElement.parentElement;
            par.removeChild(eduCont);
            education.splice(len-1 , 1);
        });
    }
});

//----------------------------------------------------------------------
//---------Technical Skill----------------------------------------------

var sc = 0;
var techDetails = document.getElementById("TechSkillDetails");
var techInput = document.getElementById("skills");

var tech = new Array();

document.getElementById("addskill").addEventListener('click' , function(e){
    if(techInput.value.trim()==""){
        alert("Enter the skill");
        techInput.value = "";
    }
    else{
        var skill_elem = document.createElement("span");
        techDetails.appendChild(skill_elem);

        skill_elem.innerHTML = techInput.value+"<button class=\"x\" id=\"bt"+sc+"\">X</button>";
        tech.push({"name": techInput.value});
        
        techInput.value = "";

        skill_elem.classList.add("skillList")
        var rm_skill = document.getElementById("bt"+sc);

        skill_elem.id = "id"+sc;
        sc = sc+1;

        rm_skill.addEventListener('click' , function(e){
            var par = rm_skill.parentElement.parentElement;
            par.removeChild(skill_elem);
            tech.splice(sc-1 , 1);
        });
    }
});

//-------------------------------------------------------------------------
//--------------save&next--------------------------------------------------
document.getElementById("save_next").addEventListener('click' , function(e){
    e.preventDefault();

    if(education.length!=0){
        var eduobj = {
            "id": "edu",
            "data": education
        }

        fetch("education_skill.php" , {
            method: "post",
            body: JSON.stringify(eduobj),
            headers: {
                'Content-Type': 'application.json'
            }
        }).catch(function(error){
            console.log(error);
        });
    }

    if(tech.length!=0){
        var techobj = {
            "id": "tech",
            "data": tech
        }

        fetch("education_skill.php" , {
            method: "post",
            body: JSON.stringify(techobj),
            headers: {
                'Content-Type': 'application.json'
            }
        }).catch(function(error){
            console.log(error);
        });
    }

    window.location.href = "Project_Details.html"
});