function createName() {
    var nameElement = document.createElement("h1");
    var nameText = document.createTextNode("Aimee Norris");
    nameElement.appendChild(nameText);
    nameElement.style.color="red";
    nameElement.style.fontFamily="Tahoma, Geneva, sans-serif";
    nameElement.setAttribute("align","center");
    return nameElement;
}

function createClassInfo() {
    var classInfo = document.createElement("h2");
    var classText = document.createTextNode("WEB 115 - Section 0002")
    classInfo.appendChild(classText);
    classInfo.style.color = "red";
    classInfo.style.fontFamily='Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif';
    classInfo.setAttribute("align","center");
    classInfo.style.fontStyle="italic";
    return classInfo;
}
var nameLocation = document.getElementById("topOfPage");
var myName = createName();
nameLocation.appendChild(myName);
var myClassInfo = createClassInfo();
nameLocation.appendChild(myClassInfo);


var myForm = document.resume;

function validateEmail(email)
{
   var emailRegExp = /^.+@.+\..+$/;
    return emailRegExp.test(email);  
}


function createDateString(start,end) {
    months = ["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."];
    var date1startArray = start.split("-");
    var month1start = date1startArray[1];
    var year1start = date1startArray[0];
    var date1endArray = end.split("-");
    var month1end = date1endArray[1];
    var year1end = date1endArray[0];
    var daterange;
    var currentJob=false;

    var currentDate = new Date();
    if ((currentDate.getFullYear()==year1end)&&(currentDate.getMonth()==month1end-1)&&(currentDate.getDate()==date1endArray[2])) {
        currentJob = true;
    }
    if (currentJob) {
        daterange = new String(months[month1start-1]+" "+year1start+" - Present");
    } else if (year1start!=year1end) {
        daterange = new String(months[month1start-1]+" "+year1start+" - "+months[month1end-1]+" "+year1end);
    } else {
        daterange = new String(months[month1start-1]+" - "+months[month1end-1]+" "+year1end);
    }
    return daterange;
}
function btnCheckFormClick(e) {
    //var email = myForm.emailText;
    var email = document.getElementById("emailTextBox").value
    var visitorName = document.getElementById("nameTextBox").value;
    var address = document.getElementById("addressTextBox").value;
    var phone = document.getElementById("phoneTextBox").value;

    if ((email=="")|(visitorName=="")|(address=="")|(phone=="")) {
        alert ("You are missing a required field. Please check your input.")
        if (visitorName==""){
            document.getElementById("nameTextBox").focus();
        }
        else if (address=="") {
            document.getElementById("addressTextBox").focus();
        }
        else if (phone=="") {
            document.getElementById("phoneTextBox").focus();
        }
        else if (email=="") {
            document.getElementById("emailTextBox").focus();
        }
    }
    else {

        if (validateEmail(email)) {
            
            var career = document.getElementById("careerObjs").value;
            var businessRefs = document.getElementById("businessRefs").value;
            var personalData = document.getElementById("personalData").value;
            var education = document.getElementById("education").value;

            var startDate1 = document.getElementById("startDate1").value;
            var endDate1 = document.getElementById("endDate1").value;
            var employment1 = document.getElementById("employment1").value;

            var startDate2 = document.getElementById("startDate2").value;
            var endDate2 = document.getElementById("endDate2").value;
            var employment2 = document.getElementById("employment2").value;

            var startDate3 = document.getElementById("startDate3").value;
            var endDate3 = document.getElementById("endDate3").value;
            var employment3 = document.getElementById("employment3").value;

            var dateString = createDateString(startDate1,endDate1);
            var dateString2 = createDateString(startDate2,endDate2);
            var dateString3 = createDateString(startDate3,endDate3);
        
            myText = ("<html>\n<head>\n<title>Resume</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"resumeStyle.css\"></head>\n<body>\n");
            myText +=(visitorName+"<br>");
            myText +=(email+"<br>");
            myText +=(address+" / "+phone+"\n"+"<hr>");
            myText += ("<div id=\"theLeft\">CAREER OBJECTIVES</div>" );
            myText += ("<div id=\"theRight\">"+career+"</div><br>");
            myText += ("<div id=\"theLeft\">PERSONAL DATA</div>" );
            myText += ("<div id=\"theRight\">"+personalData+"</div><br>");
            myText += ("<div id=\"theLeft\">EDUCATION</div>" );
            myText += ("<div id=\"theRight\">"+education+"</div><br>");
            myText += ("<div id=\"theLeft\">EMPLOYMENT EXPERIENCE</div><br>");
            //myText += ("<div id=\"theLeft\">"+month1start+" "+year1start+" - "+month1end+" "+year1end+"</div><br>");
            myText += ("<div id=\"theLeft\">"+dateString+"</div><br>");
            myText += ("<div id=\"theRight\">"+employment1+"</div><br>");
            
            if ((startDate2!="")&&(endDate2!="")) {
                myText += ("<div id=\"theLeft\">"+dateString2+"</div><br>");
                myText += ("<div id=\"theRight\">"+employment2+"</div><br>");
            }

            if ((startDate3!="")&&(endDate3!="")) {
                myText += ("<div id=\"theLeft\">"+dateString3+"</div><br>");
                myText += ("<div id=\"theRight\">"+employment3+"</div><br>");
            }

            myText += ("<div id=\"theLeft\">CHARACTER REFERENCES</div>" );
            myText += ("<div id=\"theRight\">"+"Upon request</div><br>");
            myText += ("<div id=\"theLeft\">BUSINESS REFERENCES</div>" );
            myText += ("<div id=\"theRight\">"+businessRefs+"</div><br>");
        

            myText += ("</body>\n</html>");

        //flyWindow = window.open('','Resume','toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=800,height=800');
        //flyWindow.document.write(myText);
            window.document.write(myText);
        }
        else {
            alert("Invalid email");
            document.getElementById("emailTextBox").focus();
            e.preventDefault();
        }   
    }
}


myForm.btnCreateResume.addEventListener("click",btnCheckFormClick);
