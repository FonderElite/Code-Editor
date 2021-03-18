   $("#cosmic2").click(function(){
    
    logo =  $("#cosmic2").attr('src','https://media4.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif').css({
          width: '17%',
          height:'9%',
          position:'absolute',
          top:'0%',
          left: '63%',
      })
      });
$(document).ready(function(){
$("#container-here").daisyjs({
    dotColor: 'cyan',
    lineColor: 'grey'
});

});
$("#cosmic").click(function(){
    
    logo =  $("#cosmic").attr('src','https://media4.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif').css({
          width: '10%',
          height:'15%',
          position:'absolute',
          top:'0%',
          left: '21.5%'
      })
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
  <!--Made By FonderElite
    GitHub:https://github.com/FonderElite-->
<html>
<head>
    <style>

    </style>
</head>
<body>
</body>

</html>`,1); //1 = moves cursor to end

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();
  
  
  editor.setOptions({
    fontSize: "12pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(true);
  editor.setBehavioursEnabled(false);
  
}


setupEditor();
update();


const changeTheme = $("#chtheme").click(function(){
    const codeThemes = ['monokai','cobalt','gob','terminal','chaos','ambiance','idle_fingers','iplastic'];
    let randomizedTheme = parseInt(Math.random() * codeThemes.length);
   // alert(randomizedTheme);
    switch(randomizedTheme){
case 0:
editor.setTheme(`ace/theme/${codeThemes[0]}`);
break;
case 1:
editor.setTheme(`ace/theme/${codeThemes[1]}`);
break;
case 2:
editor.setTheme(`ace/theme/${codeThemes[2]}`);
break;
case 3:
editor.setTheme(`ace/theme/${codeThemes[3]}`);
break;
case 4:
editor.setTheme(`ace/theme/${codeThemes[4]}`);
break;
case 5:
editor.setTheme(`ace/theme/${codeThemes[5]}`);
break;
case 6:
editor.setTheme(`ace/theme/${codeThemes[6]}`);
break;
case 7:
editor.setTheme(`ace/theme/${codeThemes[7]}`);
break;
    }
});
/*
const changeTheme = $("#chtheme").click(function(){
    const codeThemes = ['monokai','cobalt','gob','terminal','chaos','ambiance','idle_fingers','iplastic'];
  codeThemes.forEach(item =>{
      
  })
    
})
*/
const mobileHamburger = $('#hamburger').click(function(){
  let cover =   $('#cover').slideToggle(1000);
  let ul = $('ul');
  ul.slideToggle(400);
 first =  $('#firstli').css({
     backgroundColor: '#388E8E'
 })
 second =  $('#secondli').css({
    backgroundColor: '#2F4F4F'
 })
 third =  $('#thirdli').css({
    backgroundColor: '#2F4F4F'
 })
 fourth =  $('#fourthli').css({
    backgroundColor: '#2F4F4F'
 })
  let list = [
first,
second,
third,
fourth
  ]
})

