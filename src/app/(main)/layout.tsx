import { Header } from "./page";


export default function MainLayout({ children }: {children: React.ReactNode}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}