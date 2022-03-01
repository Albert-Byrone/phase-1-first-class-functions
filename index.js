function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function fnName(){
        console.log("Named function")
    }
}

function returnsAnAnonymousFunction(){
    return ()=> console.log("Anonymous function")
}