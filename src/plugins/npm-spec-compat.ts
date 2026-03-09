const LEGACY_PLUGIN_NPM_SPEC_ALIASES: Readonly<Record<string, string>> = {
  "@openclaw/feishu-cn": "@openclaw/feishu",
};

export function resolveCompatiblePluginNpmSpec(spec: string): string {
  const trimmed = spec.trim();
  return LEGACY_PLUGIN_NPM_SPEC_ALIASES[trimmed] ?? trimmed;
}
