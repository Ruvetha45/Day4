
var json = [{
    "name" : "ruvetha", 
    "task"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    
    "email": "sruvetha19@gmail.com"
},
{
    "name" : "ruve", 
    "task" : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    
    "email": "sruvetha19@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.task);
    console.log(obj.email);

}
//for Each
json.forEach(function(obj) { console.log(obj.task); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
  console.log(json[key].task);
 
}
}
//for Of
let text = "";
for (let x of json[key].name) {
 text += x; 
}
 console.log(text);




