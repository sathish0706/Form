var h3=document.createElement("h3")
h3.innerHTML="Form Submission"

var label=lab("label","Name"); 
var label1=lab("label","Last Name");
var label2=lab("label","Addres Line 1:");
var label3=lab("label","Addres Line 2:");
var label4=lab("label","PIN");
var label5=lab("label","Gender");
var label6=lab("label","Male");
var label7=lab("label","Female");
var label8=lab("label","choice of food (must choose 2 option)");
var label9=lab("label","south indian");
var label10=lab("label","northindian");
var label11=lab("label","chinese");
var label12=lab("label","japanese");
var label13=lab("label","sea food");
var label14=lab("label","State:");
var label15=lab("label","Country:");


var input=inputField("input","text","Name","submit1"); 
var input1=inputField("input","text","Lastname","submit2");
var input2=inputField("input","text","Addres Line 1:","submit3");
var input3=inputField("input","text","Addres Line 2:","submit4");
var input4=inputField("input","text","PIN","submit5");
var input5=inputField("input","radio","a","submit6","mm");
var input6=inputField("input","radio","a","submit11","mm");
var input8=inputField("input","checkbox","a","submit7");
var input9=inputField("input","checkbox","a",);
var input10=inputField("input","checkbox","a",);
var input11=inputField("input","checkbox","a",);
var input12=inputField("input","checkbox","a",);
var input13=inputField("input","text","State","submit8");
var input14=inputField("input","text","country","submit9");

var br=breakLine("br");
var br1=breakLine("br");
var br2=breakLine("br");
var br3=breakLine("br");
var br4=breakLine("br");
var br5=breakLine("br");
var br6=breakLine("br");
var br7=breakLine("br");
var br8=breakLine("br");
var br9=breakLine("br");
var br10=breakLine("br");
var br11=breakLine("br");
var br12=breakLine("br");
var br13=breakLine("br");
var br14=breakLine("br");
var br15=breakLine("br");
var br16=breakLine("br");
var br17=breakLine("br");
var br18=breakLine("br");
var br19=breakLine("br");
var br20=breakLine("br");
var br21=breakLine("br");
var br22=breakLine("br");
var br23=breakLine("br");
var br24=breakLine("br");
var br25=breakLine("br");
var br26=breakLine("br");
var br27=breakLine("br");
var br28=breakLine("br");
var br29=breakLine("br");
var br30=breakLine("br");

var btn=document.createElement("button");
btn.setAttribute("type","button");
btn.innerHTML="submit"
document.body.append(btn)


  document.body.append(h3,label,br,input,br1,br5,label1,
  br2,input1,br3,br6,label2,br4,input2,br7,br8,label3,
  br9,input3,br10,br11,label4,br12,input4,br13,br14,label5,br15,input5,
  label6,input6,label7,br16,br17,label8,br18,input8,label9,br19,input9,label10,
  br20,input10,label11,br21,input11,label12,br22,input12,label13,br23,br24,label14,br25,
  input13,br26,br27,label15,br28,input14,br29,br30,btn)

function lab(ele,content){
    var label=document.createElement(ele);
    label.innerHTML=content;
    return label
}

function inputField(tag,atributeVal,p_holder,name,unic){
  var input=document.createElement(tag);
  input.setAttribute("type",atributeVal);
  input.setAttribute("placeholder",p_holder)
  input.setAttribute("name",unic)
  input.setAttribute("id",name)
  return input
}

function breakLine(tag){
  let br=document.createElement(tag);
  return br
}


btn.addEventListener("click",foo);
function foo(){
  let op1=document.getElementById("submit1").value;
  clicked.innerHTML=op1;
  let op2=document.getElementById("submit2").value;
  clicked1.innerHTML=op2;
  let op3=document.getElementById("submit3").value;
  clicked2.innerHTML=op3;
  let op4=document.getElementById("submit4").value;
  clicked3.innerHTML=op4;
  let op5=document.getElementById("submit5").value;
  clicked4.innerHTML=op5;
  let op6=document.getElementById("submit6").value;
  clicked5.innerHTML=op6;
  let op7=document.getElementById("submit7").value;
  clicked6.innerHTML=op7;
  let op8=document.getElementById("submit8").value;
  clicked7.innerHTML=op8;
  let op9=document.getElementById("submit9").value;
  clicked8.innerHTML=op9;
}


var h2=document.createElement("h2");
h2.innerHTML="Temporary Database";
document.body.append(h2)
 
var span1=spanEle("span","Name:");
var span2=spanEle("span","Lastname:")
var span3=spanEle("span","Address Line 1:")
var span4=spanEle("span","Address Line 2:")
var span5=spanEle("span","Pincode:")
var span6=spanEle("span","gender:")
var span7=spanEle("span","choice of food:")
var span8=spanEle("span","State:")
var span9=spanEle("span","Country:")

let div=document.createElement("div");
div.setAttribute("class","task")
var clicked=document.createElement("span");
var clicked1=document.createElement("span");
var clicked2=document.createElement("span");
var clicked3=document.createElement("span");
var clicked4=document.createElement("span");
var clicked5=document.createElement("span");
var clicked6=document.createElement("span");
var clicked7=document.createElement("span");
var clicked8=document.createElement("span");

div.append(span1,clicked,span2,clicked1,span3,clicked2,span4,clicked3,span5,clicked4,
  span6,clicked5,span7,clicked6,span8,clicked7,span9,clicked8)
document.body.append(div)

function spanEle(tagNm,content,content1){
  var span=document.createElement(tagNm);
  span.innerText=content;
  span.innerHTM=content1
  return span
}