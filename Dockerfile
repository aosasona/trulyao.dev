FROM node:20-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY *.{mjs,cjs,json} ./

RUN npm install -g pnpm@8.15.1 && \
  pnpm install

COPY astro.config.mjs tsconfig.json tailwind.config.cjs ./

COPY src src

COPY public public

RUN pnpm build

FROM ghcr.io/aosasona/chimney:latest

COPY --from=build /app/dist /var/www/html

COPY chimney.toml /etc/chimney/chimney.toml

EXPOSE 80

CMD ["run"]
