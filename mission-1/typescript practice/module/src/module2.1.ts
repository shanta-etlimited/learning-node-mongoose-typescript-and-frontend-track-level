{
    // type assertion--> if we know the type of variable rather than typescipt then we can use type assertion

    let anything : any;
    anything= "Next Level Web Development";

    (anything as string).toUpperCase();


    
    type CustomError = {
        message: string
    }
    try{
        anything.toUpperCase();
    }catch(err){
        console.log((err as CustomError).message)
    }


}