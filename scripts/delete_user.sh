TOKEN=$(./user_login.sh z@email.com password | jq -r '.token'); \
curl -X DELETE \
    -H "Authorization: ${TOKEN}" \
    localhost:5000/api/users/$1
