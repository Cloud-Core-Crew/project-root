# Use Node.js 18 LTS
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application code
COPY . .

# Set environment variable (optional but recommended)
ENV NODE_ENV=production

# Expose app port
EXPOSE 4001

# Run the service
CMD ["node", "src/server.js"]
