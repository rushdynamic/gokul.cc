'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface NavBarItemProps {
	label: string;
	url: string;
}
const NavBarItem = ({ label, url }: NavBarItemProps) => {
	return (
		<Link href={url}>
			<div className="before:content-['['] before:invisible after:content-[']'] after:invisible hover:before:visible hover:after:visible hover:cursor-pointer">
				{label}
			</div>
		</Link>
	);
};

export default function NavBar() {
	const [currTime, setCurrTime] = useState<any>('');
	useEffect(() => {
		setCurrTime(new Date().toLocaleTimeString('en-us'));
		const secInterval = setInterval(
			() => setCurrTime(new Date().toLocaleTimeString('en-us')),
			1000
		);

		return () => clearInterval(secInterval);
	}, []);
	return (
		<motion.div
			initial={{ y: -48 }}
			animate={{ y: 0 }}
			transition={{ type: 'spring', stiffness: 150 }}
			className="h-12 border-b border-b-dark-grey flex items-center p-2 font-jetbrains-mono mb-4 text-dark-grey mx-8"
		>
			<div className="flex w-full justify-start items-center">
				<Link href="/">
					<div className="font-jetbrains-mono text-xs cursor-pointer">
						gokul.cc
					</div>
				</Link>
				<div className="flex-grow flex items-center justify-end md:justify-center md:gap-4 text-xs md:text-sm">
					<NavBarItem label="Projects" url="/projects" />
					<NavBarItem label="Contact" url="/contact" />
					<NavBarItem label="Resume" url="/resume" />
				</div>
				<div className="hidden md:block" suppressHydrationWarning>
					{currTime}
				</div>
			</div>
		</motion.div>
	);
}
