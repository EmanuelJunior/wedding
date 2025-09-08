export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      comments: {
        Row: {
          comment: string
          createdAt: string | null
          guestId: number | null
          id: number
          photoId: number | null
        }
        Insert: {
          comment: string
          createdAt?: string | null
          guestId?: number | null
          id?: number
          photoId?: number | null
        }
        Update: {
          comment?: string
          createdAt?: string | null
          guestId?: number | null
          id?: number
          photoId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comentarios_foto_id_fkey"
            columns: ["photoId"]
            isOneToOne: false
            referencedRelation: "photos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentarios_invitado_id_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
        ]
      }
      familyNuclei: {
        Row: {
          familyId: number | null
          guestId: number | null
          id: number
        }
        Insert: {
          familyId?: number | null
          guestId?: number | null
          id?: number
        }
        Update: {
          familyId?: number | null
          guestId?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "nucleos_familiares_familia_id_fkey"
            columns: ["familyId"]
            isOneToOne: false
            referencedRelation: "familys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nucleos_familiares_invitado_id_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
        ]
      }
      familys: {
        Row: {
          familyType: string | null
          id: number
          nickname: string | null
        }
        Insert: {
          familyType?: string | null
          id?: number
          nickname?: string | null
        }
        Update: {
          familyType?: string | null
          id?: number
          nickname?: string | null
        }
        Relationships: []
      }
      guests: {
        Row: {
          familyId: number | null
          fullName: string
          id: number
          invitationType: number | null
          phone: string
          role: Database["public"]["Enums"]["role"]
          status: Database["public"]["Enums"]["status"]
          tableId: number | null
          userId: string | null
          verseId: number | null
        }
        Insert: {
          familyId?: number | null
          fullName: string
          id?: number
          invitationType?: number | null
          phone: string
          role?: Database["public"]["Enums"]["role"]
          status?: Database["public"]["Enums"]["status"]
          tableId?: number | null
          userId?: string | null
          verseId?: number | null
        }
        Update: {
          familyId?: number | null
          fullName?: string
          id?: number
          invitationType?: number | null
          phone?: string
          role?: Database["public"]["Enums"]["role"]
          status?: Database["public"]["Enums"]["status"]
          tableId?: number | null
          userId?: string | null
          verseId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invitados_familia_id_fkey"
            columns: ["familyId"]
            isOneToOne: false
            referencedRelation: "familys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitados_mesa_id_fkey"
            columns: ["tableId"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitados_tipo_invitacion_id_fkey"
            columns: ["invitationType"]
            isOneToOne: false
            referencedRelation: "invitationTypes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitados_versiculo_id_fkey"
            columns: ["verseId"]
            isOneToOne: false
            referencedRelation: "verses"
            referencedColumns: ["id"]
          },
        ]
      }
      invitationTypes: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          guestId: number | null
          id: number
          messageId: number | null
          photoId: number | null
        }
        Insert: {
          guestId?: number | null
          id?: number
          messageId?: number | null
          photoId?: number | null
        }
        Update: {
          guestId?: number | null
          id?: number
          messageId?: number | null
          photoId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_foto_id_fkey"
            columns: ["photoId"]
            isOneToOne: false
            referencedRelation: "photos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_invitado_id_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_messageId_fkey"
            columns: ["messageId"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          createdAt: string | null
          guestId: number | null
          id: number
          message: string
        }
        Insert: {
          createdAt?: string | null
          guestId?: number | null
          id?: number
          message: string
        }
        Update: {
          createdAt?: string | null
          guestId?: number | null
          id?: number
          message?: string
        }
        Relationships: [
          {
            foreignKeyName: "mensajes_invitado_id_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
        ]
      }
      photos: {
        Row: {
          category: string
          createdAt: string | null
          description: string | null
          guestId: number | null
          id: number
          image: string
          updatedAt: string | null
        }
        Insert: {
          category: string
          createdAt?: string | null
          description?: string | null
          guestId?: number | null
          id?: number
          image: string
          updatedAt?: string | null
        }
        Update: {
          category?: string
          createdAt?: string | null
          description?: string | null
          guestId?: number | null
          id?: number
          image?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fotos_invitado_id_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
        ]
      }
      tables: {
        Row: {
          id: number
          numberTables: number
          places: number
        }
        Insert: {
          id?: number
          numberTables: number
          places: number
        }
        Update: {
          id?: number
          numberTables?: number
          places?: number
        }
        Relationships: []
      }
      verses: {
        Row: {
          chapter: string
          id: number
          subchapter: string
          title: string
        }
        Insert: {
          chapter: string
          id?: number
          subchapter: string
          title: string
        }
        Update: {
          chapter?: string
          id?: number
          subchapter?: string
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      role: "admin" | "guest"
      status: "confirm" | "reject" | "pending"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      role: ["admin", "guest"],
      status: ["confirm", "reject", "pending"],
    },
  },
} as const
