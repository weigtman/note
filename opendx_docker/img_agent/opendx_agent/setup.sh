# !/bin/bash

set -e
echo "[1.start...]"
cd /opendx_agent/
echo "[2.java -jar agent-agent-0.5.2.jar --ip={192.168.0.1} --server=http://{192.168.0.100:8887} --android=true]"
java -jar agent-0.5.5.jar --ip=192.168.0.100 --server=http://192.168.0.100:8887 --android=true  --port=10004
echo "[3.down...]"

tail -f /dev/null
