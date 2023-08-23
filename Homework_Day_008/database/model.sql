create database store;

create extension if not exists "uuid-ossp";


create table workers (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null,
    role boolean default false,
    created_at timestamp default CURRENT_TIMESTAMP
);

insert into workers (name, username, password, role) values ('Shahroz', 'safyur', 'saparalijon', true);

create table categories (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) not null,
    created_at timestamp default CURRENT_TIMESTAMP
);

create table products (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) not null,
    amount bigint not null,
    price bigint not null,
    is_active boolean default false,
    category_id uuid,
    created_at timestamp default CURRENT_TIMESTAMP,
    foreign key (category_id) references categories(id)
);

create table history (
    id uuid default uuid_generate_v4() primary key,
    product_id uuid,
    workers_id uuid,
    is_sell boolean,
    product_amount bigint,
    product_price bigint,
    created_at timestamp default CURRENT_TIMESTAMP,
    foreign key (product_id) references products(id),
    foreign key (workers_id) references workers(id)
);

