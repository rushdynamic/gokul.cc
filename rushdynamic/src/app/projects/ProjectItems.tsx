'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectItemTagProps {
	tagName: string;
}
const ProjectItemTag = ({ tagName }: ProjectItemTagProps) => {
	return (
		<div className="w-fit flex items-center justify-center py-0.5 px-2 rounded-xl text-xs text-light-grey border border-solid bg-dark-grey border-dark-grey font-jetbrains-mono">
			{tagName}
		</div>
	);
};

interface ProjectItemProps {
	title: string;
	year: number;
	image: string;
	description: string;
	tags: string[];
	git: string;
}
const ProjectItem = ({
	title,
	year,
	image,
	description,
	tags,
	git,
}: ProjectItemProps) => {
	return (
		<div className="block w-full min-w-0">
			<Link href={git} passHref legacyBehavior>
				<a target="_blank" rel="noopener noreferrer">
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 400, damping: 25 }}
						className="group h-full w-full min-w-50 lg:min-w-80 bg-gradient-to-r from-[#d2c9a0] to-[#d2c9a0] flex flex-col lg:flex-row lg:gap-8  hover:cursor-pointer items-stretch border border-solid border-dark-grey"
					>
						<div className="flex items-center justify-center p-6 bg-dark-grey min-w-fit">
							<Image src={image} alt={title} height={200} width={200} />
						</div>
						<div className="flex flex-col p-6 w-full gap-3">
							<div className="flex items-start justify-between gap-2 flex-col lg:flex-row lg:items-center">
								<div className="text-4xl font-semibold">{title}</div>
								<div className="text-sm px-2 border border-solid border-dark-grey group-hover:bg-dark-grey group-hover:text-light-grey">
									{year}
								</div>
							</div>
							<div className="text-lg">{description}</div>
							<div className="grow" />
							<div className="flex justify-end flex-wrap gap-1">
								{tags.map((tag) => (
									<ProjectItemTag key={tag} tagName={tag} />
								))}
							</div>
						</div>
					</motion.div>
				</a>
			</Link>
		</div>
	);
};

interface ProjectItemsProps {
	projects: ProjectItemProps[];
}
const ProjectItems = ({ projects }: ProjectItemsProps) => {
	return (
		<div className="w-full flex items-start justify-center gap-6 flex-col">
			{projects.map((project) => (
				<ProjectItem
					key={project.title}
					title={project.title}
					year={project.year}
					image={project.image}
					description={project.description}
					tags={project.tags}
					git={project.git}
				/>
			))}
		</div>
	);
};

export default ProjectItems;
