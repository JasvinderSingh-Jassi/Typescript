function Hello() {

    for(var i=0;i<5;i++)
    {
        console.log("Hello Everyone"+i);
    }
    console.log("Goodbye Hello(outside block)"+i);
}

Hello();