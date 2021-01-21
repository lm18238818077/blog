



FROM node:12.12.0
RUN mkdir -p /home/www/express
WORKDIR /home/www/express
COPY server /home/www/express/
RUN npm install -g yarn
RUN yarn
ENTRYPOINT ["npm", "run"]
CMD ["start"]


# FROM mysql:5.7.24
# LABEL maintainer=18003554931@163.com version=1.0 name=ming-blog-api
# #设置免密登录
# ENV MYSQL_ALLOW_EMPTY_PASSWORD yes

# #将所需文件放到容器中
# COPY /server/mysql/setup.sh /mysql/setup.sh
# COPY /server/mysql/schema.sql /mysql/schema.sql
# COPY /server/mysql/privileges.sql /mysql/privileges.sql
# #设置容器启动时执行的命令
# CMD ["sh", "/mysql/setup.sh"]
