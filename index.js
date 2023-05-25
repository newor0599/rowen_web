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
            document.getElementById("query").value = "";
            return
        }
        else if (search == "d"){
            window.open("https://discord.com/channels/@me");
            document.getElementById("query").value = "";
            return
        }
        else if(search=="g"){
            window.open("https://github.com")
            document.getElementById("query").value = "";
            return
        }
        else if(search=="r"){
            window.open("https://roblox.com/home")
            document.getElementById("query").value = "";
            return
        }
        else{
            var url = "https://duckduckgo.com/"+search;
            window.open(url);
            document.getElementById("query").value = "";
        }
    }    
})
