import { Injectable } from "@nestjs/common";
import { UserInterface } from "./interface/user.interface";
import {InjectModel,} from '@nestjs/mongoose';
import { User, UserDocument } from "./user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()

export class UserService{
    constructor(@InjectModel(User.name) private readonly userModel:Model <UserDocument>){}
    private readonly users: UserInterface[] = [];

    async getAll():Promise<UserDocument [] > {
        return this.userModel.find().exec();
    }

    async create(createUsetDto: CreateUserDto): Promise<UserDocument> {
        console.log("createUsetDto2",createUsetDto)
        const user = new this.userModel(createUsetDto);
        return user.save();
    }

    async update(id:string, updateUserDto: CreateUserDto):Promise<UserDocument []> {
        return this.userModel.findByIdAndUpdate(id,updateUserDto)
    }

    async delete(id:string) {
        return this.userModel.findByIdAndDelete(id);
    }

    
}