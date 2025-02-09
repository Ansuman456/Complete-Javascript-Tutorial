//! callback, callback hell
/*  //*callback
function myfunc2(){
    console.log("inside myfunc2")
 }
 function myfunc(callback){   here it is taking myfunc2 whole function as a argument
   ? console.log(callback) ->  ƒ myfunc2(){console.log("inside myfunc2")}
     callback(); 
 }
? myfunc(myfunc2);    // callingback function(calling B fxn using A fxn, bcoz B fxn is parameter of A fxn)
output:
ƒ myfunc2(){console.log("inside myfunc2")}
inside myfunc2


* callback hell
? HTML:
  <h1 class="heading1">Hello World</h1>
  <h1 class="heading2">Hello World</h1>
  <h1 class="heading3">Hello World</h1>
  <h1 class="heading4">Hello World</h1>
  <h1 class="heading5">Hello World</h1>
  <h1 class="heading6">Hello World</h1>
  <h1 class="heading7">Hello World</h1>


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


here i want to change each h1 tag to like one,two,three.....
and also change its color, but the twist is,one change must happen after a interval after completion 
of anothor change.   
?  nesting of setTimeout fxn will get us this. 

 Text       Delay   Color
 one        1s      Violet
 two        2s      purple
 three      2s      red
 four       1s      Pink
 five       2s      green
 six        3s      blue
 seven      1s      brown

 callback hell: 
 
 setTimeout(()=>{
   heading1.textContent = "one";
   heading1.style.color = "violet";

        setTimeout(()=>{
            heading2.textContent = "two";
            heading2.style.color = "purple";

                    setTimeout(()=>{
                    heading3.textContent = "three";
                    heading3.style.color = "red";

                        setTimeout(()=>{
                            heading4.textContent = "four";
                            heading4.style.color = "pink";

                                setTimeout(()=>{
                                heading5.textContent = "five";
                                heading5.style.color = "green";
                                },2000)      
                        },1000)    
                },2000)  
        },2000)
 },1000)



storing this in a function which will perform this...
onSuccessCallback: this means if element exist
onFailureCallback: this means if element doesnt exist

 function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                if(onSuccessCallback){
                    onSuccessCallback();
                }
            }
            else{
                if(onFailureCallback){
                    onFailureCallback();
                }
            }
    },time)
}

how to call this fxn?
? changeText(heading1, "one","violet",1000,()=>{on successful callback, call this fxn again with next element parameters},()=>{on failure callback print error})
keep nesting this function untill we reach the final element.
example:
pyramid of doom:-
changeText(heading1, "one","violet",1000,()=>{
    changeText(heading2, "two","purple",2000,()=>{
            changeText(heading3, "three","red",1000,()=>{
                changeText(heading4, "four","pink",1000,()=>{
                        changeText(heading5, "five","green",2000,()=>{
                            changeText(heading6, "six","blue",1000,()=>{
                                    changeText(heading7, "seven","brown",1000,()=>{
                                    
                                    },()=>{console.log("Heading7 does not exist")})
                            },()=>{console.log("Heading6 does not exist")})
                        },()=>{console.log("Heading5 does not exist")})
                },()=>{console.log("Heading4 does not exist")})
            },()=>{console.log("Heading3 does not exist")})
    },()=>{console.log("Heading2 does not exist")})
},()=>{console.log("Heading1 does not exist")})





*/