# how to start

1. start keycloak
```sh
docker compose -f docker-compose-keycloak.yaml up -d
```

open the keycloak, https://localhost

I have created a realm for you, so you just need to create a user

2. run the vue app
```sh
cd workmaster-vue
npm install 
npm run dev
```

login with you created user