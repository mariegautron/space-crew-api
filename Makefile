.PHONY: install prisma-init prisma-generate migrate start

install:
	docker-compose build
	docker-compose up -d db
	docker-compose run --rm server npm install
	make migrate

prisma-init:
	docker-compose run --rm server npx prisma init

prisma-generate:
	docker-compose run --rm server npx prisma generate

migrate:
	docker-compose run --rm server npm run db:migrate

start:
	docker-compose up