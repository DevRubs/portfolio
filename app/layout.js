import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata = {
  title: 'Ruben | AI Automation Builder',
  description: 'I build AI-powered automations that solve real problems.',
  keywords: ['AI automation', 'Zapier', 'n8n', 'web development', 'freelance'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrains.variable} suppressHydrationWarning>
      <body className="scanlines" suppressHydrationWarning>
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}