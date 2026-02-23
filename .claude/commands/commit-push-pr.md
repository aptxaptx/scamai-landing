Create a commit, push, and open a PR for the current changes.

First, gather context:
- Run `git status` to see changed files
- Run `git diff --staged` and `git diff` to see all changes
- Run `git log --oneline -5` for recent commit style

Then:
1. Stage the relevant changed files (not .env.local or other secrets)
2. Write a concise commit message matching the repo's style
3. Push to a new branch (use a descriptive branch name based on the changes)
4. Open a PR with a clear title and summary using `gh pr create`
