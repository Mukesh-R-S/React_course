# Use an official nginx image from Docker Hub
FROM nginx:alpine

# Copy the content of the current directory to the nginx html directory
COPY . /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY default.conf /etc/nginx/conf.d/default.conf
