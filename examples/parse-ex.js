var celeri = require("../");


//an option with info for the help menu
celeri.option({
    command: 'hello :person',
    description: 'Prints "hello [person]!"',
    optional: {
        '--age': 'The person\'s age',
        '--gender': 'The person\'s gender'
    }
}, function(data) {

   console.log("Hello %s!", data.person);

   if(data.age) console.log("%s is %d years old.", data.person, data.age); 
   if(data.gender) console.log("%s is a %s.", data.person, data.gender); 

});


celeri.parse(process.argv, function(e, cmd) {
	if(e) throw e;

  if(cmd.command.length) celeri.open();
});