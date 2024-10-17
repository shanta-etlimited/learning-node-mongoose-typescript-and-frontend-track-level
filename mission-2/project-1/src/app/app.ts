import express, { NextFunction, Request, Response } from "express"
const app = express()
const port = 3000

//parsers
app.use(express.json());
app.use(express.text());



//router
const userRouter = express.Router();
const courseRouter = express.Router();


app.use("/api/v1/users", userRouter)
app.use("/api/v1/courses", courseRouter)


userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is created successfully",
    data: user
  });
  
})


courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "Course is created successfully",
    data: course
  });
})


const logger = (req: Request, res: Response, next: NextFunction)=>{
  console.log(req.url, req.method, req.hostname);
  next();
}


app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
  try{
    res.send(something)
  }catch(err){
    next(err)
  }
})

app.post("/", logger, (req: Request, res: Response, next: NextFunction)=>{
  console.log(req.body);
  res.json({
    message: "successfully received data",
  })
})



app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
})

//global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if(err){
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    })
  }
})
export default app;