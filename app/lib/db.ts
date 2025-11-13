import { db as vercelDb, sql as vercelSql } from '@vercel/postgres';

if (typeof process !== 'undefined') {
  if (process.env.STORAGE_POSTGRES_URL && !process.env.POSTGRES_URL) {
    process.env.POSTGRES_URL = process.env.STORAGE_POSTGRES_URL;
  }
  if (process.env.STORAGE_POSTGRES_PRISMA_URL && !process.env.POSTGRES_PRISMA_URL) {
    process.env.POSTGRES_PRISMA_URL = process.env.STORAGE_POSTGRES_PRISMA_URL;
  }
  if (process.env.STORAGE_POSTGRES_URL_NON_POOLING && !process.env.POSTGRES_URL_NON_POOLING) {
    process.env.POSTGRES_URL_NON_POOLING = process.env.STORAGE_POSTGRES_URL_NON_POOLING;
  }
  if (process.env.STORAGE_POSTGRES_URL_NO_SSL && !process.env.POSTGRES_URL_NO_SSL) {
    process.env.POSTGRES_URL_NO_SSL = process.env.STORAGE_POSTGRES_URL_NO_SSL;
  }
}

export const db = vercelDb;
export const sql = vercelSql;

