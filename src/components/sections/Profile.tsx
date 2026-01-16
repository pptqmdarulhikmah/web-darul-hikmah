
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Profile = () => {
    return (
        <section id="profile" className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <Badge className="mb-4" variant="outline">Tentang Kami</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Membangun Peradaban dengan Al-Qur'an</h2>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            PPTQ Muhammadiyah Darul Hikmah Sragen adalah lembaga pendidikan pesantren modern yang memadukan antara kurikulum Tahfizhul Qur’an, Pendidikan Nasional, dan Khas pesantren.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Lahir dari semangat untuk menghadirkan generasi Qur’ani yang kokoh akidahnya, mulia akhlaknya, dan luas wawasannya, Darul Hikmah berkomitmen menjadi benteng umat di tengah derasnya arus tantangan zaman.
                        </p>
                        <div className="mt-8">
                            <p className="font-semibold text-primary">Ustadz Arief Rahman Hakim, S.Pd.I</p>
                            <p className="text-sm text-muted-foreground">Direktur PPTQM Darul Hikmah Sragen</p>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden bg-muted flex items-center justify-center border">
                        {/* Placeholder for Profile Video/Image */}
                        <span className="text-muted-foreground">Foto/Video Profil Pesantren</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="border-none shadow-lg bg-primary/5">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Visi</h3>
                            <p className="text-lg text-muted-foreground">
                                Mewujudkan generasi Qur'ani berjiwa da'i, beraqidah shahihah,
                                berakhlaqul karimah dan berilmu pengetahuan.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Misi</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="font-bold text-primary">1.</span>
                                    Menyelenggarakan Pendidikan berbasis Al-Qur'an dan As Sunnah
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-primary">2.</span>
                                    Menyiapkan kader dakwah yang berkualitas
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-primary">3.</span>
                                    Mendidik generasi Islam dengan tauhid, ilmu, dan amal
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-primary">4.</span>
                                    Membekali ilmu pengetahuan dan keterampilan
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Profile
