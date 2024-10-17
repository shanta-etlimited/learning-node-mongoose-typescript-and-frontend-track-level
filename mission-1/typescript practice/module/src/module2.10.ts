{

    //mapped --> one type replace to another type
    
    type AreaNumber ={
        height : number
        width : number
    }
    type AreaString ={
        [key in "Height" | "width"] : string
    }
    type AreaString2 ={
        [key in keyof AreaNumber] : boolean
    }

    type  Height = AreaNumber["height"]; //look up type
    
    type AreaString3<T> ={
        [key in keyof T] :  T[key]
    }
    const area1 : AreaString3<{height : string, width : number}> = {
        height : "100",
        width : 20
    }
}