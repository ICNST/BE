curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"email": "'"$1"'", "password": "'"$2"'"}' \
    localhost:5000/api/login
