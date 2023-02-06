var aud=document.getElementById("audio");
var img=document.getElementById("but1");
var para=document.getElementById("text");
img.src="play.png";
var songs=["kadhalaisolla.mp3","aruyire.mp3","blankspace.mp3","eekathayo.mp3","enkaviye.mp3","enthara.mp3","intoyourarms.mp3","lovestory.mp3","mudhalnee.mp3","parayuvan.mp3"];
var songname=["Kadhalai solla Mudiyatha","Aruyire Mannipaya From Guru","Blankspace_taylor album","Eekathayo from Dearcomrade","Kadhal En Kaviiye ","Enthara enthara","Into your arms tonight ","Lovestory-TaylorSwift","Mudhalnee mudivum Nee","Parayuvan Idhathyamai from Ishq"];
var i=0;
var a=0;
para.innerText=songname[a];
aud.src=songs[a];
function play(){
  if(i==0){
    img.src="pause.png";
    aud.play();
    i=1;
  }
  else{
     img.src="play.png";
     aud.pause();
     i=0;
  }
  
}
function backward(){
  if(a==0){
    a=10;
  }
  aud.pause();
  a=a-1;
  aud.src=songs[a];
  if(i==0){
    aud.pause();
  }
  para.innerText=songname[a];
}
function forward(){
  if(a==9){
    a=-1;
  }
  aud.pause();
  a=a+1;
  aud.src=songs[a];
  if(i==0){
    aud.pause();
  }
  para.innerText=songname[a];
}
function rewin(){
  //aud.pause();
  var time=Math.floor(aud.currentTime);
  // if(x==0){    
    // console.log(time);
    // if(time=0){
    //   aud.play();
    // }
    // else{
    console.log(time);
    time=time-10;
    console.log(time);
    aud.currentTime=time;
    console.log(aud.currentTime);
  // }
    //aud.play();
}
function backwind(){
 
    var time=Math.floor(aud.currentTime);
    console.log(time);
    time=time+10;
    console.log(time);
    aud.currentTime=time;
    console.log(aud.currentTime);
  
}
function change(a){
    aud.pause();
    aud.src=songs[a];
    para.innerText=songname[a];
    aud.play();
}