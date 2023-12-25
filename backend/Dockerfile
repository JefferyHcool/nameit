# 使用官方 Python 镜像作为基础镜像
FROM python:3.9-slim

# 设置工作目录
WORKDIR /app

# 复制应用程序代码到容器中
COPY . .

# 安装项目依赖，包括 Gunicorn
RUN pip install -r requirements.txt

# 暴露应用程序的端口（根据您的 Flask 应用程序配置的端口来设置）
EXPOSE 5421

# 设置环境变量（可选）
ENV FLASK_APP=manage.py
ENV FLASK_ENV=production

# 使用 Gunicorn 启动 Flask 应用程序
CMD ["gunicorn", "manage:app", "--bind", "0.0.0.0:5421"]
