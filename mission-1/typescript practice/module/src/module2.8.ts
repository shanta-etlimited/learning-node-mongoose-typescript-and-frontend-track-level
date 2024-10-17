{
    //asynchronous typescript
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data :string = "Something";
            if(data){
                resolve(data)
            }
            else{
                reject("Failed to load data")
            }
        })
    }

   const showData = async(): Promise<string> => {
       const data: string = await createPromise();
       return data
   }
   showData();

   // json data

   type ToDo ={
    userId: number;
    id: number;
    title: string;
    completed: boolean
   }
   const getToDo = async(): Promise<ToDo>=>{
    const response =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json();
    return data
   }
   getToDo();
}