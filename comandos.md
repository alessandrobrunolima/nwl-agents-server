# DOCKER

## Versão

`docker -v`

## Containers Rodando

`docker ps`

## Ver todos os container existentes

`docker ps -a`

## Rodar o container

`docker compose up -d`
-d é de detach inicia os contêineres em segundo plano e os mantém em execução

## Para o container que esta rodando em segundo plano

`docker compose stop`

## Parar um container

`docker stop 'CONTAINER ID'`

## Ver logs

`docker logs 'CONTAINER ID'`

## Ver log continuo

`docker logs 'CONTAINER ID' -f`

---

---

# ORM - DRIZZLE KIT

## Criar o migrations

`npx drizzle-kit generate`

## Rodar o migrations

`npx drizzle-kit migrate`

## Visualizar o banco de dados pelo navegador

`npx drizzle-kit studio`

# DRIZZEL SEED

##
