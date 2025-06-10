'use client'
import Link from "next/link";
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { LogInIcon, Menu } from "lucide-react";

export function Header() {
    const[isOpen,setIsOpen] = useState(false);
    const session = null;
    const navItems=[
        {href:'#profissionais', label:"Profissionais"},        
    ]

const NavLinks = () =>(
    <>
    {navItems.map((item)=>(
        <Button 
        onClick={()=> setIsOpen(false)}
        key={item.href} 
        asChild 
        className="bg-transparent hover:-bg-transparent text-black shadow-none"
        >
            <Link href={item.href} className="text-base">
            {item.label}
            </Link>
        </Button>
    ))}

    {session ? (
        <Link href="/dashboard"
        className="flex items-center justify-center gap-2"
        >
            Acessar Clínica
        </Link>
    ):(
        <Button>
            <LogInIcon/>
            Fazer Login</Button>
    )}


    </>
)

    return (
        <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
            <div className="container mx-auto flex 
           items-center justify-between">
               {/* Logo */}
                <Link
                    className="text-3xl font-semibold text-zinc-900"
                    href="/">
                    Odonto<span className="text-emerald-500">Flow</span>
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center space-x-4">
                    <NavLinks/>
                </nav>


                {/* Menu Mobile */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="text-black hover:bg-transparent"
                            variant="ghost"
                            size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>


                    <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999] p-5">
                        <SheetTitle>Menu</SheetTitle>                        
                        <SheetDescription>Veja nossos links</SheetDescription>


                        <nav className="flex flex-col space-y-4 mt-6">
                            <NavLinks/>
                        </nav>


                    </SheetContent>


                </Sheet>
            </div>
        </header>
    )
}