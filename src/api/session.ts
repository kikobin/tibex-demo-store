// Remediated teaching fixture TX-052. Never deploy.

export function setSession(response: { cookie: (name: string, value: string, options?: unknown) => void }, token: string) {
  response.cookie("session", token, { secure: true, httpOnly: true, sameSite: "lax" });
}
