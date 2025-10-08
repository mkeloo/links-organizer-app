# --- build stage ---
FROM node:20-bookworm AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- run stage ---
FROM node:20-bookworm
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOST=0.0.0.0
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]