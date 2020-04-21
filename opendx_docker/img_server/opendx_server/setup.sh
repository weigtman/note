# !/bin/bash

set -e
echo "[1.start...]"
cd /opendx_server/
echo "[2.start...java -jar server-0.5.5.jar --db-url=192.168.0.100:2206/daxiang --db-username=daxiang_docker --db-password=123456 --server.port=8887.]"
java -jar server-0.5.5.jar --db-url=192.168.0.100:2206/daxiang --db-username=daxiang_docker --db-password=123456 --server.port=8887
echo "[3.down...]"

tail -f /dev/null
