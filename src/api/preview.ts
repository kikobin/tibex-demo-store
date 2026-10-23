// Deliberately vulnerable teaching fixture TX-014. Never deploy.
import { previewSchema, safeRenderer } from '../lib/demo-services';

export function preview(input: { template: string; variables: Record<string,string> }) {
  const render = new Function("return " + input.template);
  return render();
}
