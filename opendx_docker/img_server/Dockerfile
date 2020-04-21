# Description: opendx_server_weigtman
FROM openjdk:8

COPY ./opendx_server  /opendx_server/

RUN chmod 777 -R /opendx_server/

EXPOSE 8887
#设置容器启动时执行的命令
CMD ["sh", "/opendx_server/setup.sh"]