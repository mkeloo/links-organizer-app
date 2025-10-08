# --- build stage ---
FROM node:20-bookworm AS build
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Build Next.js (requires your next.config.ts with output: "standalone")
COPY . .
RUN npm run build

# --- run stage ---
FROM node:20-bookworm
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

# Copy standalone output (puts server.js at /app/server.js)
COPY --from=build /app/.next/standalone ./
# Copy static assets used by Next runtime
COPY --from=build /app/.next/static ./.next/static
# Public assets
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]