# --- run stage ---
FROM node:20-bookworm
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy standalone output into /app (puts server.js at /app/server.js)
COPY --from=build /app/.next/standalone ./
# Next needs the static assets at /.next/static
COPY --from=build /app/.next/static ./.next/static
# Public assets
COPY --from=build /app/public ./public

# (Optional but useful) prove server.js exists during build
# RUN test -f server.js && echo "server.js present"

EXPOSE 3000
CMD ["node", "server.js"]