import '@/app/ui/global.css'
import {inter} from "@/app/ui/fonts";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Acme Dashboard',
        default: 'Home | Acme Dashboard',
    },
    description: 'The example for the Next.js Learn Course',
    metadataBase: new URL('https://nextjs-dashboard.vercel.app'),
};

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
