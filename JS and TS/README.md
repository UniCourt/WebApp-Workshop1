# JavaScript

## Open Javascript Compiler

https://www.programiz.com/javascript/online-compiler/

## Promises

```
const myPromise = new Promise((resolve,reject)=>{
    resolve("hello World");
})

myPromise.then((res)=>{
    console.log(res);
})

```

## Async/Await

```
async function returnPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Promise executing');
            resolve("World");
        },3000)
    });
}

async function executeFunction(){
    var newData = "Hello";
    var getPromise = await returnPromise();
    console.log(newData);
    console.log(getPromise);
}

executeFunction();
```

# Typescript

## Open Typescript Compiler

https://www.typescriptlang.org/play?#code/Q

## Custom Types

```
type Person = {
    firstName : string;
    lastName: string;
    id: number;
}

function printPerson(person : Person){
    console.log(person);
}

const person : Person = {
    firstName : 'Arun',
    lastName: 'Kenjila',
    id:12
}

printPerson(person);

```

## Generics

```
function printMyData<T>(value : T) {
    console.log(value);
}

printMyData("This is string");
printMyData(123456);
printMyData(true);
```
