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
        
        eduDeg.value = "None";
        eduSdate.value = "";
        eduEdate.value = "";
        eduInst.value = "";
        eduScore.value = "";

        rm_edu.addEventListener('click' , function(e , i){
            var par = rm_edu.parentElement.parentElement;
            par.removeChild(eduCont);
        });
    }
});


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
    if(i==0){
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
        
        projName.value = "";
        projAssoc.value = "";
        projSdate.value = "";
        projDesc.value = "";
        projEdate.value = "";

        rm_proj.addEventListener('click' , function(e){
            var par = rm_proj.parentElement.parentElement;
            par.removeChild(projCont);
        });
    }
});


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
    if(j==0){
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
        
        interName.value = "";
        interType.value = "None";
        interOrg.value = "";
        interSdate.value = "";
        interDesc.value = "";
        interEdate.value = "";
        
        rm_inter.addEventListener('click' , function(e){
            var par = rm_inter.parentElement.parentElement;
            par.removeChild(interCont);
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

//----------------------------------------------------------------------
//---------Courses & Workshops----------------------------------------------
var crsName = document.getElementById("coursewrkshp");
var crsOrg = document.getElementById("organization");
var crsEdate = document.getElementById("crsedate");
var crsDetails = document.getElementById("coursesWorkshopsDetails");

var course = new Array();

document.getElementById("addcrs").addEventListener('click' , function(e){
    if(crsName.value.trim()=="" || crsOrg.value.trim()=="" || crsEdate.value==""){
        alert("Enter all the details of Courses & Workshops");
        crsName.value = "";
        crsOrg.value = "";
        crsEdate.value = "";
    }
    else{
        var crsNameDisp = document.createElement("p");
        var rm_crs = document.createElement("button");
        var crsCont = document.createElement("div");

        crsCont.appendChild(rm_crs);
        crsCont.appendChild(crsNameDisp);
        crsDetails.appendChild(crsCont);

        crsNameDisp.classList.add("course");
        crsCont.classList.add("crscon");

        rm_crs.classList.add("x")
        rm_crs.innerHTML = "X";

        crsNameDisp.innerHTML = crsName.value + " by " + crsOrg.value + " , " + crsEdate.value;

        course.push({
            "name": crsName.value,
            "org": crsOrg.value,
            "date": crsEdate.value
        });
                
        crsName.value = "";
        crsOrg.value = "";
        crsEdate.value = "";

        rm_crs.addEventListener('click' , function(e){
            var par = rm_crs.parentElement.parentElement;
            par.removeChild(crsCont);
        });
    }
});


//----------------------------------------------------------------------
//---------Extra Curricular----------------------------------------------
var actvty = document.getElementById("activities");
var actDetails = document.getElementById("achievementsDetails");

var extra = new Array();

document.getElementById("achievementsButton").addEventListener('click' , function(e){
    if(actvty.value.trim()==""){
        alert("Enter all the details of Extra-curricular activities");
        actvty.value = "";
    }
    else{
        var actvtyDisp = document.createElement("p");
        var rm_act = document.createElement("button");
        var actCont = document.createElement("div");

        actCont.appendChild(rm_act);
        actCont.appendChild(actvtyDisp);
        actDetails.appendChild(actCont);

        actvtyDisp.classList.add("achieve");
        actCont.classList.add("actcon");

        rm_act.classList.add("x")
        rm_act.innerHTML = "X";

        actvtyDisp.innerHTML = actvty.value;

        extra.push({"name": actvty.value});

        actvty.value = "";

        rm_act.addEventListener('click' , function(e){
            var par = rm_act.parentElement.parentElement;
            par.removeChild(actCont);
        });
    }
});

//-------------------------------------------------------------------------
//--------------save&next--------------------------------------------------
document.getElementById("save_next").addEventListener('click' , function(e){
    e.preventDefault();

    var email = document.getElementById("email");

    if(tech.length!=0){
        var skillobj = {
            "email": email.value,
            "data": tech
        }

        fetch("skill.php" , {
            method: "post",
            body: JSON.stringify(skillobj),
            headers: {
                'Content-Type': 'application.json'
            }
        }).catch(function(error){
            console.log(error);
        });
    }
});