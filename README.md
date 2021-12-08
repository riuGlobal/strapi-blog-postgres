# Strapi application

A quick description of your strapi application

# Usage with docker

docker build -t strapi .
docker run -p1337:1337 -d --name=strapi-blog \
-v$PWD/strapi-data:/strapi-data
-eDATABASE_HOST=database-host \
-eDATABASE_PORT=5432 \
-eDATABASE_NAME=strapi \
-eDATABASE_USERNAME=username \
-eDATABASE_PASSWORD=pass \
strapi \
