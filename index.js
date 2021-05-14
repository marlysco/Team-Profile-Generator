// Dependencies
const inquirer = require("inquirer");
const fs = require('fs');

//Variables
const finalTeam=[];
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
    constructor(tittle,name, id, email) {
        this.tittle=tittle;
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
    constructor(officeNumber, tittle, name, id, email){
    super("Manager", name, id, email);
    this.officeNumber=answers.officeNumber;   
           }
    officeNumber(){
        return this.officeNumber;
    }
        }

 //Engineer class
  class Engineer extends Employee {
  constructor(gitHub, tittle, name,id, email){
  super("Engineer", name, id, email);
  this.gitHub=answers2.gitHub;       
    }
      gitHub(){
       return this.gitHub;
              }
     }
//Intern class
class Intern extends Employee {
    constructor(school, tittle, name,id, email){
    super("Intern", name, id, email);
    this.school=answers3.school;  
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
        console.log(teamMaker)
        //Adding the member to the team array
        finalTeam.push(teamMaker)
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
           console.log(engineer)
           //Adding the member to the team array
           finalTeam.push(engineer),
           addMember();             
    })
}
    
 
   function intern () {
    inquirer.prompt([questions[8],questions[9], questions[10], questions[11]])
    .then(function(answers3){
       const intern = new Intern (answers3.school, "Intern", answers3.internName, answers3.internId,answers3.internEmail);
       console.log(intern);
       //Adding the member to the team array
       finalTeam.push(intern)
       addMember();
    })
}


function printInfo() {
    fs.writeFile("myteam.html", html, function(error){
        if(error) {
            console.log(error)
        }
    })
}