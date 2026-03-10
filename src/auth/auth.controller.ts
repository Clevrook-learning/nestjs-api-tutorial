import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import type { Request } from "express";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    signUp(@Body() dto: any) {
        console.log({
            dto,
        });
        
        return this.authService.signUp();
    }

    @Post("signin")
    signIn() {
        return this.authService.signIn();
    }
}
