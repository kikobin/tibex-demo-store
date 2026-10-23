// Remediated teaching fixture TX-041. Never deploy.
import { logger } from '../lib/demo-services';

export function handleError(response: { json: (value: unknown) => unknown }, error: Error, requestId: string) {
  logger.error({ error, requestId });
  return response.json({ error: "internal_error", requestId });
}
