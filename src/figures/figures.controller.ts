import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FigureService } from './figure.service.js';
import { Figure as FigureModel, Prisma  } from '../../generated/prisma/client.js';

@Controller('figures')
export class FiguresController {
  constructor(private readonly figureService: FigureService) {}

  @Get()
  async getFigures() {
    // TODO
  }

  @Get('/:id')
  async getFigureById(@Param('id') id: string): Promise<FigureModel|null> {
    return this.figureService.getFigure({ id });
  }

  @Post()
  async createFigure( @Body() figureData: Prisma.FigureCreateInput): Promise<FigureModel> {
    return this.figureService.createFigure(figureData);
  }

  @Put('/:id')
  async updateFigure(
    @Param('id') id: string,
    @Body() figureData: Prisma.FigureUpdateInput,
  ): Promise<FigureModel> {
    return this.figureService.updateFigure({
      where: {
        id,
      },
      data: figureData,
    });
  }

  @Delete('/:id')
  async deleteFigure(@Param('id') id: string): Promise<FigureModel|null> {
    const figureToDelete = await this.figureService.getFigure({ id });
    await this.figureService.deleteFigure({
      id,
    });
    return figureToDelete;
  }
}
