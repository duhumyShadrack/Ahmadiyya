create table user_roles (
  user_id uuid primary key,
  role text check (role in ('admin', 'manager', 'team'))
);

create policy "Role-based access"
  on user_roles
  for select
  using (auth.uid() = user_id);

create table user_roles (
  user_id uuid primary key,
  role text check (role in ('admin', 'manager', 'team'))
);

create policy "Role-based access"
  on user_roles
  for select
  using (auth.uid() = user_id);

create table finance (
  id uuid primary key default gen_random_uuid(),
  customer text not null,
  amount numeric not null,
  status text check (status in ('pending','approved','rejected')),
  created_at timestamp default now()
);

create table credit_lines (
  id uuid primary key default gen_random_uuid(),
  customer text not null,
  credit_limit numeric not null,
  balance numeric not null,
  updated_at timestamp default now()
);

create table fraud_logs (
  id uuid primary key default gen_random_uuid(),
  transaction_id uuid references finance(id),
  anomaly text,
  detected_at timestamp default now()
);

-- Role-based policies
create policy "Finance access for managers"
  on finance
  for select
  using (exists(select 1 from user_roles where user_id = auth.uid() and role = 'manager'));

create policy "Finance access for admins"
  on finance
  for all
  using (exists(select 1 from user_roles where user_id = auth.uid() and role = 'admin'));
create table suppliers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_email text,
  phone text,
  rating int check (rating between 1 and 5)
);

create table inventory (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  quantity int not null,
  supplier uuid references suppliers(id),
  reorder_threshold int default 10,
  updated_at timestamp default now()
);

-- Role-based policies
create policy "Inventory access for managers"
  on inventory
  for select
  using (exists(select 1 from user_roles where user_id = auth.uid() and role = 'manager'));

create policy "Inventory access for admins"
  on inventory
  for all
  using (exists(select 1 from user_roles where user_id = auth.uid() and role = 'admin'));
