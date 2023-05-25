document.getElementById("search").onclick = function(){
    var search = document.getElementById("query").value;
    if (search!=""){
        var url = "https://duckduckgo.com/"+search;
        window.open(url);
    }
}
document.getElementById("query").addEventListener("keyup",function(event){
    var search = document.getElementById("query").value;
    if(event.key == "Enter" && search != ""){
        if (search == "y"){
            window.open("https://youtube.com");
            return
        }
        else if (search == "d"){
            window.open("https://discord.com/channels/@me");
            return
        }
        else if(search=="g"){
            window.open("https://github.com")
            return
        }
        else if(search=="r"){
            window.open("https://roblox.com/home")
            return
        }
        else{
            var url = "https://duckduckgo.com/"+search;
            window.open(url);
        }
    }    
    document.getElementById("query").value = "";
})
