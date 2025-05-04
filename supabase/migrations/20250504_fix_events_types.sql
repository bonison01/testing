
-- Create stored procedures to fetch events data
CREATE OR REPLACE FUNCTION public.get_featured_events()
RETURNS SETOF public.events
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM public.events
  WHERE is_featured = true
  ORDER BY event_date ASC
  LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.get_all_events()
RETURNS SETOF public.events
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM public.events
  ORDER BY event_date ASC;
$$;

CREATE OR REPLACE FUNCTION public.get_all_registrations()
RETURNS SETOF public.registrations
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM public.registrations
  ORDER BY created_at DESC;
$$;
