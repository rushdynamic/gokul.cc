import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import packageJson from '../../package.json';

interface ContactIconProps {
	img: string;
	alt: string;
	url: string;
}
const ContactIcon = ({ img, alt, url }: ContactIconProps) => {
	return (
		<Link href={url} passHref legacyBehavior>
			<a target="_blank" rel="noopener noreferrer">
				<Image
					className="opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
					src={img}
					alt={alt}
					height={20}
					width={20}
				/>
			</a>
		</Link>
	);
};

export default function Footer() {
	const ver = `v${packageJson.version}`;
	return (
		<div className="flex w-full justify-center items-center gap-8 pb-4 px-4 relative left-1/2 -translate-x-1/2 bottom-0">
			<ContactIcon
				img="/images/icons/github.svg"
				alt="GitHub"
				url="https://github.com/rushdynamic"
			/>
			<ContactIcon
				img="/images/icons/linkedin.svg"
				alt="LinkedIn"
				url="https://www.linkedin.com/in/gokulsyam/"
			/>
			<Link
				href={`https://github.com/rushdynamic/gokul.cc/releases/tag/${ver}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="absolute right-8 text-xs text-dark-grey font-jetbrains-mono opacity-30 hover:opacity-100 transition-opacity">
					{ver}
				</span>
			</Link>
		</div>
	);
}
