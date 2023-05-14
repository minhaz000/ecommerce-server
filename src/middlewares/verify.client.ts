import { NextFunction, Request, Response } from "express";

export const verifyClient = (req:Request , res:Response , next:NextFunction)=>{

  if(req.headers.origin) { 
    console.log(req.headers.origin);
  }
  next()

}