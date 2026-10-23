// Deliberately vulnerable teaching fixture TX-028. Never deploy.
import { db } from '../lib/demo-services';

export function searchOrders(query: { q: string }, session: { companyId: string }) {
  return db.query(`SELECT * FROM orders WHERE name = '${query.q}'`);
}
