Audit project dependencies for vulnerabilities, outdated packages, and unnecessary bloat.

## Process

### 1. Vulnerability Scan
- Run `npm audit` to check for known vulnerabilities
- Categorize findings by severity (critical, high, moderate, low)
- Check if fixes are available (npm audit fix --dry-run)
- Flag any dependencies with unpatched CVEs

### 2. Outdated Packages
- Run `npm outdated` to check for newer versions
- Identify major version bumps that may need migration work
- Flag packages that are no longer maintained
- Check for deprecated packages

### 3. Bundle Impact
- Read `package.json` to list all dependencies
- Identify large dependencies that impact bundle size
- Check for dependencies that have lighter alternatives
- Verify devDependencies aren't accidentally in dependencies
- Look for duplicate functionality across packages

### 4. Unused Dependencies
- Cross-reference `package.json` dependencies with actual imports in `src/`
- Flag packages listed but never imported
- Check for packages only used in removed/commented-out code

### 5. License Compliance
- Check licenses of all production dependencies
- Flag any copyleft licenses (GPL) that may conflict with project licensing
- Identify any packages with unclear or missing licenses

## Output
- **Vulnerabilities**: CVEs with severity and fix availability
- **Outdated**: Packages needing updates, grouped by urgency
- **Unused**: Dependencies that can be removed
- **Bundle Bloat**: Large packages with lighter alternatives
- **Action Items**: Prioritized list of recommended changes
