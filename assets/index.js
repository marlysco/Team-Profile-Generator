// Dependencies
const inquirer = require("inquirer");
const fs = require('fs');

//Variables
const finalTeam=[];
const questions = [
//Manager questions 
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
    message:"Please enter your email address: "
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
    name:"engineerEmail",
    message:"Please enter the Engineer's email address: "
},
//Engineer's ID [6]
{
    type:"input",
    name:"engineerId",
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
    name:"internName",
    message:"Please enter the Intern's name: "
},
//Intern's Email [9]
{
    type:"input",
    name:"internEmail",
    message:"Please enter the Intern's email address: "
},
//Intern's ID
//Engineer's ID [10]
{
    type:"input",
    name:"internId",
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
    constructor(title,name, id, email) {
        this.title=title;
        this.name=name;
        this.id=id;
        this.email=email;
    }
    title(){
        return this.title;
    };
    name(){
        return this.name;
    };
    id() {
        return this.id;
    }
    email(){
        return this.email;
    };
}
//Manager class
class Manager extends Employee {
    constructor(officeNumber, title, name, id, email){
    super("Manager", name, id, email);
    this.officeNumber=officeNumber;   
           }
    officeNumber(){
        return this.officeNumber;
    }
        }

 //Engineer class
  class Engineer extends Employee {
  constructor(gitHub, title, name,id, email){
  super("Engineer", name, id, email);
  this.gitHub=gitHub;       
    }
      gitHub(){
       return this.gitHub;
              }
     }
//Intern class
class Intern extends Employee {
    constructor(school, title, name,id, email){
    super("Intern", name, id, email);
    this.school=school;  
    }
    school() {
        return this.school;
    }
   }


     function init() {
    console.log("Welcome to the command-line team builder application!!")
    console.log("Please enter all your team members information")
       inquirer.prompt([questions[0], questions[1], questions[2], questions[3]])
       .then(function(answer){
        const teamMaker = new Manager (answer.officeNumber, "Manager", answer.name,answer.id,answer.email);
        //Adding the member to the team array
        finalTeam.push(teamMaker)
        console.log("------------------------------------------------------------------------")
        //Ask for the next member of finish the team
        addMember();
    })
}
        
            
     init();

    function addMember() {
        inquirer.prompt([
            {
                type:'list',
                name:"nextMember",
                message:"Please select the team member you will add next: ",
                choices:['Engineer', 'Intern', "No more members in my team"],
            },
        ]).then(function(data){
            switch(data.nextMember){
                case 'Engineer':
                engineer();
                break;

                case 'Intern':
                intern();
                break;

                case "No more members in my team":
                printInfo();
                break;
            }
        })
    }

    function engineer () {
        inquirer.prompt([questions[4], questions[5], questions[6], questions[7]])
        .then(function(answers2){
           const engineer = new Engineer (answers2.gitHub, "Engineer", answers2.engineerName,answers2.engineerId,answers2.engineerEmail);
           //Adding the member to the team array
           finalTeam.push(engineer),
           console.log("------------------------------------------------------------------------")
           addMember();             
    })
}
    
 
   function intern () {
    inquirer.prompt([questions[8],questions[9], questions[10], questions[11]])
    .then(function(answers3){
       const intern = new Intern (answers3.school, "Intern", answers3.internName, answers3.internId,answers3.internEmail);
       //Adding the member to the team array
       finalTeam.push(intern)
       console.log("------------------------------------------------------------------------")
       addMember();
    })
}

function printInfo() {
    const myteam=[];
    const html=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" type="text/css" href="style.css" media="screen"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </head>
    <body>
        <header class=""></header>
        <div class="container">
            <div id="header" class="jumbotron">
                <h1 class="text-center">My Team</h1>   
            </div>
        </div>
        <div id="main" class="container col-12">`
    myteam.push(html)
    //Adding the collected information to the html page body
    for(var i=0; i < finalTeam.length; i++){
        var member = `
        <div id="member" class="member-card color:blue col-3 text-center">
            <div class="card-top">
             <h2>${finalTeam[i].title}</h2>
             <h2>${finalTeam[i].name}</h2>  
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeam[i].id}</p>
                <p>Email: ${finalTeam[i].email}</p>
                <a href="mailto:${finalTeam[i].email}" class="btn btn-primary">Send email to ${finalTeam[i].name}</a>
        
        ` 
        if (finalTeam[i].school) {
            member+=`<p>School: ${(finalTeam[i].school)}</p>
            </div>
            </div> `
        };

        if (finalTeam[i].officeNumber) {
            member+=`<p>Office Number: ${(finalTeam[i].officeNumber)}</p>
            </div>
            </div> `
        };

        if (finalTeam[i].gitHub) {
            member+=`<p>GitHub: <a href="https://github.com/${finalTeam[i].gitHub}">${finalTeam[i].gitHub}</a></p>
            </div>
            </div> `
           } 
        myteam.push(member) 
        }
        //Closing the div tag for the main container
        member+=`</div>`
        myteam.push(member) 
        const myFinalTeam=myteam.join('')

        fs.writeFile ("myteam.html", myFinalTeam, function(error){
            if(error) {
                console.log(error)
            }
        })
}
    
