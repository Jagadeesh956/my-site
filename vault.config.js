// ─────────────────────────────────────────────────────────────────────────────
//  OBSIDIAN → WEBSITE PUBLISHING CONFIG
//
//  HOW IT WORKS (full automatic pipeline):
//
//  1. You write posts in Obsidian inside the "blogs" folder of your vault.
//  2. iCloud syncs those files to your Mac (and all your Apple devices).
//  3. A one-time symlink (run scripts/setup-symlink.sh) connects your
//     Obsidian vault's blogs/ folder to content/blogs/ in this repo.
//  4. When you run  git add . && git commit && git push  (or the Obsidian
//     Git plugin does it automatically), GitHub Actions fires.
//  5. The Action runs  npm run sync-blogs  →  npm run build  and deploys
//     to Vercel/Netlify — your website updates with zero manual steps.
//
//  FOR LOCAL DEVELOPMENT:
//    npm run dev        →  syncs from content/blogs/ then starts the app
//    npm run sync-blogs →  manually re-sync anytime
//
// ─────────────────────────────────────────────────────────────────────────────

const path = require('path');

module.exports = {
  // Blog posts live in content/blogs/ inside this repo.
  // A symlink connects this to your Obsidian vault's blogs/ folder.
  // Run:  bash scripts/setup-symlink.sh   (one time only)
  vaultPath: path.resolve(__dirname, 'content'),

  blogFolder: 'blogs',
};
