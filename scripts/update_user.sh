TOKEN=$(./user_login.sh z@email.com password | jq -r '.token'); \
curl -X PUT \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -H "Authorization: ${TOKEN}" \
    -d '{"'"$2"'": "'"$3"'"}' \
    localhost:5000/api/users/$1
