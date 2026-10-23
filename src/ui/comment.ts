// Remediated teaching fixture TX-033. Never deploy.

export function renderComment(element: HTMLElement, comment: { body: string }) {
  element.textContent = comment.body;
}
