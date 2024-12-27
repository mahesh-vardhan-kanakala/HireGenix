export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string
          title: string
          company: string
          location: string
          type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote'
          description: string
          requirements: string[]
          salary: string | null
          status: 'draft' | 'published' | 'closed'
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          company: string
          location: string
          type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote'
          description: string
          requirements?: string[]
          salary?: string | null
          status?: 'draft' | 'published' | 'closed'
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          company?: string
          location?: string
          type?: 'Full-time' | 'Part-time' | 'Contract' | 'Remote'
          description?: string
          requirements?: string[]
          salary?: string | null
          status?: 'draft' | 'published' | 'closed'
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}