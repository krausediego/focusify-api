-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "tags" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;
