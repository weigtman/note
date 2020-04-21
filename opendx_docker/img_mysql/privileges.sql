use mysql;
select host, user from user;
-- 因为mysql版本是5.7，因此新建用户为如下命令：
create user daxiang_docker identified by '123456';
-- 将daxiang数据库的权限授权给创建的daxiang_docker用户，密码为123456：
grant all on daxiang.* to daxiang_docker@'%' identified by '123456' with grant option;
-- 这一条命令一定要有：
flush privileges;