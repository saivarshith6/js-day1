

function demo(){
    console.log("No. are printed!");
}

//asynchous function
//two metodhs
//1) settimeout(cbf,dalay-time)
//2) setinterval(cbf,dalay-time)
//present in the windows object

// function nodemo(m,n){
//     setTimeout(()=>{
//         for(let i=m;i<=n;i++){
//             console.log(i);
//         }
//     },5000)
// }
// window.setInterval(()=>{
//     console.log("No. are intervell!");
// },2000)
// console.log(nodemo(1,10));

//promise
//--> it is a object that may produce a single value some time in the future
//--> it is used to handle asyncronous operations
//--> it has three states
//1) pending
//2) fulfilled//resolved .then(cbf)
//3) rejected .catch(cbf)

//syntax

// let promise = new Promise((resolve,reject)=>{
//
// });
//.then(cbf)
//.catch(cbf)

let online= window.navigator.onLine
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(online===true){
            return resolve()
        }else{
            return reject()
        }
    },1000)
})
.then(()=>
    console.log("online")
)
.catch(()=>
    console.log("offline")
)
function main(m,n){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(m) || isNaN(n)){
                return reject();
            }else{
                for(let i=m;i<=n;i++){
                    console.log(i);
                }
                return resolve()
            }
        },2000)
    })
    .then(()=>{console.log("Promiss is resoled")})
    .then(()=>{console.log("double promise")})
    .catch(()=>{
        console.log("Something went wrong !!!");
    })
}
main(1,10)
main(1,'10a')

//promise chining 
//using multiple then methods