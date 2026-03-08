Review database schema, queries, and data access patterns for correctness and efficiency.

## Process

### 1. Schema Review
- Read `src/lib/db/schema.sql` for table definitions
- Verify proper indexing on frequently queried columns
- Check foreign key constraints and CASCADE behaviors
- Verify data types match usage (JSONB structure, text vs varchar)
- Check for missing NOT NULL constraints
- Verify slug uniqueness constraint

### 2. Query Review
- Read `src/lib/db/newsletters.ts` for all query functions
- Check for N+1 query patterns
- Verify parameterized queries (no SQL injection)
- Check for proper error handling on database operations
- Verify connection pooling usage
- Look for missing WHERE clauses or unbounded SELECTs

### 3. Data Integrity
- Verify JSONB content structure is validated before insert/update
- Check that slug generation handles collisions
- Verify CASCADE delete behavior is intentional
- Check for orphaned records possibility
- Verify date handling (timezone awareness)

### 4. Performance
- Identify queries that could benefit from indexes
- Check for SELECT * when only specific columns are needed
- Look for queries that scan full tables unnecessarily
- Verify JSONB queries use proper operators
- Check if any queries should use pagination

### 5. Connection Management
- Verify `@neondatabase/serverless` is configured correctly
- Check connection string handling (no hardcoded credentials)
- Verify connection pooling for serverless environment

## Output
- **Schema Issues**: Missing indexes, constraints, or design problems
- **Query Issues**: Performance or correctness concerns
- **Security Issues**: Injection risks, data exposure
- **Recommendations**: Specific improvements with SQL examples
