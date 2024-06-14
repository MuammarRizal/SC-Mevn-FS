// membuat gelper prisma client
// Prisma client digunakan untuk mempermudah kita dalam query ke dalam database, karena kita akan memanggil method method yang sudah disediakan

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.export = prisma;
