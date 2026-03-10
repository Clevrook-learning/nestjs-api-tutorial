import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "generated/prisma";

@Injectable({})
export class AuthService {

    signUp(){
        return { message: `I have signed up`}
    }

    signIn(){
        return {message: `I have signed in`}
    }
}