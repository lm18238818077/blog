FROM nginx:alpine

LABEL maintainer=18003554931@163.com version=1.0 name=ming-blog

COPY /docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY /build /var/www/build

EXPOSE 443 80
