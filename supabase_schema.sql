
-- Articles Table
create table if not exists articles (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  category text default 'Berita',
  content text not null,
  excerpt text,
  image_url text,
  is_published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  -- SEO Fields
  seo_title text,
  seo_description text,
  seo_keywords text
);

-- Galleries Table
create table if not exists galleries (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text not null,
  category text, -- e.g., 'Kegiatan', 'Fasilitas'
  created_at timestamp with time zone default now()
);

-- Testimonials Table
create table if not exists testimonials (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  role text not null,
  content text not null,
  avatar_url text,
  created_at timestamp with time zone default now()
);

-- Programs Table (Optional, if dynamic)
create table if not exists programs (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  icon_name text,
  sort_order integer default 0,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table articles enable row level security;
alter table galleries enable row level security;

-- Policies (Public read, Admin write)
create policy "Public articles are viewable by everyone"
  on articles for select
  using (is_published = true);

create policy "Public galleries are viewable by everyone"
  on galleries for select
  using (true);

-- Note: Admin policies would depend on auth setup. 
-- For now, we assume authenticated users (admins) can do everything, 
-- or we add a specific role check.
create policy "Admins can do everything on articles"
  on articles for all
  using (auth.role() = 'authenticated'); -- Simplified for this stage

create policy "Admins can do everything on galleries"
  on galleries for all
  using (auth.role() = 'authenticated');

-- Storage Buckets
insert into storage.buckets (id, name, public) 
values ('images', 'images', true)
on conflict (id) do nothing;

create policy "Images are viewable by everyone"
  on storage.objects for select
  using ( bucket_id = 'images' );

create policy "Admins can upload images"
  on storage.objects for insert
  with check ( bucket_id = 'images' and auth.role() = 'authenticated' );

-- Hero Slides Table
create table if not exists hero_slides (
  id uuid default gen_random_uuid() primary key,
  title text,
  subtitle text,
  image_url text not null,
  button_text text,
  button_link text,
  sort_order integer default 0,
  is_active boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS for Hero Slides
alter table hero_slides enable row level security;

-- Policies for Hero Slides
create policy "Public hero slides are viewable by everyone"
  on hero_slides for select
  using (is_active = true);

create policy "Admins can do everything on hero slides"
  on hero_slides for all
  using (auth.role() = 'authenticated');
