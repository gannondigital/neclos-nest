-- CreateEnum
CREATE TYPE "FigureGroupType" AS ENUM ('CHARACTERS', 'LEVEL', 'CHAPTER', 'AREA', 'VILLAIN');

-- CreateEnum
CREATE TYPE "FigureAccessoryType" AS ENUM ('ACCESSORY', 'COMPANION', 'GEM');

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Figure" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "groupId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "figureCardId" INTEGER NOT NULL,
    "itemCardIds" INTEGER[],

    CONSTRAINT "Figure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FigureGroup" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "FigureGroupType" NOT NULL,
    "partId" INTEGER NOT NULL,
    "figureIds" INTEGER[],

    CONSTRAINT "FigureGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FigureCard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "figureId" INTEGER NOT NULL,

    CONSTRAINT "FigureCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "figureId" INTEGER NOT NULL,

    CONSTRAINT "ItemCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FigureAccessory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "FigureAccessoryType" NOT NULL,
    "figureId" INTEGER NOT NULL,

    CONSTRAINT "FigureAccessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectedFigure" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "figureId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CollectedFigure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectedFigureAccessory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accessoryId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CollectedFigureAccessory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Figure_figureCardId_key" ON "Figure"("figureCardId");

-- CreateIndex
CREATE UNIQUE INDEX "FigureCard_figureId_key" ON "FigureCard"("figureId");

-- AddForeignKey
ALTER TABLE "Figure" ADD CONSTRAINT "Figure_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "FigureGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FigureGroup" ADD CONSTRAINT "FigureGroup_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FigureCard" ADD CONSTRAINT "FigureCard_figureId_fkey" FOREIGN KEY ("figureId") REFERENCES "Figure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCard" ADD CONSTRAINT "ItemCard_figureId_fkey" FOREIGN KEY ("figureId") REFERENCES "Figure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FigureAccessory" ADD CONSTRAINT "FigureAccessory_figureId_fkey" FOREIGN KEY ("figureId") REFERENCES "Figure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectedFigure" ADD CONSTRAINT "CollectedFigure_figureId_fkey" FOREIGN KEY ("figureId") REFERENCES "Figure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectedFigure" ADD CONSTRAINT "CollectedFigure_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectedFigureAccessory" ADD CONSTRAINT "CollectedFigureAccessory_accessoryId_fkey" FOREIGN KEY ("accessoryId") REFERENCES "FigureAccessory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectedFigureAccessory" ADD CONSTRAINT "CollectedFigureAccessory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
