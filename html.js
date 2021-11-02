const fs = require('fs');
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
<body>
<header>
<h>My Team: </h>  
</header>`;

const generateHtml = (employeeList) => {
    employeeList.forEach(element => {
   
        if(element.getRole() === "Manager"){
            htmlBody += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${element.getName()}'s Profile</h5>\n`
            htmlBody += `<i class="fas fa-assistive-listening-systems"></i>` + `${element.getRole()}\n
            <h6 class="card-subtitle mb-2 text-muted">Employee ID:${element.getId()} </h6>\n
            <p class="card-text">Contact me at:<a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>\n
            <p class="card-text">Or reach me at:${element.officeNumber};</p>\n`;
        };
        if(element.getRole() === "Intern"){
            htmlBody += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${element.getName()}'s Profile</h5>\n`
            htmlBody += `<i class="fas fa-baby"></i>` + `${element.getRole()}\n
            <h6 class="card-subtitle mb-2 text-muted">Employee ID:${element.getId()} </h6>\n
            <p class="card-text">Contact me at:<a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>\n
            <p class="card-text">I go to:${element.getSchool()};</p>\n`;
        };
        if(element.getRole() === "Engineer"){
            htmlBody += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${element.getName()}'s Profile</h5>\n`
            htmlBody += `<i class="fas fa-cogs"></i>` + `${element.getRole()}\n
            <h6 class="card-subtitle mb-2 text-muted">Employee ID:${element.getId()} </h6>\n
            <p class="card-text">Contact me at:<a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>\n
            <p class="card-text">Find me on GitHub:${element.getGitHub()};</p>\n`;
        }});
        htmlBody += `</body></html>`;
        fs.writeFileSync('index.html',htmlBody);

};

module.exports = {generateHtml};


  
   
