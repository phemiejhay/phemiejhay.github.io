var a;
function hideshow() {
  if (a == 0) {
    document.getElementById("education").style.display = "block";
    return (a = 1);
  } else {
    document.getElementById("professional-skills").style.display = "none";
    document.getElementById("experience").style.display = "none";
    return (a = 1);
  }
} 

var a;

function showit() {
  if (a == 0) {
    document.getElementById("professional-skills").style.display = "block";
    return (a = 1);
  } else {
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "none";
    return (a = 1);
  }
}

var a;

function display() {
  if (a == 0) {
    document.getElementById("experience").style.display = "block";
    return (a = 1);
  } else {
    document.getElementById("education").style.display = "none";
    document.getElementById("professional-skills").style.display = "none";
    return (a = 0);
  }
}

document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("prev").prepend(lists[lists.length - 1]);
};

/* function color(){
    document.getElementById('circle-first').style.backgroundColor = "#ff014f";
}


document.getElementById("circle-first").onclick = function(){
    document.getElementById("circle-first").style.backgroundColor = "#ff014f";
} */

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
  }
  tablink.classList.remove("active-link");
  for (tabcontent of tabcontents) {
  }
}
tabcontent.classList.remove("active-tab");
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");

{/* <div class="tickerwrapper">
  <ul class="list">
    <li class="listitem">
      <span>This is list item 1</span>
    </li>
    <li class="listitem">
      <span>This is list item 2</span>
    </li>
    <li class="listitem">
      <span>This is list item 3</span>
    </li>
    <li class="listitem">
      <span>This is list item 4</span>
    </li>
    <li class="listitem">
      <span>This is list item 5</span>
    </li>
    <li class="listitem">
      <span>This is list item 1</span>
    </li>
    <li class="listitem">
      <span>This is list item 2</span>
    </li>
    <li class="listitem">
      <span>This is list item 3</span>
    </li>
    <li class="listitem">
      <span>This is list item 4</span>
    </li>
    <li class="listitem">
      <span>This is list item 5</span>
    </li>
    <li class="listitem">
      <span>This is list item 1</span>
    </li>
    <li class="listitem">
      <span>This is list item 2</span>
    </li>
    <li class="listitem">
      <span>This is list item 3</span>
    </li>
    <li class="listitem">
      <span>This is list item 4</span>
    </li>
    <li class="listitem">
      <span>This is list item 5</span>
    </li>
  </ul>
</div>; */}



/* *, *::before, *::after{
  -webkit-box-sizing:padding-box;
  box-sizing:padding-box;
}

body{
  background:#CCC;
}

body,
div,
ul,
li,
p {
  margin: 0;
  padding: 0;
  font-family: verdana;
  font-size: 16pt;
}

.tickerwrapper {
  /* the outer div */
  
 /*  position: relative;
  top: 30px;
  left:0%;
  border: 1px solid #444;
  background: #fff;
  width: 99.9%;
  height: 30px;
  overflow: hidden;
  cursor: pointer;
}

ul.list {
  position: relative;
  display: inline-block;
  list-style: none;
  padding:0;
  margin:0;
}

ul.list.cloned {
  position: absolute;
  top: 0px;
  left: 0px;
}

ul.list li {
  float: left;
  padding-left: 20px;
}  */



var $tickerWrapper = $(".tickerwrapper");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 10;

$list.find("li").each(function (i) {
			listWidth += $(this, i).outerWidth(true);
});

var endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
	"width" : listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: true});
var time = 40;

infinite
  .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
  .set($list, {force3D:true, rotation:0.01, x: listWidth})
  .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
  .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
  .progress(1).progress(0)
  .play();

//Pause/Play		
$tickerWrapper.on("mouseenter", function(){
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});