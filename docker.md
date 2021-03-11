---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow, v-green, vue-pro, healer-readable, mk-cute, jzman, geek-black, awesome-green, qklhk-chocolate
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: juejin
highlight:
---
[Docker —— 从入门到实践](https://yeasy.gitbook.io/docker_practice/install/centos)

[官网](https://docs.docker.com/)

[仓库](https://www.docker.com/products/docker-hub)

加速
- https://hub-mirror.c.163.com          #网易
- https://registry.docker-cn.com　　　　 #Docker中国区
- https://docker.mirrors.ustc.edu.cn     #USTC
## 常用的命令
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6540c0e98bab45e586dd3faa23e3a32c~tplv-k3u1fbpfcp-watermark.image)

### 常用镜像命令
- docker version 显示docker版本信息
- docker info 显示docker系统信息，包括容器数量和镜像
- docker ps 查看容器列表
- docker images 查看镜像列表
- docker rmi 删除镜像
- docker rmi -f $(docker images -aq) 强制删除所有镜像
- docker history id 查看构建过程
- docker exec -it 容器名 ping 容器名
- docker network ls 查看网络

### 常用容器命令
有了镜像才可以创建容器

```
docker run 镜像名称
 --name 容器名称
 -p 宿主机端口:容器端口
 -it 使用交互方式运行，进入容器
 -d 后台运行
 
 docker ps 查看容器
 -a 历史运行
 -q 容器id
 
 exit 退出容器
 
 docker rm 删除容器
 
 docker start
 docker restart
 docker stop
 docker kill
 
 docker logs -tf --tail 10 容器id 查看最近10条日志
  -t 时间戳
  -f 输出
  
 docker top 容器id 查看容器进程信息
 
 docker inspect 容器id 查看容器元数据
 
 docker exec -it 容器id /bin/bash 进入正在运行的容器     开启一个新进程
 docker attach 容器id   进入正在运行的终端，不开启新的进程

docker cp 6f411e633ba4:/etc/nginx/conf.d/default.conf G:/docker/nginx

将容器内的文件拷贝到宿主机上
  
```

### 全部
```

attach    Attach to a running container  #当前shell下attach连接指定运行镜像
build     Build an image from a Dockerfile  #通过Dockerfile定制镜像
commit    Create a new image from a container's changes  #提交当前容器为新的镜像
cp    Copy files/folders from a container to a HOSTDIR or to STDOUT  #从容器中拷贝指定文件或者目录到宿主机中
create    Create a new container  #创建一个新的容器，同run 但不启动容器
diff    Inspect changes on a container's filesystem  #列出自创建容器以来容器文件系统中已更改的文件和目录
events    Get real time events from the server#从docker服务获取容器实时事件
exec    Run a command in a running container#在已存在的容器上运行命令
export    Export a container's filesystem as a tar archive  #导出容器的内容流作为一个tar归档文件(对应import)
history    Show the history of an image  #展示一个镜像形成历史
images    List images  #列出系统当前镜像
import    Import the contents from a tarball to create a filesystem image  #从tar包中的内容创建一个新的文件系统映像(对应export)
info    Display system-wide information  #显示系统相关信息
inspect    Return low-level information on a container or image  #查看容器详细信息
kill    Kill a running container  #kill指定docker容器
load    Load an image from a tar archive or STDIN  #从一个tar包中加载一个镜像(对应save)
login    Register or log in to a Docker registry#注册或者登陆一个docker源服务器
logout    Log out from a Docker registry  #从当前Docker registry退出
logs    Fetch the logs of a container  #输出当前容器日志信息
pause    Pause all processes within a container#暂停容器
port    List port mappings or a specific mapping for the CONTAINER  #查看映射端口对应的容器内部源端口
ps    List containers  #列出容器列表
pull    Pull an image or a repository from a registry  #从docker镜像源服务器拉取指定镜像或者库镜像
push    Push an image or a repository to a registry  #推送指定镜像或者库镜像至docker源服务器
rename    Rename a container  #重命名容器
restart    Restart a running container  #重启运行的容器
rm    Remove one or more containers  #移除一个或者多个容器
rmi    Remove one or more images  #移除一个或多个镜像(无容器使用该镜像才可以删除，否则需要删除相关容器才可以继续或者-f强制删除)
run    Run a command in a new container  #创建一个新的容器并运行一个命令
save    Save an image(s) to a tar archive#保存一个镜像为一个tar包(对应load)
search    Search the Docker Hub for images  #在docker
hub中搜索镜像
start    Start one or more stopped containers#启动容器
stats    Display a live stream of container(s) resource usage statistics  #统计容器使用资源
stop    Stop a running container  #停止容器
tag         Tag an image into a repository  #给源中镜像打标签
top       Display the running processes of a container #查看容器中运行的进程信息
unpause    Unpause all processes within a container  #取消暂停容器
version    Show the Docker version information#查看容器版本号
wait         Block until a container stops, then print its exit code  #截取容器停止时的退出状态值
```

### 数据卷 volume
> 　　我们可以在创建容器的时候，将宿主机的目录与容器内的目录进行映射，这样我们就可以通过修改宿主机某个目录的文件从而去影响容器，而且这个操作是双向绑定的，也就是说容器内的操作也会影响到宿主机，实现备份功能。

>　　但是容器被删除的时候，宿主机的内容并不会被删除，因为底层是通过拷贝实现的。如果多个容器挂载同一个目录，其中一个容器被删除，其他容器的内容也不会受到影响，同理，底层是拷贝实现的。

>　　但是容器被删除的时候，宿主机的内容并不会被删除。如果多个容器挂载同一个目录，其中一个容器被删除，其他容器的内容也不会受到影响

```
docker run -v 主机目录：容器目录  目录挂载
docker run -v /var/lib/mysql  匿名挂载
docker run -v mysql_data:/var/lib/mysql  具名挂载

```

### network
容器默认桥接网络只能通过IP地址相互访问,在用户定义的网桥网络上，容器可以通过名称或别名相互解析。
```
docker network ls 

docker network inspect id
```
| name | 介绍 |
|------|------------|
| bridge  | 桥接模式（默认）| 
| none  | 不配置网络        |    
| host  | 和宿主机共享网络  | 

### 例子
```
 docker run -d --name nginx-cjj -p 3345:80 -v G:/docker/nginx/home/build:/home/build -v G:/docker/nginx/home/nginx/conf.d:/etc/nginx/conf.d nginx

```


### 发布镜像
```
docker tag ff0630c5aefb lm18238818077/myblog:v1.0     //为了解决push权限问题，需要更改一下
docker push lm18238818077/myblog:v1.0
```

### Dockerfile

```
# 指明构建的新镜像是来自于 centos:7 基础镜像
FROM centos:7
# 通过镜像标签声明了作者信息
LABEL maintainer="mrhelloworld.com"
# 设置工作目录
WORKDIR /usr/local
# 拷贝文件到镜像中并解压 (ADD可以解压 和 COPY)
ADD jdk-11.0.6_linux-x64_bin.tar.gz /usr/local/java
# 暴露容器运行时的 8080 监听端口给外部
EXPOSE 8080
# 设置容器内 JAVA_HOME 环境变量
ENV JAVA_HOME /usr/local/java/jdk-11.0.6/
# 启动容器时启动 tomcat 并查看 tomcat 日志信息
CMD ["/usr/local/tomcat/apache-tomcat-9.0.37/bin/catalina.sh", "run"]

```
### ENTRYPOINT 和CMD区别
前者容器启动时是追加命令
后者是替换命令

### commit
```
构建镜像，也可以通过dockerfile来构建
docker build -f deployment/docker/Dockerfile -t myblog:1.1 .      // -f 指定Dockerfile路径， -t 镜像名称和版本   注意后面路径
docker commit 容器id 镜像名称:tag
```


### docker-compose 介绍
　　我们可以通过 Dockerfile 文件让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况，例如开发一个 Web 应用，除了 Web 服务容器本身，还需要数据库服务容器、缓存容器，甚至还包括负载均衡容器等等。
　　Docker Compose 恰好满足了这样的需求，它是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YAML 文件来配置应用程序所需要的服务。然后使用一个命令，就可以通过 YAML 配置文件创建并启动所有服务。
　　Docker Compose 项目是 Docker 官方的开源项目，来源于之前的 Fig 项目，使用 Python 语言编写。负责实现对 Docker 容器集群的快速编排。项目地址为：https://github.com/docker/compose/releases
  
　　
  Docker Compose 使用的三个步骤为：

- 使用 Dockerfile 文件定义应用程序的环境；
- 使用 docker-compose.yml 文件定义构成应用程序的服务，这样它们可以在隔离环境中一起运行；
- 最后，执行 docker-compose up 命令来创建并启动所有服务

```
docker run -di --name mysql -v blog_db_data:/var/lib/mysql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=test -e MYSQL_USER=root -e MYSQL_PASSWORD=123456 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes --network blog_app-network mysql:5.7

```

```
描述 Compose 文件的版本信息
version: '3'
# 定义服务，可以多个
services: 
  nodejs:   # 服务名称
    image: myblog-api:3.3    # 创建容器时所需的镜像
    container_name: nodejs   # 容器名称，默认为"工程名称_服务条目名称_序号"
    build: 
      context: ./  # 相对当前 docker-compose.yml 文件所在目录
      dockerfile: ./server/docker/Dockerfile
    restart: unless-stopped   #no：默认的重启策略，在任何情况下都不会重启容器；
                              #on-failure：容器非正常退出时，比如退出状态为非0(异常退出)，才会重启容器；
                              #always：容器总是重新启动，即使容器被手动停止了，当 Docker 重启时容器也还是会一起启动；
                              #unless-stopped：容器总是重新启动，除非容器被停止（手动或其他方式），那么 Docker 重启时容器则不会启动。
    ports:
      - "6060:6060" # 左边宿主机端口:右边容器端口
      - "2208:22"
    environment:
      NODE_ENV: production  #development 创建容器时所需的环境变量
    
    networks:
      - app-network
      
  webserver:
    image: myblog:2.3
    container_name: webserver
    restart: unless-stopped
    ports:
      - "8080:80" 
    depends_on:
      - nodejs
    networks:
      - app-network
  
  mysql:
    image: mysql:5.7
    container_name: mysql
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=123456
      - MYSQL_DATABASE=test
      - MYSQL_USER=root   #创建test用户
      - MYSQL_PASSWORD=123456 #设置test用户的密码
      - MYSQL_ALLOW_EMPTY_PASSWORD=yes
    ports:
      - "3307:3306"
    volumes:
      - F:/myspace/blog/blog/server/mysql/my.cnf:/etc/mysql/my.cnf
      - db_data:/var/lib/mysql

    networks:
      - app-network
volumes:
  db_data:

networks:
  app-network:  # 一个具体网络的条目名称
    #name: nginx-net # 网络名称，默认为"工程名称_网络条目名称"
    driver: bridge # 网络模式，默认为 bridge


```