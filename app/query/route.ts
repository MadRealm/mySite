import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

async function testGPT() {
  const data = await sql`
    SELECT extname, extnamespace::regnamespace FROM pg_extension WHERE extname = 'uuid-ossp';
  `;
}
export async function GET() {

  try {
    return Response.json(await testGPT());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
