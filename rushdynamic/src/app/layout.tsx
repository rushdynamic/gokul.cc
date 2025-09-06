import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { PostHogProvider } from './providers';

const inter = localFont({
	src: [
		{
			path: '../../public/fonts/InterTight-VariableFont_wght.ttf',
			weight: '500',
			style: 'normal',
		},
	],
	variable: '--font-inter',
});

const jetbrainsMono = localFont({
	src: [
		{
			path: '../../public/fonts/JetBrainsMono-VariableFont_wght.ttf',
			weight: '500',
			style: 'normal',
		},
	],
	variable: '--font-jetbrains-mono',
});

const fraunces = localFont({
	src: [
		{
			path: '../../public/fonts/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Fraunces-Italic-VariableFont_SOFT,WONK,opsz,wght.ttf',
			weight: '500',
			style: 'Italic',
		},
	],
	variable: '--font-fraunces',
});

const neueMetana = localFont({
	src: [
		{
			path: '../../public/fonts/NeueMetana-Regular.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NeueMetana-Regular.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NeueMetana-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-neue-metana',
});

const montreal = localFont({
	src: [
		{
			path: '../../public/fonts/NeueMontreal-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NeueMontreal-Medium.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NeueMontreal-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-montreal',
});

export const metadata: Metadata = {
	title: 'Gokul Syam',
	description:
		"I'm a full-stack engineer with over 7 years of professional experience in the industry, looking to solve difficult, real-world problems",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/x-png"
					href="./images/favicon.png"
					sizes="any"
				/>
			</head>
			<body
				className={`${inter.variable} ${neueMetana.variable} ${montreal.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
			>
				<PostHogProvider>
					<div className="h-full custom-bg flex flex-col items-center">
						<main className="min-h-screen md:w-[60%] md:max-w-[60%] flex flex-col justify-start max-w-full">
							<NavBar />
							{children}
							<div className="grow" />
							<Footer />
						</main>
					</div>
				</PostHogProvider>
			</body>
		</html>
	);
}
