'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function CopyId({ id }: { id: string }) {
	const [copied, setCopied] = useState(false);
	return (
		<div
			className="flex flex-col items-center"
			onClick={() => {
				setCopied(true);
				navigator.clipboard.writeText(id);
				setTimeout(() => setCopied(false), 1500);
			}}
		>
			<motion.div
				className="text-xs font-jetbrains-mono bg-black text-white z-30 px-2 py-0.5"
				initial={{ opacity: 0 }}
				animate={{ opacity: copied ? 50 : 0 }}
			>
				Copied
			</motion.div>
			<Image
				src="/images/icons/copy.svg"
				alt="Copy to clipboard"
				className="opacity-50"
				height={20}
				width={20}
			/>
		</div>
	);
}

interface ContactItemProps {
	platform: string;
	id: string;
	icon: string;
	url: string;
}
function ContactItem({ platform, id, icon, url }: ContactItemProps) {
	return (
		<div className="flex gap-4 items-center text-xl cursor-pointer py-2 justify-between">
			<Link href={url} target="_blank" rel="noopener noreferrer">
				<div className="flex gap-4 items-center text-xl cursor-pointer">
					<Image src={icon} alt={platform} height={40} width={40} />
					<div className="flex flex-col">
						<div className="font-inter text-xl">{platform}</div>
						<div className="font-jetbrains-mono text-sm opacity-70">{id}</div>
					</div>
				</div>
			</Link>
			<CopyId id={id} />
			<div className="grow" />
		</div>
	);
}

function Contact() {
	return (
		<div className="p-8 font-montreal text-dark-grey flex flex-col gap-4">
			<div className="text-7xl font-semibold">Contact</div>
			<div className="text-xl md:text-2xl lg:text-3xl">
				Let's connect, feel free to reach out to me on any of these platforms
			</div>
			<div className="mx-auto w-3/4">
				<div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 py-4 md:py-12">
					<ContactItem
						platform="Email"
						id="notgokul@gmail.com"
						icon="/images/icons/gmail.svg"
						url={'mailto:notgokul@gmail.com'}
					/>
					<ContactItem
						platform="LinkedIn"
						id="gokulsyam"
						icon="/images/icons/linkedin2.svg"
						url={'https://www.linkedin.com/in/gokulsyam/'}
					/>
					<ContactItem
						platform="GitHub"
						id="@rushdynamic"
						icon="/images/icons/github.svg"
						url={'https://github.com/rushdynamic/'}
					/>
					<ContactItem
						platform="YouTube"
						id="@syamgokul"
						icon="/images/icons/youtube.svg"
						url={'https://www.youtube.com/@syamgokul'}
					/>
					<ContactItem
						platform="VSCO"
						id="@rushdynamic"
						icon="/images/icons/vsco.svg"
						url={'https://vsco.co/rushdynamic/gallery'}
					/>
				</div>
			</div>
		</div>
	);
}

export default Contact;
