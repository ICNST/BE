TOKEN=$(./user_login.sh z@email.com password | jq -r '.token'); \
curl -X GET \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -H "Authorization: ${TOKEN}" \
    localhost:5000/api/users/$1
