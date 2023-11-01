    import { Body, Controller, Delete, Get,Param,Post, Put,UsePipes, ValidationPipe } from "@nestjs/common";
    import { UserService } from "./user.service";
    import { CreateUserDto } from "./dto/create-user.dto";
    import { UserDocument } from "./user.schema";
    

    @Controller('user')
    export class UserController{
        constructor(private userService: UserService) { }
        
        @Get()
        getAll(){
            return this.userService.getAll();
        }
                
        @Post()
        @UsePipes(new ValidationPipe())
        create(@Body() createUsetDto: CreateUserDto) {
            console.log("createUsetDto1",createUsetDto)
            return this.userService.create(createUsetDto);
        }

        @Put(':id')
        update(@Param('id') id:string, @Body() updateUserDto: CreateUserDto) {
            return this.userService.update(id, updateUserDto)
        }

        @Delete(':id')
        delete(@Param('id') id: string) {
            return this.userService.delete(id);
         }

    }