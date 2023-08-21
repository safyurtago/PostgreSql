create database SF_DB;

create extension if not exists "uuid-ossp";

create type admin_role_type as enum('super', 'admin');


create table admin (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    admin_role admin_role_type default 'admin',
    is_active boolean default true
);

create table gallery (
    id uuid default uuid_generate_v4() primary key,
    photo varchar(255) not null
);

create table services (
    id uuid default uuid_generate_v4() primary key,
    title varchar(255) not null,
    description varchar(255) not null,
    photo varchar(255) not null,
    is_active boolean default true
);

create table blogs (
    id uuid default uuid_generate_v4() primary key,
    title varchar(255) not null,
    description varchar(255) not null,
    photo varchar(255) not null,
    is_active boolean default true,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table feedbacks (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) not null,
    description varchar(255) not null,
    photo varchar(255) not null
);

create table contacts (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) not null,
    phonenumber varchar(255) not null,
    email varchar(255) not null,
    message text not null,
    is_viewed boolean
);

create table subscribers (
    id uuid default uuid_generate_v4() primary key,
    email varchar(255) not null
);