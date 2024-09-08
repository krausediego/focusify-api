-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "status" SET DEFAULT true;
