# Description: opendx_agent_weigtman
FROM appium/appium:1.17.0-p0

COPY ./opendx_agent/ /opendx_agent/
#COPY ./opendx_agent/lib /opendx_agent/lib
#COPY ./opendx_agent/vendor /opendx_agent/vendor

RUN chmod 777 -R /opendx_agent/

#EXPOSE 10001
EXPOSE 10004

#设置容器启动时执行的命令
CMD ["sh", "/opendx_agent/setup.sh"]