import { IsString, IsEmail, MinLength } from 'class-validator'

export class CreateUserDto {
    @IsString()
    username: string

    @IsString()
    @MinLength(6, { message:"password is to shot must be at leat 6 charecters"})
    password: string

    @IsEmail({}, {message: "Invalid email format"})
    email: string
}
