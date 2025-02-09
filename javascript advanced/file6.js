//! promise, promise chaining, solving callback hell
/*  //* promise

const bucket = ['coffee', 'chips','vegetables','salt','rice'];

=> promise is created with new Promice() constructor class which is stored in a variable, so we can access the promise with its variable name
=> like in callback hell here also we deal with SuccessCallback and FailureCallback according to existance of element
but with different names called resolve and reject
=> new Promice constructor class will have a function in it having parameters resolve and reject
=> in that function using if else codition for element existance separate resolve and reject function
and call them there with some value or result.
=> in the 'if' block write whatever we want to change along with the resolve fxn.


todo how to create promise:
? const friedRicePromise = new Promise(
    (resolve,reject)=>{
        if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
?            resolve({value:"friedrice"});       // resolved fxn called with value {value:"friedrice"}
        }else{
?            reject("could not do it");          // reject fxn called with error msg
        }
    }
) 


=> now the value putted in resolve() and reject() fxn at the time of creation will be returned 
as parameter of callback fxns inside promise.then and promise.catch respectively
=> so inside promise.then and promise.catch in the callback fxns, we can access the retuned values of resolve() and reject()

todo how to use promise:
?    friedRicePromise.then(
        (myfriedRice)=>{                          
        console.log(myfriedRice); -> {value:"friedrice"}
        }
?    ).catch(
        (error)=>{
            console.log(error) -> could not do it
        }
     )


todo function returning promise:
    function ricePromise(){
        const bucket = ['coffee', 'chips','vegetables','salts','rice'];
?       return new Promise(
            (resolve,reject)=>{
                if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
                    resolve({value:"friedrice"});
                }else{
                    reject("could not do it");
                }
            }
        )
    }
=> now the promise can be used by its function name (here ricePromise)
=> here within ricePromise().then,  we can also give some arguments which will be passed as parameter to 
the ricePromice() fxn and can be used there accordingly to make changes.

ricePromise().then(
     (myfriedRice)=>{                          
     console.log(myfriedRice); -> {value:"friedrice"}
     }
 ).catch(
     (error)=>{
         console.log(error) -> could not do it
     }
 )

or
const returnedPromise = ricePromise();
returnedPromise.then(
    (myfriedRice)=>{
        console.log(myfriedRice); -> {value:"friedrice"}
        }
 ).catch(
     (error)=>{
         console.log(error) -> could not do it
     }
 )



todo if we want any delay in promise, use setTimeout fxn:
  function ricePromise(){
    const bucket = ['coffee', 'chips','vegetables','salts','rice'];
    return new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
                    resolve({value:"friedrice"});
                }else{
                    reject("could not do it");
                }
            }, 5000);
        }
    )
} 


* promise chain
=>if we want to chain promises, we can use promise.then() method like   .then().then().then().then() .....
=>every .then() returns a promise which is recieved by its consecutive .then() ... and this goes on

function myPromise(){
  return new Promise((resolve, reject)=>{
    resolve("foo");
  })
}

myPromise()
  .then((value)=>{
    console.log(value); -> foo
    value += "bar";
    return value
  })
  .then((value) =>{
    console.log(value); -> foobar
    value += "baaz";
    return value;
  })
  .then(value=>{
    console.log(value); -> foobarbaaz
  })


* solving callback hell using promise
todo the code of callback hell was...

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


todo now solving this using promise
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }

  we have to keep using the .then() on fxn again and again with new arguments till the last element

  changeText(heading1, "one", "red", 1000)
  .then(()=>{
   return changeText(heading2, "two", "purple", 1000)
    })
  .then(()=>{
   return changeText(heading3, "three", "green", 1000)
    })
  .then(()=>{
   return  changeText(heading4, "four", "orange", 1000)
    })
  .then(()=>{
   return  changeText(heading5, "four", "orange", 1000)
    })
  .then(()=>{
    return changeText(heading6, "four", "orange", 1000)
    })
  .then(()=>{
   return  changeText(heading7, "four", "orange", 1000)
    })
  .catch((error)=>{
      alert(error);
  })


















*/