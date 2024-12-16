import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";
import { UserService } from "./users/users.service";
import { FigureService } from "./figure.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, FigureService],
})
export class AppModule {}
