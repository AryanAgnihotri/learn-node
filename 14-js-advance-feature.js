

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('weather: 32 degree');
            resolve(200);
        },2000);

    });
}

(async function weatherData(){
    await api();
    console.log('weather is good');
})();



// async function greet(){
//     console.log('hello user');
// }

// const welcome = greet();
// console.log(welcome);

//------------------------------------------------------------------------------------

// function getData(dataID) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(`data fetch for ${dataID} id`);
//             res('success');
//         }, 2000);
//     });
// }


///////// ASYNC-AWAIT  //////////

// async function getDataAsync() {
//         await getData(123);
//         await getData(456);
//         await getData(789);
// }
// getDataAsync();

/////// PROMISE CHAINING /////////

// getData(123).then((res) => {
//     return getData(456);
// }).then((res) => {
//     return getData(789)
// }).then((res)=>{
//     console.log(res);
// })

///////  CALL BACK HELL //////////

// console.log('getting data 1');
// getData(123, () => {
//     console.log('getting data 2');
//     getData(456, () => {
//         console.log('gettong data 3');
//         getData(789);
//     });
// })

//-----------------------------------------------------------------------------------

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('test 1 - testing asynchronous nature');
//             resolve('test 1 - successful');
//         }, 3000);
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('test 2 - testing asynchronous nature');
//             resolve('test 2 - successful');
//         }, 3000);
//     })
// }

// console.log('started testing test 1...');


// const promise1 = asyncFunc1();


// promise1.then((res) => {
//     console.log(res);
//     console.log('started testing test 2...');
//     const promise2 = asyncFunc2();
//     promise2.then((res) => {
//         console.log(res);
//     })
// })

// let getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('this is a new promise');
//         resolve('order delivered succesfully');
//         // reject('order canncelled');

//     })
// };

// exports.getPromise = getPromise;

// function getData(dataID, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('data', dataID);
//             // resolve('success');
//             reject('error occured');
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     });
// }
// exports.getData=getData;


