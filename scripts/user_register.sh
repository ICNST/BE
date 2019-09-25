curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"firstName": "'"$1"'", "lastName": "'"$2"'", "email": "'"$3"'", "password": "'"$4"'"}' \
    localhost:5000/api/register
