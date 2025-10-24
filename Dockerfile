# Use nginx to serve the React app
FROM nginx:alpine

# Copy built app files to nginx html directory
COPY dist/ /usr/share/nginx/html/

# Copy custom nginx config (optional - for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]