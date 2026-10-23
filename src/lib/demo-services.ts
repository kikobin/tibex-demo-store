// In-memory teaching stubs. This repository does not start a server.
export const db = { query: (_query: string, _params?: unknown[]) => [], customers: { findMany: (_query: unknown) => [] } };
export const logger = { info: (_value: unknown) => {}, error: (_value: unknown) => {} };
export function requirePermission(session: { permissions: string[] }, permission: string) { if (!session.permissions.includes(permission)) throw new Error('forbidden'); }
export function redact(headers: Record<string,string>, fields: string[]) { return Object.fromEntries(Object.entries(headers).map(([key,value])=>[key, fields.includes(key.toLowerCase())?'[REDACTED]':value])); }
export const previewSchema = { parse(input: { template: string; variables: Record<string,string> }) { return input; } };
export const safeRenderer = { render(template: string, variables: Record<string,string>) { return template.replace(/\{\{([a-zA-Z_]+)\}\}/g, (_match,key) => variables[key] || ''); } };
