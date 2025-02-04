# In Class Project


# Docker / MariaDB
```shell
docker run --name my-database -e MYSQL_ROOT_PASSWORD=123456 \
                              -e MYSQL_DATABASE=in-class-db \
                              -e MYSQL_USER=in-class-user \
                              -e MYSQL_PASSWORD=123456 -p 3310:3306 -d mariadb

```

- You can use the defaulkt port in your host "3306" but if you have problem change to other