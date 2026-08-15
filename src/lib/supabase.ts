import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ProjectItem = {
  id: string;
  title: string;
  title_or?: string;
  slug: string;
  sector: string;
  sector_or?: string;
  location: string;
  year: string;
  client: string;
  status: 'In Progress' | 'Completed' | 'Upcoming';
  description: string;
  description_or?: string;
  challenge?: string;
  challenge_or?: string;
  solution?: string;
  solution_or?: string;
  impact_metrics?: Record<string, string>;
  impact_metrics_or?: Record<string, string>;
  images: string[];
  featured?: boolean;
  created_at?: string;
};

export type EnquiryItem = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  sector: string;
  problem_statement: string;
  location: string;
  timeline: string;
  budget: string;
  status?: 'New' | 'Contacted' | 'In Progress' | 'Completed';
  created_at?: string;
};

export type ArticleItem = {
  id: string;
  title: string;
  title_or?: string;
  slug: string;
  category: string;
  excerpt: string;
  excerpt_or?: string;
  content: string;
  content_or?: string;
  read_time: string;
  image_url: string;
  author: string;
  published_at: string;
};

export type CareerItem = {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  active: boolean;
};
