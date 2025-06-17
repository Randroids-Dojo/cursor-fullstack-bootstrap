FROM node:20-slim
WORKDIR /app

# Prevent Rollup from attempting to load native binaries that are unavailable in slim images
ENV ROLLUP_NO_NATIVE=true

# Install dependencies first for better caching
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy rest of the frontend code
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"] 