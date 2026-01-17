
"use client"

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Edit, Plus, Trash2, User } from "lucide-react"

interface Testimonial {
    id: string
    name: string
    role: string
    content: string
    avatar_url: string
    created_at: string
}

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    const fetchTestimonials = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            alert('Gagal mengambil data testimoni: ' + error.message)
        } else {
            setTestimonials(data || [])
        }
        setLoading(false)
    }

    const deleteTestimonial = async (id: string) => {
        if (!confirm('Apakah anda yakin ingin menghapus testimoni ini?')) return

        const { error } = await supabase
            .from('testimonials')
            .delete()
            .eq('id', id)

        if (error) {
            alert('Gagal menghapus testimoni: ' + error.message)
        } else {
            fetchTestimonials()
        }
    }

    useEffect(() => {
        fetchTestimonials()
    }, [])

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Testimoni</h2>
                    <p className="text-muted-foreground">Kelola ulasan dari santri atau wali santri.</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/testimonials/create"><Plus className="mr-2 h-4 w-4" /> Testimoni Baru</Link>
                </Button>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nama</TableHead>
                            <TableHead>Peran</TableHead>
                            <TableHead>Konten</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                    Memuat data...
                                </TableCell>
                            </TableRow>
                        ) : testimonials.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                    Belum ada testimoni.
                                </TableCell>
                            </TableRow>
                        ) : (
                            testimonials.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium flex items-center gap-2">
                                        {item.avatar_url ? (
                                            <img src={item.avatar_url} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                                <User className="w-4 h-4 text-muted-foreground" />
                                            </div>
                                        )}
                                        {item.name}
                                    </TableCell>
                                    <TableCell>{item.role}</TableCell>
                                    <TableCell className="max-w-[400px] truncate">{item.content}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/dashboard/testimonials/${item.id}/edit`}>
                                                    <Edit className="h-4 w-4 text-blue-500" />
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => deleteTestimonial(item.id)}>
                                                <Trash2 className="h-4 w-4 text-red-500" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
