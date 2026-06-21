#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
#  setup-symlink.sh  —  run this ONCE to link your Obsidian vault's blogs/
#  folder into this project's content/blogs/ directory.
#
#  After this, anything you write in Obsidian → blogs/ folder will
#  automatically appear in the website when you run  npm run sync-blogs.
#
#  Run:  bash scripts/setup-symlink.sh
# ─────────────────────────────────────────────────────────────────────────────

VAULT_BLOGS="$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/self_learning/blogs"
CONTENT_BLOGS="$(cd "$(dirname "$0")/.." && pwd)/content/blogs"

echo "Vault blogs folder : $VAULT_BLOGS"
echo "Website content dir: $CONTENT_BLOGS"

# Check vault path exists
if [ ! -d "$VAULT_BLOGS" ]; then
  echo ""
  echo "ERROR: Obsidian blogs folder not found at:"
  echo "  $VAULT_BLOGS"
  echo ""
  echo "Make sure:"
  echo "  1. Your vault is named 'self_learning'"
  echo "  2. iCloud has synced the vault to your Mac"
  echo "  3. You have a 'blogs' folder inside your vault"
  exit 1
fi

# Remove the placeholder content/blogs directory and replace with symlink
if [ -L "$CONTENT_BLOGS" ]; then
  echo "Symlink already exists. Removing and recreating..."
  rm "$CONTENT_BLOGS"
elif [ -d "$CONTENT_BLOGS" ]; then
  echo ""
  echo "Moving existing content/blogs/ files into your vault first..."
  # Copy any existing .md files into the vault
  find "$CONTENT_BLOGS" -name "*.md" -exec cp {} "$VAULT_BLOGS/" \;
  rm -rf "$CONTENT_BLOGS"
fi

ln -s "$VAULT_BLOGS" "$CONTENT_BLOGS"

echo ""
echo "✓ Symlink created:"
echo "  content/blogs/ → $VAULT_BLOGS"
echo ""
echo "Next steps:"
echo "  1. Write posts in Obsidian inside the 'blogs' folder"
echo "  2. Run: npm run sync-blogs"
echo "  3. Run: npm start"
echo ""
echo "For auto-publishing: push this repo to GitHub and connect Vercel or Netlify."
