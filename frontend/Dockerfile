# Dockerfile for the 'nameit' Vue 3 project

# 阶段 1: 构建
# 使用 Node.js 版本 16.20 作为基础镜像
FROM node:16.20 as build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml 到工作目录
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm 并使用 pnpm 安装依赖
RUN npm install -g pnpm && pnpm install

# 复制 'nameit' 项目的其余文件和文件夹
COPY . .

# 构建用于生产环境的代码
RUN pnpm run build

# 阶段 2: 部署
# 使用 Nginx 的稳定版镜像
FROM nginx:stable-alpine as production-stage

# 从构建阶段复制构建好的文件到 Nginx 用于托管的目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件到容器中的 Nginx 配置目录
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 3678 端口
EXPOSE 3678

# 当 Docker 容器启动时运行 Nginx
CMD ["nginx", "-g", "daemon off;"]
