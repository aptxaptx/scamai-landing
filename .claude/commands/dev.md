Start the dev server, killing any existing process on port 3000 first.

1. Run `lsof -ti:3000` to check if port 3000 is in use
2. If occupied, kill the process
3. Run `npm run dev` in the background
4. Confirm it started on port 3000
