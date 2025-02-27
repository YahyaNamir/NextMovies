import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>NextMovies - Explore Movies</title>
            </head>
            <body className="antialiased dark">{children}</body>
        </html>
    );
}
