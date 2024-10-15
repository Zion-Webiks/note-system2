import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NoteModule } from './note/note.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    UserModule, 
    AuthModule, 
    NoteModule],
})
export class AppModule {}
