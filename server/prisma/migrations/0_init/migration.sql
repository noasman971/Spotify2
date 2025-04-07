-- CreateTable
CREATE TABLE "Users" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR,
    "email" VARCHAR,
    "password" VARCHAR,
    "isAdmin" BOOLEAN,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

