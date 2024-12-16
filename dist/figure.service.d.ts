import { PrismaService } from "./prisma.service";
import { Figure, Prisma } from "@prisma/client";
export declare class FigureService {
  private prisma;
  constructor(prisma: PrismaService);
  getFigure(
    figureWhereUniqueInput: Prisma.FigureWhereUniqueInput,
  ): Promise<Figure | null>;
  getFigures(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FigureWhereUniqueInput;
    where?: Prisma.FigureWhereInput;
    orderBy?: Prisma.FigureOrderByWithRelationInput;
  }): Promise<Figure[]>;
  createFigure(data: Prisma.FigureCreateInput): Promise<Figure>;
  updateFigure(params: {
    where: Prisma.FigureWhereUniqueInput;
    data: Prisma.FigureUpdateInput;
  }): Promise<Figure>;
  deleteFigure(where: Prisma.FigureWhereUniqueInput): Promise<Figure>;
}
