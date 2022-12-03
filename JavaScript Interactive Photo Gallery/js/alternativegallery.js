var obj;

function upDate(previewPic){
	document.getElementById('image').innerHTML = previewPic.alt
    document.getElementById('image').style.backgroundImage="url('"+previewPic.src+"')";
}

function unDo(){
        
    var previousAlt = "Hover over an image below to display here."
  
    document.getElementById('image').innerHTML=previousAlt;
    document.getElementById('image').style.background='#8e68ff';
    document.getElementById('image').style.backgroundImage="url('')";
} 