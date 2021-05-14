// Dependencies
const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
//Personal questions 
//Manager's name[0]
    {
    type:"input",
    name:"name",
    message:"Please enter the team manager's name: "
},
//Personal ID [1]
{
    type:"input",
    name:"id",
    message:"Please enter your employee ID: "
},
//Personal email [2] 
{
    type:"input",
    name:"email",
    message:"Please enter the email address: "
},
//Office Number [3]
{
    type:"input",
    name:"officeNumber",
    message:"Please enter your office number: "
},

//Engineer questions
//Engineer Name [4]
{
    type:"input",
    name:"engineerName",
    message:"Please enter the engineer's name: "
},
//Engineer Email [5]
{
    type:"input",
    name:"email",
    message:"Please enter the Engineer's email address: "
},
//Engineer's ID [6]
{
    type:"input",
    name:"id",
    message:"Please enter the Engineer's ID: "
},
//Engineer GitHub Profile [7]
{
    type:"input",
    name:"gitHub",
    message:"Please enter the engineer's GitHub profile: "
},
//Intern questions
//Intern's Name [8]
{
    type:"input",
    name:"engineerName",
    message:"Please enter the engineer's name: "
},
//Intern's Email [9]
{
    type:"input",
    name:"email",
    message:"Please enter the Engineer's email address: "
},
//Intern's ID
//Engineer's ID [10]
{
    type:"input",
    name:"id",
    message:"Please enter the Intern's ID: "
},
//Intern's school [11]
{
    type:"input",
    name:"school",
    message:"Please enter the intern's school: "
},
]

//Main class
class Employee {
    constructor(tittle,name, id, email) {
        this.tittle=tittle;
        this.name=name;
        this.id=id;
        this.email=email;
    }
}

     function init() {
       inquirer.prompt([questions[0], questions[1], questions[2], questions[3]])
       .then(function(answers){
        //Manager class
        class Manager extends Employee {
        constructor(officeNumber, tittle, name, id, email){
        super("Manager", name, id, email);
        this.officeNumber=answers.officeNumber      
               }
            }
        const manager = new Manager (answers.officeNumber, "Manager", answers.name,answers.id,answers.email);
        console.log(manager)
        
        inquirer.prompt([
            {
                type:'list',
                name:"nextMember",
                message:"Please select the team member you will add next: ",
                choices:['Engineer', 'Intern', "No more members in my team"],
            },
        ]).then(function(answers2){
            if (answers2.nextMember==="Engineer"){
             engineer ();   
            }
            else if (answers2.nextMember==="Intern"){
              intern();  
            }
            else {
                printInfo();
            }
          })

       })}
        
   

      
        
       

    
    
    
       init();


    function engineer () {
        inquirer.prompt([questions[4], questions[5], questions[6], questions[7]])
        .then(function(answers2){
            //Engineer class
            class Engineer extends Employee {
            constructor(gitHub, tittle, name,id, email,){
            super("Engineer", name, id, email);
            this.gitHub=answers2.gitHub;  
            }
           }})
           const engineer = new Engineer (answers2.gitHub, "Engineer", answers2.engineerName,answers2.id,answers2.email);
           console.log(engineer)
           //Ask for the next member
           inquirer.prompt([{
            type:'list',
            name:"nextMember",
            message:"Do you need to add any other member to your team?",
            choices:['Intern', "No more members in my team"], 
         }].then(function(next){
             if (next.nextMember==="Intern"){
                 intern();
             }
             else {
                printInfo();
             }
            })
           )      
    }


    function intern () {
        inquirer.prompt([questions[8],questions[9], questions[10], questions[11]],
            {
                type:'list',
                name:"nextMember",
                message:"Do you need to add any other member to your team?",
                choices:['Engineer', "No more members in my team"], 
             })
        .then(function(answers3){
            //Intern class
            class Intern extends Employee {
            constructor(school, tittle, name,id, email,){
            super("Intern", name, id, email);
            this.school=answers3.school;  
            }
           }})
           const intern = new Intern (answers3.school, "Intern", answers3.internName, answers3.id,answers3.email);
           console.log(intern)
           //Ask for the next member
           //inquirer.prompt([{
           // type:'list',
           // name:"nextMember",
            //message:"Do you need to add any other member to your team?",
           // choices:['Engineer', "No more members in my team"], 
         //}].then(function(next){
             //if (next.nextMember==="Engineer"){
                 if (answers3.nextMember==="Engineer"){
                 engineer();
             }
             else {
                printInfo();
             }
           // })
           //)      
    }


    function printInfo() {
        var html = `<!DOCTYPE html>
<html>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    </head>
<body>
<header>
<nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
<div class="container-fluid">
  <a class="navbar-brand" href="#">My Team</a>
  <div class="collapse navbar-collapse" id="navbarsExample01">
</div>
</nav>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-primary">
        <div class="card-header py-3 text-white bg-primary border-primary">
          <h4 class="my-0 fw-normal">${data.managerName}</h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>${data.id}</li>
            <li><a href="mailto:${data.email}">${data.email}</a></li>      
            <li>${data.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
return html;
}
    