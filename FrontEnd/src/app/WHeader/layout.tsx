import Header from "./Components/Header";
export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <div>
            <Header/>
        </div>
        <body>
        <main>{children}</main>
        </body>
        </html>
    )
}