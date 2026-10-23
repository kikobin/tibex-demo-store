// Remediated teaching fixture TX-046. Never deploy.
import { logger, redact } from '../lib/demo-services';

export function logRequest(request: { headers: Record<string,string> }) {
  logger.info({ headers: redact(request.headers, ["authorization", "cookie"]) });
}
