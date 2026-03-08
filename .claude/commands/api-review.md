Review API routes for correctness, security, error handling, and RESTful best practices.

## Argument
$ARGUMENTS — Optional: specific API route path (e.g., "newsletter", "auth"). If empty, reviews all API routes.

## Process

### 1. Route Discovery
- List all files in `src/app/api/`
- Map HTTP methods to endpoints
- Verify route naming follows RESTful conventions

### 2. Auth & Authorization
- Every admin route must call `validateSession()` from `src/lib/admin-auth`
- Verify early return on auth failure (401/403)
- Check that public routes don't expose admin data
- Verify auth is checked before any data mutation

### 3. Request Handling
- Proper HTTP method validation (GET, POST, PUT, DELETE)
- Request body parsing with validation
- Query parameter sanitization
- Content-Type checking where relevant
- Proper handling of missing/malformed request data

### 4. Response Patterns
- Consistent response format (JSON)
- Appropriate HTTP status codes (200, 201, 400, 401, 404, 500)
- Error responses include helpful messages (without leaking internals)
- Proper Content-Type headers on responses
- No sensitive data in responses

### 5. Error Handling
- Try/catch around all async operations
- Database errors caught and wrapped
- Proper error logging (without sensitive data)
- Graceful degradation where possible

### 6. Data Operations
- Database queries use parameterized statements
- Input data validated before database operations
- Proper handling of not-found cases
- Transaction usage for multi-step operations

## Output
- Route map: endpoint → method → handler
- Issues found with severity and file:line references
- Missing endpoints or inconsistencies
- Recommendations for improvement
