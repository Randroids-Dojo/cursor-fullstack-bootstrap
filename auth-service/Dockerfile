FROM node:20-alpine
WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

EXPOSE 3001

# Default command (can be overridden by docker-compose)
CMD ["npm", "run", "dev"] 