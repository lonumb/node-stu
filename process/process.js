



process.on('beforeExit',code=>{
    console.log(process.exitCode);
    console.log('beforeExit',code);
    timer(5);
})

process.on('exit',code=>{
    console.log('exit',code);
    console.log('exit',code);
    console.log('exit',code);
    console.log('exit',code);
    console.log('exit',code);
    console.log('exit',code);
    console.log('exit',code);
})



console.log(process.cwd());

let setTime = null;
function timer(t){
    clearInterval(timer);

    if(t>0){
        setTime = setTimeout(function(){
            console.log(t);
            t--;
            timer(t);
        },1000);
    }
}

// process.exit();