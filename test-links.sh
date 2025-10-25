#!/bin/bash

echo "🔍 Test des liens de navigation..."
echo ""

# Test page principale
echo "1. Page principale (/):"
curl -s -o /dev/null -w "   Status: %{http_code}\n" http://localhost:34500

# Test ancres sections
echo "2. Section Services (#services):"
curl -s -o /dev/null -w "   Status: %{http_code}\n" http://localhost:34500/#services

echo "3. Section Solutions (#solutions):"
curl -s -o /dev/null -w "   Status: %{http_code}\n" http://localhost:34500/#solutions

echo "4. Section Formations (#formations):"
curl -s -o /dev/null -w "   Status: %{http_code}\n" http://localhost:34500/#formations

echo "5. Section Incubateur (#incubateur):"
curl -s -o /dev/null -w "   Status: %{http_code}\n" http://localhost:34500/#incubateur

echo "6. Section Contact (#contact):"
curl -s -o /dev/null -w "   Status: %{http_code}\n" http://localhost:34500/#contact

echo ""
echo "✅ Tous les tests sont terminés!"
