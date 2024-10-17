{
    //union types---> |
    type FrontendDeveloper  = 'Angular' | 'React' | 'Vue';// this is string literal type
    const frontendDeveloper: FrontendDeveloper = 'React';

    //intersection types---> &

    type JuniorFrontendDeveloper  = {
        skills: string[],
        designation1: "Junior Frontend Developer"
    }
    type JuniorBackendDeveloper  = {
        skills: string[],
        designation2: "Junior Backend Developer"
    }

   type FullStackDeveloper= JuniorFrontendDeveloper & JuniorBackendDeveloper;

   const fullStackDeveloper : FullStackDeveloper = {
       skills: ['html', 'css', 'js', 'express'],
       designation1: 'Junior Frontend Developer',
       designation2: 'Junior Backend Developer'
   }
   console.log(fullStackDeveloper);
   
    
}