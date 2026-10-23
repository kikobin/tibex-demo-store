// Deliberately vulnerable teaching fixture TX-033. Never deploy.

export function renderComment(element: HTMLElement, comment: { body: string }) {
  element.innerHTML = comment.body;
}
