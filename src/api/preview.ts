// Remediated teaching fixture TX-014. Never deploy.
import { previewSchema, safeRenderer } from '../lib/demo-services';

export function preview(input: { template: string; variables: Record<string,string> }) {
  const data = previewSchema.parse(input);
  return safeRenderer.render(data.template, data.variables);
}
