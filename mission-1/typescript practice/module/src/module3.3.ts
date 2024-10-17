{
    //type guard using typeof 
    const add = (param1:  string | number, param2: string| number):string | number=>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2
        }
        else{
           return param1.toString() + param2.toString()
        }

    }
    const result = add(2, "5");
    console.log(result);

    //type guard using in
    type NormalUser = {
        name:string
    }
    type AdminUser = {
        name:string,
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser) =>{
        if("role" in user){
             console.log(`My name is ${user.name} and my role is ${user.role}`)
        }
        else{
            console.log(`My name is ${user.name}`)
        }
    } 
    
    const normalUser: NormalUser = {
        name: 'Mr x'
    }
    const adminUser: AdminUser = {
        name: "Mr admin",
        role: "admin"
    }
    getUser(normalUser);
    getUser(adminUser);

    
}