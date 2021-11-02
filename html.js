const fs = require('fs');


const generateHtml = (employeeList) => {
    var htmlBody = `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="description" content="Team Profiles are generated based on users input">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./Assets/style.css">
    <script src="https://kit.fontawesome.com/c419192472.js" crossorigin="anonymous"></script>
    <title>My Team</title>
    </head>
    <body >
    <header>
    <h>My Team: </h>  
    </header>
    <div class="row">
    `;
    employeeList.forEach(element => {
        if(element.getRole() === "Manager"){
            htmlBody += `<div class="card container" style="width: 18rem;">
            <div class="card-body memberCard">
            <h5 class="card-title"> ${element.getName()}'s Profile</h5>\n`
            htmlBody += `<i class="fas fa-assistive-listening-systems"></i> ` + `${element.getRole()}
            <h6 class="card-text">Employee ID: ${element.getId()} </h6>
            <p class="card-text">Contact me at: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>
            <p class="card-text">Or reach me at: ${element.officeNumber};</p>
            </div></div>\n`
        };
        if(element.getRole() === "Intern"){
            htmlBody += `<div class="card container" style="width: 18rem;">
            <div class="card-body memberCard">
            <h5 class="card-title">${element.getName()}'s Profile</h5>\n`
            htmlBody += `<i class="fas fa-baby"></i> ` + `${element.getRole()}
            <h6 class="card-text">Employee ID: ${element.getId()} </h6>
            <p class="card-text">Contact me at: <a href="mailto: ${element.getEmail()}">${element.getEmail()}</a></p>
            <p class="card-text">I go to: ${element.getSchool()};</p>
            </div></div>\n`  
        };
        if(element.getRole() === "Engineer"){
            htmlBody += `<div class="card container" style="width: 18rem;">
            <div class="card-body memberCard">
            <h5 class="card-title">${element.getName()}'s Profile</h5>\n`
            htmlBody += `<i class="fas fa-cogs"></i> ` + `${element.getRole()}
            <h6 class="card-text">Employee ID: ${element.getId()} </h6>
            <p class="card-text">Contact me at: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>
            <p class="card-text">Find me on GitHub:<a href="https://github.com/${element.getGitHub()}" target="_blank"><i class="fab fa-github"></i></a>;</p>
            </div></div>\n`
        }
    });
        htmlBody += `</div></body>
            <footer class="bg-light text-center text-lg-start">
            <div class="text-center text-light p-3" style="background-color: black;">
            © 2020 Copyright:
            <a class="text-light" href="https://github.com/Valllerian"> Valerii Bihun</a>
            </div>
             </footer>
             </html>`;
        fs.writeFileSync('index.html',htmlBody);

};

module.exports = {generateHtml};


  
   
