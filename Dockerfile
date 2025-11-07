# 1) Base image: lightweight Node.js
FROM node:20-alpine

# 2) Set working directory inside the container
WORKDIR /usr/src/app

# 3) Copy package files first (better layer caching)
COPY package*.json ./

# 4) Install only production dependencies
# If you have package-lock.json committed, you can use:
# RUN npm ci --omit=dev
RUN npm install --omit=dev

# 5) Copy the rest of the app source code
COPY . .

# 6) Environment variables
ENV NODE_ENV=production
ENV PORT=3000

# 7) Expose the port used by the Node.js app
EXPOSE 3000

# 8) Start the application
CMD ["node", "src/server.js"]
