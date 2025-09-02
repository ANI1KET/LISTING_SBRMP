import "./globals.css";
import type { Metadata } from "next";

import { Toaster } from "./components/ui/toaster";
import AuthProvider from "./providers/authProvider";
import ReactQueryProvider from "./providers/reactqueryProvider";

export const metadata: Metadata = {
  icons: {
    icon: "/AFNOSANSAAR.png",
  },
  title:
    "AfnoSansaar - All-in-One Marketplace for Rooms, Hostels, Vehicles, Houses & Lands",
  description:
    "Discover and list rooms, hostels, vehicles, houses, lands, and local services in your city. SBRMP makes it easy to find, rent, buy, or sell properties and services with expert guidance and trusted listings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AuthProvider>
            <Toaster />
            {children}
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
