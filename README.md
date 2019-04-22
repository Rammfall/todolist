# Todolist

## On server side 

Node.js, express, sequelize for connect with MySQL, validator etc

## On client side

React and axios, builder - WebPack

## SQL TASK

```
SELECT * FROM tasks;
SELECT * FROM projects;

SELECT DISTINCT status FROM tasks ORDER BY name ASC;
SELECT b.name, COUNT(*) AS task_cnt FROM tasks AS a, projects AS b WHERE a.project_id = b.id GROUP BY b.name ORDER BY COUNT(*) DESC;
SELECT b.name, COUNT(*) AS task_cnt FROM tasks AS a, projects AS b WHERE a.project_id = b.id GROUP BY b.name ORDER BY b.name;
SELECT a.* FROM tasks AS a, projects AS b WHERE a.project_id = b.id AND b.name LIKE 'N%';
SELECT b.name, COUNT(*) AS task_cnt from tasks AS a right join projects AS b on a.project_id = b.id where b.name like '%_a_%' group BY b.name;
SELECT name FROM tasks GROUP BY name having COUNT(*) > 1 ORDER BY name;
SELECT a.name, COUNT(*) FROM tasks AS a, projects AS b where a.project_id = b.id AND b.name = 'Garage' GROUP BY a.name, a.status having COUNT(*) > 1 ORDER BY count(*);
SELECT b.name FROM tasks AS a, projects AS b where a.project_id = b.id AND a.status = 'completed' GROUP BY b.name, a.project_id having COUNT(a.id) > 10 ORDER BY a.project_id;
```
