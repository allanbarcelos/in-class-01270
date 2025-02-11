# In Class Project


# Docker / MariaDB
```shell
docker run --name my-database -e MYSQL_ROOT_PASSWORD=123456 \
                              -e MYSQL_DATABASE=in-class-db \
                              -e MYSQL_USER=in-class-user \
                              -e MYSQL_PASSWORD=123456 -p 3310:3306 -d mariadb

```

- You can use the defaulkt port in your host "3306" but if you have problem change to other




# About Midterm
1 + 3 partes

1) read the requirements (30 min)
2) questions (15 or 20) (30 min)
3) project (2h) + github 
    3.1) create a feature to read a single user (1 commit), the message need be the description "create a feature to read a single user"
    3.2) create the list page
    3.3) fix the API communication issue
4) collaboration (1h)