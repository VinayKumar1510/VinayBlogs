"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn'
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


const Navbar = () => {

    const [progress, setProgress] = useState(0)
    const pathname = usePathname()
    useEffect(() => {
        setProgress(30)

        setTimeout(() => {
            setProgress(70)
        }, 100);

        setTimeout(() => {
            setProgress(100)
        }, 600);
    }, [pathname])

    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 500);
    }, [])


    return (
        <nav className='p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10'>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className='container mx-auto flex justify-between items-center'>
                <Link href="/"><div className='text-lg font-bold'>
                    VINAYBLOG
                </div></Link>
                <div className='hidden md:flex space-x-4 items-center'>
                    <Link href="/" className="hover:underline hover:font-bold hover:scale-105 transition-transform duration-300 text-lg">Home</Link>
                    <Link href="/about" className="hover:underline hover:font-bold hover:scale-105 transition-transform duration-300 text-lg">About</Link>
                    <Link href="/blog" className="hover:underline hover:font-bold hover:scale-105 transition-transform duration-300 text-lg">Blog</Link>
                    <Link href="/contact" className="hover:underline hover:font-bold hover:scale-105 transition-transform duration-300 text-lg">Contact</Link>
                    <div className='flex items-center'>
                        <Link href="/login"><Button className="mx-1" variant="outline">Login</Button></Link>
                        <Link href="/signup"><Button className="mx-1" variant="outline">Sign Up</Button></Link>
                        <ModeToggle />
                    </div>
                </div>
                <div className='md:hidden'>
                    <span className='mx-2'>
                        <ModeToggle />
                    </span>
                    <Sheet>
                        <SheetTrigger>
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">VINAYBLOG</SheetTitle>
                                <SheetDescription>
                                    <div className='flex flex-col gap-6 text-lg font-bold text-gray-500'>
                                        <Link href="/">Home</Link>
                                        <Link href="/about">About</Link>
                                        <Link href="/blog">Blog</Link>
                                        <Link href="/contact">Contact</Link>
                                        <div>
                                            <Button className="mx-1" variant="outline">Login</Button>
                                            <Button className="mx-1" variant="outline">SignUp</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
