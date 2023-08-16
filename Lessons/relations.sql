create table countries (
    id serial primary key,
    name varchar(255) not null
);

create table presidents (
    id serial primary key,
    name varchar(255) not null,
    country_id integer not null,
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

create table people (
    id serial primary key,
    name varchar(255) not null,
    president_id integer not null,
    FOREIGN KEY (president_id) REFERENCES presidents(id)
);

create table organizations (
    id serial primary key,
    name varchar(255) not null
);

create table people_organization (
    id serial primary key,
    people_id integer not null,
    organizations_id integer not null,
    FOREIGN KEY (people_id) REFERENCES people(id),
    FOREIGN KEY ( organizations_id) REFERENCES organizations(id)
);
