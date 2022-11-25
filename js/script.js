
var users = ['Essam', 'Rita', 'George', 'Hussam', 'Basel', 'jon', 'Jad', 'Saad'];

var myFunc = users.map(name => name.charAt(0));
for( var i=0; i< users.length; i++){
        if(myFunc[i]== 'j' || myFunc[i]=='J'){
            console.log("Goodbye " + users[i]);
        }
        else{
            console.log("Hello " + users[i]);
        }
    }
