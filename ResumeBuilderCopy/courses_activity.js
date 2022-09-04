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

        var len = course.length;
        console.log(course);
                
        crsName.value = "";
        crsOrg.value = "";
        crsEdate.value = "";

        rm_crs.addEventListener('click' , function(e){
            var par = rm_crs.parentElement.parentElement;
            par.removeChild(crsCont);
            course.splice(len-1 , 1);
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

        var len = extra.length;
        console.log(extra);

        actvty.value = "";

        rm_act.addEventListener('click' , function(e){
            var par = rm_act.parentElement.parentElement;
            par.removeChild(actCont);
            extra.splice(len-1 , 1);
        });
    }
});


//-------------------------------------------------------------------------
//--------------save&next--------------------------------------------------
document.getElementById("save_next").addEventListener('click' , function(e){
    e.preventDefault();

    if(course.length!=0){
        var crsobj = {
            "id": "crs",
            "data": course
        }

        fetch("courses_activity.php" , {
            method: "post",
            body: JSON.stringify(crsobj),
            headers: {
                'Content-Type': 'application.json'
            }
        }).catch(function(error){
            console.log(error);
        });
    }

    if(extra.length!=0){
        var extobj = {
            "id": "ext",
            "data": extra
        }

        fetch("courses_activity.php" , {
            method: "post",
            body: JSON.stringify(extobj),
            headers: {
                'Content-Type': 'application.json'
            }
        }).catch(function(error){
            console.log(error);
        });
    }

    window.location.href = "Template_Selection.html"
});