import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({variable:"--font-geist",subsets:["latin"]});
const mono = Geist_Mono({variable:"--font-mono",subsets:["latin"]});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const image = `${protocol}://${host}/og.png`;
  return {
    title: "CompilaLab — Laboratorio de Compiladores",
    description: "Curso interactivo de Compiladores 2026: 21 semanas, cuestionarios, progreso y laboratorios del lexer al código intermedio.",
    icons:{icon:[{url:"/favicon.svg",type:"image/svg+xml"},{url:"/favicon.ico"}],shortcut:"/favicon.ico"},
    openGraph:{title:"CompilaLab",description:"Del código fuente a la máquina.",images:[image],locale:"es_GT",type:"website"},
    twitter:{card:"summary_large_image",title:"CompilaLab",description:"Del código fuente a la máquina.",images:[image]},
  };
}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>}
