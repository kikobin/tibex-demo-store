// Deliberately vulnerable teaching fixture TX-021. Never deploy.
import { db, requirePermission } from '../lib/demo-services';

export function customerExport(query: { companyId: string }, session: { companyId: string; permissions: string[] }) {
  return db.customers.findMany({ companyId: query.companyId });
}
