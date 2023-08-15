// https://dbdiagram.io/d/64da5e6e02bd1c4a5ec2275e

create table users (
    id serial primary key,
    fullname varchar(32),
    email varchar(32),
    password varchar(32),
    social_media varchar(32),
    gender varchar(32),
    resume_id integer
);
insert into users (fullname, email, password, social_media, resume_id) values 
( 'admin', 'admin', 'admin', 'admin', 0), 
('admin1', 'admin1', 'admin1', 'admin1', 1),
('admin2', 'admin2', 'admin2', 'admin2', 2),
('admin3', 'admin3', 'admin3', 'admin3', 3),
('admin4', 'admin4', 'admin4', 'admin4', 4);



create table resumes (
    id serial primary key,
    user_id integer,
    title varchar(32),
    description varchar(32)
);


insert into resumes (user_id, title, description) values (1, 'admin', 'admin'),
(2, 'admin1', 'admin1'),
(3, 'admin2', 'admin2'),
(4, 'admin3', 'admin3'),
(5, 'admin4', 'admin4');


create table jobs (
    id serial primary key,
    user_id integer,
    title varchar(32),
    description varchar(32)
);

create table responses_accepts (
id serial primary key,
user_id int,
job_id int
);
insert into responses_accepts (user_id, job_id) values (1, 3);

create table responses_rejects (
id serial primary key,
user_id int,
job_id int
);
