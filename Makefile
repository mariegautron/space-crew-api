.PHONY: install prisma-init prisma-generate migrate start

install:
	docker-compose build
	docker-compose up -d db
	docker-compose run --rm server npm install
	npx prisma migrate reset
	make migrate
	make fixtures

prisma-init:
	docker-compose run --rm server npx prisma init

prisma-generate:
	docker-compose run --rm server npx prisma generate

fixtures:
	docker-compose run --rm server npm run fixtures

migrate:
	docker-compose run --rm server npm run db:migrate

start:
	docker-compose up