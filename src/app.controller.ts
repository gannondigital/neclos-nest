import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users/users.service";
import { FigureService } from "./figure.service";
import { User as UserModel, Figure as FigureModel } from "@prisma/client";

@Controller()
export class AppController {
  constructor(
    private readonly userService: UsersService,
    private readonly figureService: FigureService,
  ) {}

  /* FIGURE */
  @Get("figure/:id")
  async getFigureById(@Param("id") id: string): Promise<FigureModel> {
    return this.figureService.getFigure({ id });
  }

  @Post("figure")
  async createFigure(@Body() figureData): Promise<FigureModel> {
    return this.figureService.createFigure(figureData);
  }

  @Put("figure/:id")
  async updateFigure(
    @Param("id") id: string,
    @Body() figureData,
  ): Promise<FigureModel> {
    return this.figureService.updateFigure({
      where: {
        id,
      },
      data: figureData,
    });
  }

  @Delete("figure/:id")
  async deleteFigure(@Param("id") id: string): Promise<FigureModel> {
    const figureToDelete = await this.figureService.getFigure({ id });
    await this.figureService.deleteFigure({
      id,
    });
    return figureToDelete;
  }

  /* USER */
  @Post("user")
  async createUser(
    @Body() userData: { name?: string; email: string; username: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
