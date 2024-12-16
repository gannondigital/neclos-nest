import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Figure, Prisma } from "@prisma/client";

@Injectable()
export class FigureService {
  constructor(private prisma: PrismaService) {}

  async getFigure(
    figureWhereUniqueInput: Prisma.FigureWhereUniqueInput,
  ): Promise<Figure | null> {
    return this.prisma.figure.findUnique({
      where: figureWhereUniqueInput,
    });
  }

  async getFigures(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FigureWhereUniqueInput;
    where?: Prisma.FigureWhereInput;
    orderBy?: Prisma.FigureOrderByWithRelationInput;
  }): Promise<Figure[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.figure.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFigure(data: Prisma.FigureCreateInput): Promise<Figure> {
    return this.prisma.figure.create({
      data,
    });
  }

  async updateFigure(params: {
    where: Prisma.FigureWhereUniqueInput;
    data: Prisma.FigureUpdateInput;
  }): Promise<Figure> {
    const { where, data } = params;
    return this.prisma.figure.update({
      data,
      where,
    });
  }

  // @todo soft delete
  async deleteFigure(where: Prisma.FigureWhereUniqueInput): Promise<Figure> {
    return this.prisma.figure.delete({
      where,
    });
  }
}
