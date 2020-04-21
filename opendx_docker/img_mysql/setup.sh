# !/bin/bash

set -e

#查看mysql服务的状态，方便调试，这条语句可以删除
echo `service mysql status`

echo '[1.启动mysql....]'
#启动mysql
service mysql start
sleep 3
echo `service mysql status`

echo '[2.创建daxiang数据库....]'
#导入数据
mysql < /mysql/database.sql
echo '[3.创建daxiang数据库完毕....]'
sleep 3

echo '[4.创建表....]'
#导入数据
mysql < /mysql/table.sql
echo '[5.创建表完毕....]'
sleep 3

echo '[6.初始化数据....]'
#导入数据
mysql < /mysql/data.sql
echo '[7.初始化数据完毕....]'

echo '[8.更新数据....]'
#导入数据
mysql < /mysql/update.sql
echo '[9.更新数据完毕....]'


sleep 3
echo `service mysql status`

#重新设置mysql密码
echo '[10.开始修改密码....]'
mysql < /mysql/privileges.sql
echo '[11.修改密码完毕....]'

#sleep 3
echo `service mysql status`
echo `mysql容器启动完毕,且数据导入成功`

tail -f /dev/null
