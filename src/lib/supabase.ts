import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

// Se inicializa con placeholders si no están las variables para evitar que el build de Vercel explote
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
