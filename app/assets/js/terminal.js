var message = document.getElementById("message"),
    insert = document.getElementById("code"),
    terminal = document.getElementById("terminal"),
    maxMsg = 200,
    tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&not;&nbsp;&nbsp;",
    code = new Array();


write("<span class='welcome'>Welcome to my site! <br/>It is currently under construction <br> Feel free to explore around.<br>Type <span class='commandWord'>help</span> for more.</span>");

function write(msg){
    message.innerHTML = "";
    code.push(msg);
    if(code.length>maxMsg){
        code.splice(0,(code.length-maxMsg));
    }
    for(var i=0; i<code.length;i++){
        var newMsg = document.createElement("li");
        newMsg.innerHTML = code[i];
        message.appendChild(newMsg);
    }
    message.scrollTop = message.scrollHeight;
}

function executeCommand(){
    cmd = insert.value;
    write("> <span class='commandWord'>" + cmd +'</span>');
    insert.value = "";
    //make it lowercase, not case sensitive
    cmd = cmd.toLowerCase();
    switch(cmd){

        case "help":
            write("Available Commands<br>");
            write("- <span class='commandWord'>about</span> : displays a little about me.");
            write("- <span class='commandWord'>clear</span> : Clears this screen");
            break;
            
        case "clear":
            code = new Array();
            insert.value ="";
            message.innerHTML = "";
            break;
            
        case "about":
            write("Hello my name is Jose Rodriguez, <br/>I graduated from Stony Brook University with<br/> my bachelors in Computer Science and a<br/> minor in Spanish Language and Literature.<br/>To be continued....");
            break;

        default :
            write("'<span class='commandWord'>" + cmd + "</span>' is not recognized <br/> type <span class='commandWord'>help</span> for more.");
            break;
        
    }
    write("<br>");
    return false;
}