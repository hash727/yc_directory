import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | YC directory - Ballari Karnataka India",
        default: "YC direcotry - Bellary, Karnataka, India"
    },
    description: 'The YC directory pitch your startup at Bellary Karnataka area which is located in India',
    metadataBase: new URL('https://yc-directory-roan.vercel.app/')
}
export default function Layout({children}: Readonly<{children: React.ReactNode}>){
    return(
        <main className="font-work-sans">
            <Navbar />
            
            {children}
        </main>
    )
}