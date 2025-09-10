import React from 'react';
import Image from 'next/image';
import projects from '../data/projects.json';
import ProjectItems from './ProjectItems';
import deskImage from '../../../public/images/desk.jpg';

export default function Projects() {
	return (
		<div className="p-8 font-montreal text-dark-grey flex flex-col gap-4">
			<div className="text-7xl font-semibold">Projects</div>
			<Image
				src={deskImage}
				alt="desk"
				className="rounded-xl hidden lg:block select-none border border-solid border-dark-grey border-2 my-4"
			/>
			<div className="text-xl md:text-2xl lg:text-3xl mb-8">
				{
					"Stuff I've built for learning purposes. And because it was fun. Mostly because it was fun."
				}
				<br />
				<span className="text-sm md:text-xl lg:text-2xl">
					{
						'Fueled by curiosity, caffeine, and the occasional existential dread.'
					}
				</span>
			</div>
			<ProjectItems projects={projects} />
		</div>
	);
}
