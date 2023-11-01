import { IsString, IsInt } from "class-validator";
import { UserInterface } from "../interface/user.interface";
export class CreateUserDto extends UserInterface {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsInt()
    age: number;
}