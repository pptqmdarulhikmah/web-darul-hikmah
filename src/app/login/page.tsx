
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/20">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login Admin</CardTitle>
                    <CardDescription>
                        Masuk untuk mengelola website Darul Hikmah.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="admin@darulhikmah.sch.id" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" asChild>
                        <Link href="/dashboard">Masuk</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
