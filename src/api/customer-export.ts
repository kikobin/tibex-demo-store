// Remediated teaching fixture TX-021. Never deploy.
import { db, requirePermission } from '../lib/demo-services';

export function customerExport(query: { companyId: string }, session: { companyId: string; permissions: string[] }) {
  requirePermission(session, "customers:export");
  return db.customers.findMany({ companyId: session.companyId });
}
