FROM node:18-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml .

RUN npm install -g pnpm

RUN pnpm install

COPY astro.config.mjs tsconfig.json tailwind.config.cjs .

COPY src src

COPY public public

RUN pnpm build

FROM ghcr.io/aosasona/chimney:latest

COPY --from=build /app/dist /var/www/html

EXPOSE 80

CMD ["run"]
