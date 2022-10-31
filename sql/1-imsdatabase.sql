CREATE TABLE "internshipType" (
    "id" SMALLSERIAL PRIMARY KEY,
    "type" varchar(8) NOT NULL
);

CREATE TABLE "managerType" (
    "id" SMALLSERIAL PRIMARY KEY,
    "type" varchar(8) NOT NULL
);

CREATE TABLE "department" (
  "id" SMALLSERIAL PRIMARY KEY NOT NULL,
  "facultyId" smallint NOT NULL,
  "name" varchar(50) UNIQUE NOT NULL
);
CREATE TABLE "user" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "departmentId" smallint NOT NULL REFERENCES "department" ("id"),
  "firstName" varchar(50) NOT NULL,
  "lastName" varchar(50) NOT NULL,
  "password" varchar(32) NOT NULL,
  "email" varchar(50) UNIQUE NOT NULL,
  "telephone" varchar(12) UNIQUE NOT NULL,
  "TC" varchar(11) UNIQUE NOT NULL,
  "lastLogin" date
);

CREATE TABLE "teacher" (
  "userId" bigint PRIMARY KEY UNIQUE NOT NULL REFERENCES "user" ("id"),
  "registrationNumber" varchar(4) UNIQUE NOT NULL
);

CREATE TABLE "student" (
  "userId" bigint PRIMARY KEY UNIQUE NOT NULL REFERENCES "user" ("id"),
  "studentNumber" varchar(9) UNIQUE NOT NULL
);

CREATE TABLE "faculty" (
  "id" SMALLSERIAL PRIMARY KEY NOT NULL,
  "name" varchar(50) UNIQUE NOT NULL
);


CREATE TABLE "city" (
  "id" smallserial PRIMARY KEY NOT NULL,
  "name" varchar(50) UNIQUE NOT NULL
);

CREATE TABLE "district" (
  "id" serial PRIMARY KEY NOT NULL,
  "cityId" smallint NOT NULL REFERENCES "city" ("id"),
  "name" varchar(50) NOT NULL
);

CREATE TABLE "addresses" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "districtId" int NOT NULL,
  "addressInfo" varchar(300) NOT NULL
);

CREATE TABLE "internship" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "addressId" bigint NOT NULL,
  "startingDate" date NOT NULL,
  "endingDate" date,
  "workDay" int NOT NULL,
  "internshipType" smallint NOT NULL REFERENCES "internshipType" ("id"),
  "sgk" boolean NOT NULL,
  "25age" boolean NOT NULL,
  "gss" boolean NOT NULL,
  "stateContribution" boolean NOT NULL,
  "autumnPeriod" boolean NOT NULL,
  "manager" smallint NOT NULL REFERENCES "managerType" ("id")
);

CREATE TABLE "studentInternship" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "studentId" bigint NOT NULL REFERENCES "student" ("userId"),
  "internId" bigint NOT NULL
);

CREATE TABLE "IME" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "internshipId" bigint NOT NULL,
  "IBAN" varchar(26) NOT NULL
);

CREATE TABLE "company" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "formalName" varchar(150) UNIQUE NOT NULL,
  "addressId" bigint NOT NULL,
  "telephone" varchar(12) UNIQUE NOT NULL,
  "fax" varchar(13) UNIQUE,
  "email" varchar(50) UNIQUE NOT NULL
);

CREATE TABLE "fieldOfActivity" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar(50) UNIQUE NOT NULL
);

CREATE TABLE "companyField" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "companyId" bigint NOT NULL,
  "fieldId" int NOT NULL REFERENCES "fieldOfActivity" ("id")
);

CREATE TABLE "admin" (
  "id" SMALLSERIAL PRIMARY KEY NOT NULL,
  "userId" bigint NOT NULL REFERENCES "user" ("id"),
  "superAdmin" boolean NOT NULL
);

CREATE TABLE "commission" (
  "id" SMALLSERIAL PRIMARY KEY NOT NULL,
  "teacherId" bigint NOT NULL REFERENCES "teacher" ("userId")
);

CREATE TABLE "internshipDocControl" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "internshipId" bigint NOT NULL,
  "internshipsBookPath" varchar(200) NOT NULL,
  "evulationFormPath" varchar(200) NOT NULL,
  "accepted" boolean
);

CREATE TABLE "internshipExam" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "internshipId" bigint NOT NULL,
  "teacherId" bigint NOT NULL REFERENCES "teacher" ("userId"),
  "examTime" date NOT NULL,
  "passed" boolean,
  "acceptedWorkDay" smallint NOT NULL
);

CREATE TABLE "internshipControlInfo" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "internshipId" bigint NOT NULL,
  "infoMessage" varchar(500) NOT NULL
);

CREATE TABLE "announcement" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "title" varchar(100) NOT NULL,
  "content" varchar(1000) NOT NULL,
  "date" date NOT NULL
);

CREATE INDEX "internshipDocStatus" ON "internshipDocControl" ("internshipId", "accepted");

CREATE INDEX "internshipStatus" ON "internshipExam" ("internshipId", "acceptedWorkDay");

ALTER TABLE "department" ADD FOREIGN KEY ("facultyId") REFERENCES "faculty" ("id");


ALTER TABLE "addresses" ADD FOREIGN KEY ("districtId") REFERENCES "district" ("id");

ALTER TABLE "internship" ADD FOREIGN KEY ("addressId") REFERENCES "addresses" ("id");


ALTER TABLE "studentInternship" ADD FOREIGN KEY ("internId") REFERENCES "internship" ("id");

ALTER TABLE "IME" ADD FOREIGN KEY ("internshipId") REFERENCES "internship" ("id");

ALTER TABLE "company" ADD FOREIGN KEY ("addressId") REFERENCES "addresses" ("id");

ALTER TABLE "companyField" ADD FOREIGN KEY ("companyId") REFERENCES "company" ("id");



ALTER TABLE "internshipDocControl" ADD FOREIGN KEY ("internshipId") REFERENCES "internship" ("id");

ALTER TABLE "internshipExam" ADD FOREIGN KEY ("internshipId") REFERENCES "internship" ("id");


ALTER TABLE "internshipControlInfo" ADD FOREIGN KEY ("internshipId") REFERENCES "internship" ("id");

CREATE VIEW "acceptedWorkDayFromUserId" AS 
  SELECT  "user"."id",
          "internship"."internshipType",
          "internshipExam"."acceptedWorkDay"
  FROM "user" 
    JOIN "studentInternship" ON "studentInternship"."studentId" = "user"."id"
    JOIN "internship" ON "internship"."id" = "studentInternship"."internId"
    JOIN "internshipExam" ON "internshipExam"."internshipId" = "internship"."id";