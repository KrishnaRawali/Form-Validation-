/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */
function IssueTracker(){
    this.issues = [];
}
IssueTracker.prototype = {
    add: function(issue){
        this.issues.push(issue);
    },
    retreive: function(){
        var message = "";
        switch(this.issue.length){
            case 0:
                break;
            case 1:
                message = "Please correct the following: \n" + this.issues[0];
                break;
            case 2:
                message = "Please correct the following : \n"+ this.issues.join["\n"];
                break;

        }
        return message;
    }

};
submit.onclick = function () {
    var firstPassword = firstPasswordInput.value;
    var secondPassword = secondPasswordInput.value;
    var firstInputIssuesTracker = new Issuetracker();
    var secondInputIssuesTracker = new Issuetracker();
    function checkRequirement(){
        if(firstPassword.length<16){
            firstInputIssuesTracker.add("Fewer than 16 characters")
        }
        else if(firstPassword.length>100){
            firstInputIssuesTracker.add("Greater than 100 characters")
        }

    if(!firstPassword.match(/[\!\@\#\$\%\^\&\*]/g)){
            firstInputIssuesTracker.add("missing a symbol")
        }
        if(!firstPassword.match(/\d/g)){
            firstInputIssuesTracker.add("Missing a number")
        }
        if(!firstPassword.match(/[a-z]/g)){
            firstInputIssuesTracker.add("Atleast one letter should be lowercase")
        }
        if(!firstPassword.match(/[A-Z]/g)){
            firstInputIssuesTracker.add("Atleast one letter should be uppercase")
        }
    }


var illegalCharacterGroup = firstPassword.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g)
    if(illegalCharacterGroup) {
        illegalCharacterGroup.forEach(function (illegalChar) {
            firstInputIssuesTracker.add("includes illegal due : " + illegalChar);
        });
    }
};

if(firstPassword === secondPassword && firstPassword.length>0)
{
    checkRequirement();
}
else{
    secondPasswordInput.add("passwords must match");
}

var firstInputIssues = firstInputIssuesTracker.retrieve()
var secondInputIssues = secondInputIssuesTracker.retrieve()

firstPasswordInput.setCustomValidity(firstInputIssues);
secondPasswordInput.setCustomValidity(secondInputIssues);

if (firstInputIssues.length + secondInputIssues.length === 0)
{
    alert("password change sucessful");
};
