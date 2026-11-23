import { Module } from '@nestjs/common';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma.module.js';
import { UsersService } from './users/users.service.js';
import { FigureService } from './figures/figure.service.js';
import { FiguresController } from './figures/figures.controller.js';
import { UsersController } from './users/users.controller.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule],
  controllers: [UsersController, FiguresController],
  providers: [AppService, UsersService, FigureService],
})
export class AppModule {}
