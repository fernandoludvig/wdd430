import { db } from '@vercel/postgres';
import { customers, invoicesWithIds, revenue } from '../lib/placeholder-data';
import bcrypt from 'bcrypt';

export async function GET() {
  try {
    const client = await db.connect();

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      )
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS invoices (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        customer_id UUID NOT NULL,
        amount INT NOT NULL,
        status VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      )
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      )
    `;

    const hashedPassword = await bcrypt.hash('123456', 10);
    await client.sql`
      INSERT INTO users (id, name, email, password)
      VALUES ('3958dc9e-712f-4377-85e9-fec4b6a6442a', 'User', 'user@nextmail.com', ${hashedPassword})
      ON CONFLICT (id) DO NOTHING;
    `;

    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    const insertedInvoices = await Promise.all(
      invoicesWithIds.map(
        (invoice) => client.sql`
        INSERT INTO invoices (id, customer_id, amount, status, date)
        VALUES (${invoice.id}, ${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    return Response.json({ insertedCustomers, insertedInvoices, insertedRevenue });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

