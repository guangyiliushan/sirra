/// <reference types="astro/client" />

declare module 'virtual:starlight/pagefind-config' {
  const pagefindUserConfig: Record<string, unknown>;
  export { pagefindUserConfig };
}
