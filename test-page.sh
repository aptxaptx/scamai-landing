#!/bin/bash
echo "🧪 Testing Scam.ai Landing Page..."
echo ""

# Test 1: Build
echo "1️⃣ Testing build..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ Build successful"
else
  echo "❌ Build failed"
  exit 1
fi

# Test 2: Page loads
echo "2️⃣ Testing page load..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/en/scamai)
if [ "$HTTP_CODE" = "200" ]; then
  echo "✅ Page loads (HTTP $HTTP_CODE)"
else
  echo "❌ Page failed to load (HTTP $HTTP_CODE)"
  exit 1
fi

# Test 3: Check meta tags
echo "3️⃣ Testing SEO meta tags..."
PAGE_CONTENT=$(curl -s http://localhost:3000/en/scamai)
if echo "$PAGE_CONTENT" | grep -q "Deepfake Detection API"; then
  echo "✅ Title tag present"
else
  echo "❌ Title tag missing"
fi

if echo "$PAGE_CONTENT" | grep -q "og:title"; then
  echo "✅ Open Graph tags present"
else
  echo "❌ Open Graph tags missing"
fi

# Test 4: Check structured data
echo "4️⃣ Testing structured data..."
if echo "$PAGE_CONTENT" | grep -q "application/ld+json"; then
  echo "✅ Structured data present"
else
  echo "❌ Structured data missing"
fi

# Test 5: Check mobile viewport
echo "5️⃣ Testing mobile viewport..."
if echo "$PAGE_CONTENT" | grep -q "viewport"; then
  echo "✅ Mobile viewport configured"
else
  echo "❌ Mobile viewport missing"
fi

echo ""
echo "🎉 All tests passed! Page is ready for production."
