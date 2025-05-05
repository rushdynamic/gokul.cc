'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<div className="text-7xl md:text-[7vw] 2xl:text-[7vw] lg:mt-4 font-neue-metana font-bold select-none text-dark-grey flex flex-col items-center leading-none flex-wrap p-2">
				<div className="grow shrink text-center">Gokul Syam</div>
			</div>
			<div className="flex-grow"></div>
			<div className="h-full flex flex-col items-center justify-center">
				<div className="flex flex-col xl:flex-row gap-8 md:gap-14 items-center px-4 pb-10 md:pt-4 md:px-10 rounded-3xl">
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: 'easeInOut', duration: 0.5 }}
						className="group border-t border-solid border-dark-grey bg-gradient-to-t from-[transparent] to-[transparent] flex items-center justify-center py-8 md:py-12 cursor-help"
					>
						<div className="flex relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] 2xl:w-[550px] 2xl:h-[550px] 3xl:w-[700px] 3xl:h-[700px]">
							<Image
								src="/images/headshot-olive.png"
								layout="fill"
								objectFit="cover"
								alt="Profile picture"
								className="select-none w-[250px] md:w-[700px] "
							/>
							<Image
								src="/images/headshot-pixelated.svg"
								layout="fill"
								objectFit="cover"
								alt="Profile picture"
								className="select-none w-[250px] md:w-[700px] transition-opacity duration-[2000ms] ease-out opacity-100 group-hover:opacity-0"
							/>
							<div className="absolute bottom-2 left-2 opacity-0 group-active:opacity-100 text-white text-4xl md:text-6xl lg:text-9xl font-montreal select-none transition-opacity duration-200">
								New Delhi / 2019
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: 'easeInOut', duration: 0.75 }}
						className="md:max-w-[600px] font-montreal text-xl md:text-2xl lg:text-2xl xl:text-xl 2xl:text-3xl 3xl:text-4xl 3xl:leading-[1.4] text-dark-grey px-4"
					>
						<p className="text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl pb-3">
							Hi,
						</p>
						<p className="pb-3">
							{
								"I'm a full-stack engineer with over 7 years of professional experience in the industry, currently working out of "
							}
							<span className="font-fraunces italic">Bangalore, India</span>.
						</p>
						<p>
							{
								"I'm passionate about what I do, and I'm driven by the challenge of solving difficult, real-world problems."
							}
						</p>
					</motion.div>
				</div>
			</div>
		</>
	);
}
