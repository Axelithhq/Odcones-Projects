-- ODCONES PROJECTS Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  sector TEXT NOT NULL,
  location TEXT NOT NULL,
  year TEXT NOT NULL,
  client TEXT NOT NULL,
  status TEXT DEFAULT 'Completed',
  description TEXT NOT NULL,
  challenge TEXT,
  solution TEXT,
  impact_metrics JSONB DEFAULT '{}'::jsonb,
  images TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  organization TEXT NOT NULL,
  sector TEXT NOT NULL,
  problem_statement TEXT NOT NULL,
  location TEXT NOT NULL,
  timeline TEXT NOT NULL,
  budget TEXT NOT NULL,
  status TEXT DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Articles / Insights Table
CREATE TABLE IF NOT EXISTS public.articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  read_time TEXT DEFAULT '5 min read',
  image_url TEXT NOT NULL,
  author TEXT DEFAULT 'ODCONES Research Team',
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Careers Table
CREATE TABLE IF NOT EXISTS public.careers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT DEFAULT 'Full-time',
  experience TEXT DEFAULT '3+ years',
  description TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Gallery Table
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS Policies
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Public Read Access Policies
CREATE POLICY "Allow public read access to published projects" ON public.projects FOR SELECT USING (published = true);
CREATE POLICY "Allow public read access to published articles" ON public.articles FOR SELECT USING (published = true);
CREATE POLICY "Allow public read access to active careers" ON public.careers FOR SELECT USING (active = true);
CREATE POLICY "Allow public read access to gallery" ON public.gallery FOR SELECT USING (true);

-- Public Insert Access Policies for Enquiries
CREATE POLICY "Allow public insert to enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

-- =============================================================================
-- ADDITIONAL TABLES
-- =============================================================================

-- Bookings Table
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id TEXT UNIQUE NOT NULL,
  service_id TEXT NOT NULL,
  service_name TEXT NOT NULL,
  service_name_or TEXT,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  org TEXT,
  sector TEXT,
  location TEXT,
  investment TEXT,
  amount INTEGER NOT NULL DEFAULT 0,
  coupon_code TEXT,
  discount INTEGER DEFAULT 0,
  status TEXT DEFAULT 'PAYMENT_PENDING',
  payment_mode TEXT DEFAULT 'mock',
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  razorpay_signature TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Payments Table
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id UUID REFERENCES public.bookings(id),
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT UNIQUE,
  razorpay_signature TEXT,
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'INR',
  status TEXT DEFAULT 'captured',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Coupons Table
CREATE TABLE IF NOT EXISTS public.coupons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL,
  value NUMERIC NOT NULL,
  min_amount INTEGER DEFAULT 0,
  max_discount INTEGER,
  max_uses INTEGER,
  used_count INTEGER DEFAULT 0,
  per_user_limit INTEGER DEFAULT 1,
  starts_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  source TEXT DEFAULT 'popup',
  active BOOLEAN DEFAULT true,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Leads Table (CRM)
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization TEXT,
  source TEXT DEFAULT 'enquiry',
  sector TEXT,
  requirement TEXT,
  location TEXT,
  status TEXT DEFAULT 'NEW',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Campaigns Table
CREATE TABLE IF NOT EXISTS public.campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject TEXT NOT NULL,
  body_html TEXT NOT NULL,
  status TEXT DEFAULT 'draft',
  sent_count INTEGER DEFAULT 0,
  total_recipients INTEGER DEFAULT 0,
  failed_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Site Settings Table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value JSONB,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =============================================================================
-- RLS ENABLE + POLICIES FOR NEW TABLES
-- =============================================================================

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Bookings: public can insert, public can read own by booking_id
CREATE POLICY "Allow public insert to bookings" ON public.bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read bookings by booking_id" ON public.bookings FOR SELECT USING (true);

-- Payments: service role only (no public access policy; admin-managed)
CREATE POLICY "Allow service role full access to payments" ON public.payments FOR ALL USING (auth.role() = 'service_role');

-- Coupons: public read for active coupons
CREATE POLICY "Allow public read active coupons" ON public.coupons FOR SELECT USING (active = true);

-- Newsletter: public can insert, public can read own email
CREATE POLICY "Allow public insert to newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read newsletter by email" ON public.newsletter_subscribers FOR SELECT USING (true);

-- Leads: service role only
CREATE POLICY "Allow service role full access to leads" ON public.leads FOR ALL USING (auth.role() = 'service_role');

-- Campaigns: service role only
CREATE POLICY "Allow service role full access to campaigns" ON public.campaigns FOR ALL USING (auth.role() = 'service_role');

-- Site Settings: public read, service role write
CREATE POLICY "Allow public read site_settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Allow service role full access to site_settings" ON public.site_settings FOR ALL USING (auth.role() = 'service_role');

-- =============================================================================
-- INDEXES
-- =============================================================================

CREATE INDEX IF NOT EXISTS idx_bookings_booking_id ON public.bookings (booking_id);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON public.bookings (email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings (status);

CREATE INDEX IF NOT EXISTS idx_payments_razorpay_payment_id ON public.payments (razorpay_payment_id);
CREATE INDEX IF NOT EXISTS idx_payments_booking_id ON public.payments (booking_id);

CREATE INDEX IF NOT EXISTS idx_coupons_code ON public.coupons (code);
CREATE INDEX IF NOT EXISTS idx_coupons_active ON public.coupons (active);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subscribers (email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON public.newsletter_subscribers (active);

CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads (email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_source ON public.leads (source);

CREATE INDEX IF NOT EXISTS idx_campaigns_status ON public.campaigns (status);

CREATE INDEX IF NOT EXISTS idx_site_settings_key ON public.site_settings (key);

-- =============================================================================
-- DEFAULT COUPONS
-- =============================================================================

INSERT INTO public.coupons (code, type, value, min_amount, max_discount, active)
VALUES
  ('ODCONS1000', 'fixed', 1000, 5000, NULL, true),
  ('FARMER20', 'percentage', 20, 1000, 2000, true),
  ('LAUNCH500', 'fixed', 500, 2000, NULL, true)
ON CONFLICT (code) DO NOTHING;
