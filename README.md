```html
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"></script>
<link rel="shortcut icon" href="https://www.svgrepo.com/show/44984/atom.svg">
<link rel="https://cdn.jsdelivr.net/gh/warengonzaga/daisy.js/daisy.js">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js" integrity="sha512-n/4gHW3atM3QqRcbCn6ewmpxcLAHGaDjpEBu4xZd47N0W2oQ+6q7oc3PXstrJYXcbNU1OHdQ1T7pAP+gi5Yu8g==" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/gh/warengonzaga/daisy.js/daisy.min.js"></script>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

<title>Atomic Editor</title>
<style>
body{
margin:0;
padding: 0;
color:white;
font-family:'poppins';
background:black;
height: 98%;

}
@media(min-width: 800px){
#container-here{
    position: absolute;
    width: 99%;
    height: 100%;
    background-color:rgb(48, 46, 46);
}
#headerh1{
    position: absolute;
    top: -3%;
    height: 10%;
    width: 99%;
    font-size: 5vh;
    border: 1px solid white;
    padding: 15px;
    font-size: 6vh;
    text-shadow: 0px 0px 4px 5px black;
    font-weight: 1000;
    background-color:rgb(26, 25, 25);
    
}
#cosmic{
    position:absolute;
    width: 13%;
    height: 17%;
    top: -1.5%;
left:20%;
z-index: 1;
display:none;
transition:0.2s;
}
#cosmic:hover{
height:18%;
width: 14%;
transition:0.5s;
cursor: pointer;
}
ul{
    list-style: none;
    text-decoration: none;
}
a{
    text-decoration: none;
    color: white;
    border: 1px solid white;
    border-radius: 10%;
    padding: 5px 5px;
    background-color: rgb(13, 122, 150);
    text-shadow: 0px 6px 7px black;
    z-index:2;
    transition: 0.5s

}

#firstli{
position: absolute;
    top: 3.5%;
    left: 40%;
    padding: 10px 15px;
}
#firstli:hover{
    padding: 15px 18px;
    transition: 0.5s;
}
#secondli{
    position: absolute;
    left: 51%;
    top: 3.5%;
    padding: 10px 15px;
}
#secondli:hover{
    padding: 15px 18px;
    transition: 0.5s;
}
#thirdli{
    position: absolute;
    left: 66%;
    top: 3.5%;
    padding: 10px 15px;
}
#thirdli:hover{
    padding: 15px 18px;
    transition: 0.5s;
}
#fourthli{
    position: absolute;
    left: 77%;
    top: 3.5%;
    padding: 10px 15px;
}
#fourthli:hover{
    padding: 15px 18px;
    transition: 0.5s;
}

#codelogo{
    position: absolute;
    width: 5%;
    height: 10%;
    top: 1%;
    left: 93%;
}
#codee{
   position: absolute;
   top: 14.5%;
   width: 52%;
   height: 90%;
   overflow: scroll;
   
}
.ace_editor .ace_marker-layer .ace_bracket { display: none }
/*Code editor Style*/

body { margin:0; padding:0; height:100%; width:100%; position: absolute;}
html{
    margin:0; 
    padding:0;
     height:120%;
      width:100%;
       position: absolute;
       background-color: white;

}

#editor {
    height: 90%;
    width:50%;
    display:inline-block;
    border: 1px solid white;
}

#down_container {
	height:80%;
	width:100%;
  white-space : nowrap; 
  overflow : hidden;
  position:absolute;
  top: 15%;
  left: 1%;
  

}

#iframe {
	height:90%;
	display:inline-block;
	width:50%;
    position:absolute;
    top:0%;
}

/* disable tag matching */
.ace_editor .ace_marker-layer .ace_bracket { display: none }

}
/*0px-768px* Resolution*/
@media(max-width:768px){
    /*null*/
}
</style>
</head>
<body>
<div class="container" id="container-here" onload="load()">
<div id="header">
<img id="cosmic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"><h1 id="headerh1">Atomic Editor</h1>
<ul>
    <li><a id="firstli" href="#">MainPage</a></li>
    <li><a id="secondli" href="#">Documentations</a></li>
    <li><a id="thirdli" href="#">Liscense</a></li>
    <li><a  id="fourthli" href="#">StackOverFlow</a></li>
</ul>
<img id="codelogo" src="https://cdn.iconscout.com/icon/free/png-256/code-336-830581.png">

</div>
<div id='down_container'>

    <div id="editor">
    </div>
  
    <iframe id='iframe' frameBorder="0">
    </iframe>
  </div>
  
</div>
<script>
    $("#cosmic").click(function(){
    
    logo =  $("#cosmic").attr('src','https://media4.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif').css({
          width: '10%',
          height:'15%',
          position:'absolute',
          top:'0.5%',
          left: '22%'
      })
      
      
      });
    
$(document).ready(function(){
$('#cosmic').slideToggle(1000);
$("#container-here").daisyjs({
    dotColor: 'cyan',
    lineColor: 'grey'
});

});
function update()
{
	let idoc = document.getElementById('iframe').contentWindow.document;
	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}


function setupEditor()
{
 window.editor = ace.edit("editor");
theme = editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
<html>
<head>
</head>

<body>
</body>

</html>`,1); //1 = moves cursor to end

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();
  
  
  editor.setOptions({
    fontSize: "13pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: true
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
  
}


setupEditor();
update();


</script>
</body>
</html>
```

