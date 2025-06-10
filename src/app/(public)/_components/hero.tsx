import { Button } from "@/components/ui/button";
import Image from "next/image";
import DoctorImage from '../.../../../../../public/doctor-hero.png'
export function Hero() {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8 pb-4 sm:pb-0">
                <main className="flex items-center justify-center">
                    <article className="m-w-3xl space-y-8 flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-light">Encontre <span className="text-emerald-500">os melhores profissionais</span> em um único local!</h1>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl">Nós somos uma plataforma para profissionais da saúde com foco em agilizar o seu atendimento de forma simplificada e organizada.</p>
                        <Button
                            className="bg-emerald-500
                    hover:bg-emerald-400
                    w-fit px-6 font-semibold">Encontre uma clínica</Button>
                    </article>
                    <div className="hidden lg:block">
                        <Image
                            src={DoctorImage}
                            alt="Image Doctor"
                            width={340}
                            height={400}
                            className="object-contain"
        priority
        quality={100}
                        />

                    </div>
                </main>
            </div>
        </section>
    )
}