# Description: mysql_weigtman
FROM mysql:5.7

#设置免密登录
ENV MYSQL_ALLOW_EMPTY_PASSWORD yes

#将所需文件放到容器中
COPY setup.sh /mysql/setup.sh
COPY database.sql /mysql/database.sql
COPY table.sql /mysql/table.sql
COPY data.sql /mysql/data.sql
COPY update.sql /mysql/update.sql
COPY privileges.sql /mysql/privileges.sql
RUN chmod 777 -R /mysql/

#设置容器启动时执行的命令
CMD ["sh", "/mysql/setup.sh"]