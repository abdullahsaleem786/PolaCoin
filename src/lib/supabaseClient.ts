// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kerdubmuvckygjergkog.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlcmR1Ym11dmNreWdqZXJna29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MjI1MjgsImV4cCI6MjA2MjE5ODUyOH0.mHOJZVnB_-LFnWg7G7bTROqxDj5MMPWa0rGbMgXiTFk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export default supabase;