-- 账号admin 密码admin
USE daxiang;
INSERT INTO `user`(`id`,`username`, `password`, `nick_name`, `status`, `create_time`) VALUES ('1', 'admin', '$2a$12$v1ERBqyxhU/ocHRPywOjvOAMkhmZGJB3hRoNjr4bWO3HLWZSIlnne', '超级管理员', 1, '2020-02-24 20:14:33');
INSERT INTO `user_role`(`user_id`, `role_id`) VALUES (1, 1);
INSERT INTO `project`(`id`, `name`, `description`, `platform`, `creator_uid`, `create_time`) VALUES (1, 'AndroidDemo', '', 1, 1, '2020-02-24 20:14:33');
INSERT INTO `user_project`(`user_id`, `project_id`) VALUES (1, 1);

INSERT INTO `role`(`id`, `name`, `alias`) VALUES (1, 'admin', '超级管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (2, 'agent', 'agent管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (3, 'app', 'app管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (4, 'device', '设备管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (5, 'driver', 'driver管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (6, 'environment', '环境管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (7, 'globalVar', '全局变量管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (8, 'page', 'page管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (9, 'action', 'action管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (10, 'testcase', '测试用例管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (11, 'testPlan', '测试计划管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (12, 'testTask', '测试任务管理员');
INSERT INTO `role`(`id`, `name`, `alias`) VALUES (13, 'testSuite', '测试集管理员');

