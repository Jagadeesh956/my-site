// ─────────────────────────────────────────────────────────────────────────────
//  OBSIDIAN VAULT CONFIG
//
//  TWO MODES — same config file handles both:
//
//  LOCAL DEV  (npm run dev / npm run sync-blogs on your Mac):
//    Reads directly from your iCloud-synced vault on disk.
//    No internet needed. Instant.
//
//  CI / CLOUDFLARE BUILD  (when env var CI=true):
//    Clones vaultRepoUrl from GitHub (shallow, blogs folder only).
//    Blog posts never live in the website repo.
//
//  SETUP STEPS:
//    1. Push your Obsidian vault to GitHub (can be private).
//       e.g.  github.com/Jagadeesh956/obsidian-vault
//    2. Set vaultRepoUrl below to that repo URL.
//    3. If the vault repo is PRIVATE, add a GitHub Personal Access Token:
//       Cloudflare Pages → Settings → Environment Variables
//         VAULT_REPO_TOKEN = ghp_xxxxxxxxxxxxxxxxxxxx
//    4. Install Obsidian Git plugin → auto-commit interval → points to vault repo.
//    5. Add a Cloudflare deploy hook (see scripts/trigger-cloudflare.yml).
//
// ─────────────────────────────────────────────────────────────────────────────

module.exports = {
  // ── CI mode (Cloudflare / GitHub Actions) ──────────────────────────────────
  // GitHub repo where your Obsidian vault lives.
  // Set this to your vault repo URL (public or private).
  vaultRepoUrl: 'https://github.com/Jagadeesh956/obsidian-vault',

  // ── Local dev mode ─────────────────────────────────────────────────────────
  // Path to your vault on your Mac (iCloud-synced).
  // Used when CI env var is NOT set.
  localVaultPath: '/Users/jagadeesh/Library/Mobile Documents/iCloud~md~obsidian/Documents/self_learning',

  // ── Shared ─────────────────────────────────────────────────────────────────
  // Name of the folder inside your vault that contains blog posts.
  blogFolder: 'blogs',
};
