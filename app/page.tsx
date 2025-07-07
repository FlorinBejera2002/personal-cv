"use client";

import { Button } from '@/components/ui/button';
import {
	Github,
	Linkedin,
	Mail,
	MapPin,
	ExternalLink,
	Lock,
	Calendar,
	Globe,
	Printer,
	ChevronLeft,
	ChevronRight,
	X,
	MonitorSmartphone,
	Server,
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import profilePicture from "../public/profilePicture.jpeg";
import image from "../public/image.png";
import image1 from "../public/image1.png";
import image2 from "../public/image2.png";
import image3 from "../public/image3.png";
import image4 from "../public/image4.png";
import image5 from "../public/image5.png";
import image6 from "../public/image6.png";
import image7 from "../public/image7.png";
import image8 from "../public/image8.png";
import image9 from "../public/image9.png";
import filmoteka from "../public/filmoteka.png";
import teens from "../public/teens.png";
import philippine from "../public/philippine.png";
import hebron from "../public/hebron.png";
import amicus from "../public/amicus.png";
import ice from "../public/ice.png";

export default function CV() {
	const [selectedImage, setSelectedImage] = useState<{ src: any; alt: string; title: string } | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Images for experience and projects
	const experienceImages = [
		{ src: image9, alt: "Philippine Arise for Christ", title: "Philippine Arise for Christ" },
		{ src: image1, alt: "Collaboration Form", title: "Collaboration Form with 20 Questions" },
		{ src: image2, alt: "Prayer", title: "Prayer - Main Interface" },
		{ src: image3, alt: "Add Prayer Form", title: "Add Prayer Form" },
		{ src: image4, alt: "Authentication System", title: "Google & Facebook Authentication" },
		{ src: image5, alt: "Arise for Christ Website", title: "Arise for Christ Website" },
		{ src: image6, alt: "Filmoteka", title: "Filmoteka - Movie Catalog" },
		{ src: image7, alt: "Arise for Christ Portal", title: "Arise for Christ Portal" },
		{ src: image8, alt: "Teens Arise for Christ", title: "Teens Arise for Christ" },
		{ src: image, alt: "Collaboration Portal", title: "Displaying Collaborators in the Arise for Christ Portal" },
		{ src: filmoteka, alt: "Filmoteka", title: "Filmoteka - Movie Catalog" },
		{ src: teens, alt: "Teens Arise for Christ", title: "Teens Arise for Christ" },
		{ src: philippine, alt: "Philippine Arise for Christ", title: "Philippine Arise for Christ" },
		{ src: hebron, alt: "Hebron AFC Home", title: "Hebron AFC Home" },
		{ src: amicus, alt: "AMiCUS Timișoara Form", title: "AMiCUS Timișoara Form" },
		{ src: ice, alt: "Ice Cream Website", title: "Ice Cream Website" },
	];

	const openImageModal = (imageIndex: number) => {
		setSelectedImage(experienceImages[imageIndex]);
		setCurrentImageIndex(imageIndex);
	};

	const closeImageModal = () => {
		setSelectedImage(null);
	};

	const navigateImage = (direction: string) => {
		const newIndex = direction === 'next'
			? (currentImageIndex + 1) % experienceImages.length
			: (currentImageIndex - 1 + experienceImages.length) % experienceImages.length;

		setCurrentImageIndex(newIndex);
		setSelectedImage(experienceImages[newIndex]);
	};

	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 print:py-0 print:bg-white">
			<div className="container mx-auto max-w-5xl bg-white shadow-2xl print:shadow-none rounded-lg overflow-hidden">
				{/* Header */}
				<header className="relative bg-slate-800 px-8 py-16 text-white">
					<div className="flex flex-col lg:flex-row lg:items-center gap-8">
						<div className="flex justify-center lg:justify-start">
							<div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl">
								<Image
									src={profilePicture}
									alt="Florin Bejera"
									className="object-cover"
									priority
								/>
							</div>
						</div>
						<div className="flex-1">
							<h1 className="mb-3 text-center text-5xl font-bold lg:text-left tracking-tight">
								Florin Bejera
							</h1>
							<h2 className="mb-6 text-center text-2xl font-light lg:text-left text-blue-100">
								Frontend Developer
							</h2>
							<div className="flex flex-wrap justify-center gap-3 lg:justify-start">
								<a
									href="https://www.linkedin.com/in/florin-bejera-1b213b263/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-xs hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Linkedin className="h-4 w-4" />
									<span>Florin Bejera</span>
								</a>
								<a
									href="https://github.com/FlorinBejera2002"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-xs hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Github className="h-4 w-4" />
									<span>FlorinBejera2002</span>
								</a>
								<a
									href="mailto:florinpetru0306@gmail.com"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-xs hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Mail className="h-4 w-4" />
									<span>florinpetru0306@gmail.com</span>
								</a>
								<span className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-xs border border-white/20">
									<MapPin className="h-4 w-4" />
									<span>Timișoara, Romania</span>
								</span>
							</div>
						</div>
					</div>
					<div className="absolute right-3 top-3 print:hidden">
						<Button
							onClick={() => window.print()}
							variant="outline"
							size="sm"
							className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-xs font-medium text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
						>
							<Printer className="h-4 w-4" />
							Print CV
						</Button>
					</div>
				</header>

				{/* Main Content */}
				<div className="p-8 lg:p-12">
					{/* About Me */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">About Me</h3>
						</div>
						<p className="text-slate-600 text-lg leading-relaxed">
							I am passionate about Frontend programming and started learning in 2022. I studied web development for one and a half years, after which I began working at Arise for Christ. I enjoy working on the design of websites and applications. In my free time, I like to spend time in nature or play sports.
						</p>
					</section>

					{/* Skills */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Technical Skills</h3>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
							{[{
								name: 'React',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg"
										alt="React"
										width={16}
										height={16}
										style={{ fill: '#61DAFB' }}
									/>
								),
							},
							{
								name: 'Next.js',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg"
										alt="Next.js"
										width={16}
										height={16}
										style={{ fill: '#000000' }}
									/>
								),
							},
							{
								name: 'TypeScript',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg"
										alt="TypeScript"
										width={16}
										height={16}
										style={{ fill: '#3178C6' }}
									/>
								),
							},
							{
								name: 'JavaScript',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg"
										alt="JavaScript"
										width={16}
										height={16}
										style={{ fill: '#F7DF1E' }}
									/>
								),
							},
							{
								name: 'Tailwind CSS',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg"
										alt="Tailwind CSS"
										width={16}
										height={16}
										style={{ fill: '#38B2AC' }}
									/>
								),
							},
							{
								name: 'HTML5',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg"
										alt="HTML5"
										width={16}
										height={16}
										style={{ fill: '#E34F26' }}
									/>
								),
							},
							{
								name: 'CSS3',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/css3.svg"
										alt="CSS3"
										width={16}
										height={16}
										style={{ fill: '#1572B6' }}
									/>
								),
							},
							{
								name: 'SCSS',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sass.svg"
										alt="SCSS"
										width={16}
										height={16}
										style={{ fill: '#CC6699' }}
									/>
								),
							},
							{
								name: 'Git',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg"
										alt="Git"
										width={16}
										height={16}
										style={{ fill: '#F05032' }}
									/>
								),
							},
							{
								name: 'REST APIs',
								icon: <Server className="h-4 w-4" />,
							},
							{
								name: 'Responsive Design',
								icon: <MonitorSmartphone className="h-4 w-4" />,
							},
							{
								name: 'Supabase',
								icon: (
									<Image
										src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/supabase.svg"
										alt="Supabase"
										width={16}
										height={16}
										style={{ fill: '#3ECF8E' }}
									/>
								),
							},
							].map((skill) => (
								<span
									key={skill.name}
									className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-slate-50 px-4 py-3 text-sm font-medium text-slate-700 border border-slate-200"
								>
									{skill.icon}
									{skill.name}
								</span>
							))}
						</div>
					</section>

					{/* Experience */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Experience</h3>
						</div>

						<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 mb-6">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
								<div>
									<p className="text-blue-600 font-medium mb-1">Arise for Christ Organization</p>
									<h4 className="text-xl font-semibold text-slate-700">Frontend Developer</h4>
								</div>
								<div className="flex items-center gap-2 text-blue-600 font-medium">
									<Calendar className="h-4 w-4" />
									<span>February 2024 - Present</span>
								</div>
							</div>

							<div className="space-y-6">
								<p className="text-slate-600 mb-3">
									At the Arise for Christ organization, I actively work on:
								</p>
								{/* Internal Portal (CMS) */}
								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									Internal Portal (CMS)
								</h5>
								<ul className="text-sm text-slate-600 space-y-1 ml-4">
									<li>• Working on the development of a CMS (Content Management System) platform to facilitate efficient content and data management for the organization.</li>
									<li>• Implemented CRUD (Create, Read, Update, Delete) functionalities for various types of information: collaborators, forms, evangelization requests, statistics, etc.</li>
									<li>• Using React Query for a smooth experience, caching data for fast retrieval and minimizing backend calls.</li>
									<li>• The portal is connected to a custom backend, with databases managed through Supabase.</li>
								</ul>

								{/* Main Website */}
								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									Main Website
								</h5>
								<ul className="text-sm text-slate-600 space-y-1 ml-4">
									<li>• Built the website from scratch using React with Next.js, for a modern and performant architecture.</li>
									<li>• For styling, I use Tailwind CSS, enabling rapid development and responsive design adapted to all devices.</li>
									<li>• Ensured the design is clean and aligns with the organization’s values.</li>
								</ul>

								{/* Prayer */}
								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									Prayer
								</h5>
								<p className="text-slate-600 mb-3">
									A dedicated page for individuals who wish to add prayer requests or pray for others’ prayers.
								</p>
								<div className="space-y-2">
									<p className="text-sm text-slate-700"><span className="font-medium">Main Features:</span></p>
									<ul className="text-sm text-slate-600 space-y-1 ml-4">
										<li>• Displaying a list of all added prayers</li>
										<li>• “I’m praying” button to show support for a prayer request</li>
										<li>• Authentication via Google or Facebook</li>
										<li>• Form for adding a prayer request, with the option to remain anonymous</li>
										<li>• Content management: adding and deleting responses or prayers</li>
										<li>• Data management through a dedicated backend, with storage in Supabase tables</li>
									</ul>
								</div>

								{/* Collaborate with the Arise for Christ Team */}
								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
									Collaborate with the Arise for Christ Team
								</h5>
								<p className="text-slate-600 mb-3">
									A dedicated page for individuals who wish to get involved in the Arise for Christ mission and collaborate with the team.
								</p>
								<div className="space-y-2">
									<p className="text-sm text-slate-700"><span className="font-medium">Main Features:</span></p>
									<ul className="text-sm text-slate-600 space-y-1 ml-4">
										<li>• Form with 20 questions implemented on the website</li>
										<li>• Questions organized into slides and categories for a structured experience</li>
										<li>• Backend connection, with data storage in Supabase tables</li>
										<li>• Displaying collaborator data in the Arise for Christ Portal</li>
										<li>• Reusable component for adding and updating collaborators</li>
										<li>• Deletion and PDF generation functionalities for collaborator information</li>
									</ul>
								</div>

								{/* Project Image Gallery */}
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
									{experienceImages.slice(0, 10).map((image, index) => (
										<div
											key={index}
											className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
											onClick={() => openImageModal(index)}
										>
											<Image src={image.src} alt={image.alt} width={800} height={600} />
											<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
												<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
													<div className="bg-white rounded-full p-2 shadow-lg">
														<ExternalLink className="h-4 w-4 text-slate-600" />
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
								<div>
									<p className="text-blue-600 font-medium mb-1">GoIT Academy</p>
									<h4 className="text-xl font-semibold text-slate-700">Full Stack Developer Course</h4>
								</div>
								<div className="flex items-center gap-2 text-blue-600 font-medium">
									<Calendar className="h-4 w-4" />
									<span>January 2022 - December 2022</span>
								</div>
							</div>
							<p className="text-slate-600 mb-3">
								During the course, I learned HTML, CSS, SCSS, JavaScript, and Node.js.
							</p>
							<p className="text-slate-600 mb-3">
								I also had the opportunity to learn how to work in a team.
							</p>
							<p className="text-slate-600 mb-3">
								In addition to the course, I learned a lot alongside a few friends who guided me in choosing materials and what to study.
							</p>
						</div>
					</section>

					{/* Certifications */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Certifications</h3>
						</div>
						<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
								<h4 className="text-xl font-semibold text-slate-700">Full Stack Developer Course</h4>
								<div className="flex items-center gap-2 text-blue-600 font-medium">
									<Calendar className="h-4 w-4" />
									<span>2022-2023</span>
								</div>
							</div>
							<p className="text-slate-600 font-medium">GoIT Academy</p>
						</div>
					</section>

					{/* Projects */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Projects</h3>
						</div>

						<div className="grid gap-6">
							{/* Arise for Christ Portal */}
							<div className="bg-gradient-to-r from-slate-50 to-red-50 rounded-xl p-3 border border-slate-200 flex flex-col md:flex-row gap-4 w-full">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200 w-fit"
									onClick={() => openImageModal(7)}
								>
									<Image
										src={image7}
										alt="Arise for Christ Portal"
										className="object-cover rounded-md w-full md:w-52"
										width={200}
										height={100}
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
											<div className="bg-white rounded-full p-2 shadow-lg">
												<ExternalLink className="h-4 w-4 text-slate-600" />
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1 w-full">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Arise for Christ Portal</h4>
										<div className="flex items-center gap-2 text-red-600 font-medium">
											<Lock className="h-4 w-4" />
											<span>Private</span>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Internal portal for efficient data management, built with Vite and TypeScript, using the Shadcn interface. Integrated with a backend for real-time updates.
									</p>
								</div>
							</div>

							{/* Arise for Christ Website */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex flex-col md:flex-row gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(10)}
								>
									<Image
										src={image9}
										alt="Arise for Christ Website"
										className="object-cover rounded-md w-full md:w-52"
										width={200}
										height={100}
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
											<div className="bg-white rounded-full p-2 shadow-lg">
												<ExternalLink className="h-4 w-4 text-slate-600" />
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Arise for Christ Website</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://www.ariseforchrist.com/ro"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Live Website</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Website for the Arise for Christ organization. Built from scratch using Next.js and Tailwind CSS.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://www.ariseforchrist.com</p>
								</div>
							</div>

							{/* Filmoteka */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex flex-col md:flex-row gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(10)}
								>
									<Image
										src={filmoteka}
										alt="Filmoteka"
										className="object-cover rounded-md w-full md:w-52"
										width={200}
										height={100}
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
											<div className="bg-white rounded-full p-2 shadow-lg">
												<ExternalLink className="h-4 w-4 text-slate-600" />
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Filmoteka</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://cristina-irina.github.io/Filmoteka/index.html"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Live Website</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Movie catalog, created together with the team during the Full Stack Developer course.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://cristina-irina.github.io/Filmoteka/index.html</p>
								</div>
							</div>

							{/* Teens Arise for Christ */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex flex-col md:flex-row gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(11)}
								>
									<Image
										src={teens}
										alt="Teens Arise for Christ"
										className="object-cover rounded-md w-full md:w-52"
										width={200}
										height={100}
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
											<div className="bg-white rounded-full p-2 shadow-lg">
												<ExternalLink className="h-4 w-4 text-slate-600" />
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Teens Arise for Christ</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://teens-ariseforchrist.netlify.app/en"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Live Website</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Presentation website for the Arise for Christ Teens organization in America.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://teens-ariseforchrist.netlify.app</p>
								</div>
							</div>

							{/* Philippine Arise for Christ */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex flex-col md:flex-row gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(12)}
								>
									<Image
										src={philippine}
										alt="Philippine Arise for Christ"
										className="object-cover rounded-md w-full md:w-52"
										width={200}
										height={100}
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
											<div className="bg-white rounded-full p-2 shadow-lg">
												<ExternalLink className="h-4 w-4 text-slate-600" />
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Philippine Arise for Christ</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://philippine-ariseforchrist.netlify.app/en"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Live Website</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Presentation website for the Arise for Christ Philippines organization.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://philippine-ariseforchrist.netlify.app</p>
								</div>
							</div>

							{/* Hebron AFC Home */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex flex-col md:flex-row gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(13)}
								>
									<Image
										src={hebron}
										alt="Hebron AFC Home"
										className="object-cover rounded-md w-full md:w-52"
										width={200}
										height={100}
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
											<div className="bg-white rounded-full p-2 shadow-lg">
												<ExternalLink className="h-4 w-4 text-slate-600" />
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Hebron AFC Home</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://hebronafchome.netlify.app/"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Live Website</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Simple presentation website for an American company.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://hebronafchome.netlify.app/</p>
								</div>
							</div>

							{/* AMiCUS Timișoara Form */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex flex-col md:flex-row gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(14)}
								>
									<Image
										src={amicus}
										alt="AMiCUS Timișoara Form"
										className="object-cover rounded-md w-full md:w-52"
										width={200}
										height={100}
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
											<div className="bg-white rounded-full p-2 shadow-lg">
												<ExternalLink className="h-4 w-4 text-slate-600" />
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">AMiCUS Timișoara Form</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://amicustimisoara.netlify.app/"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Live Website</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Simple registration form integrated with Supabase for data collection.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://amicustimisoara.netlify.app/</p>
								</div>
							</div>

							{/* Ice Cream Website */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex flex-col md:flex-row gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(15)}
								>
									<Image
										src={ice}
										alt="Ice Cream Website"
										className="object-cover rounded-md w-full md:w-52"
										width={200}
										height={100}
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
											<div className="bg-white rounded-full p-2 shadow-lg">
												<ExternalLink className="h-4 w-4 text-slate-600" />
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Ice Cream Website</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://dris11.github.io/Project-Ice-Cream/"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Live Website</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Static landing page with an attractive design created during the Full Stack Developer course. I worked with a team on HTML structure, CSS animations, and JavaScript interactivity.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://dris11.github.io/Project-Ice-Cream/</p>
								</div>
							</div>
						</div>
					</section>

					{/* Languages */}
					<section>
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Languages</h3>
						</div>
						<div className="flex flex-wrap gap-4">
							<div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg px-6 py-4 border border-slate-200">
								<div className="h-3 w-3 bg-green-500 rounded-full"></div>
								<span className="font-medium text-slate-700">Romanian (Native)</span>
							</div>
							<div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg px-6 py-4 border border-slate-200">
								<div className="h-3 w-3 bg-blue-500 rounded-full"></div>
								<span className="font-medium text-slate-700">English (B1)</span>
							</div>
						</div>
					</section>
				</div>

				{/* Footer */}
				<footer className="bg-gradient-to-r from-slate-100 to-blue-100 p-6 text-center text-sm text-slate-600 print:hidden border-t border-slate-200">
					<p className="font-medium">© {new Date().getFullYear()} Florin Bejera - Frontend Developer</p>
					<p className="mt-1 text-xs">Built with Next.js and Tailwind CSS</p>
				</footer>
			</div>

			{/* Image Modal */}
			{selectedImage && (
				<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
					<div className="relative max-w-4xl max-h-fit bg-white rounded-lg overflow-hidden">
						{/* Close Button */}
						<button
							onClick={closeImageModal}
							className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
						>
							<X className="h-6 w-6" />
						</button>

						{/* Navigation Arrows */}
						<button
							onClick={() => navigateImage('prev')}
							className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
						>
							<ChevronLeft className="h-6 w-6" />
						</button>

						<button
							onClick={() => navigateImage('next')}
							className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
						>
							<ChevronRight className="h-6 w-6" />
						</button>

						{/* Image */}
						<div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
							<Image src={selectedImage.src} alt={selectedImage.alt} width={800} height={600} />
						</div>

						{/* Image Title Below */}
						<div className="bg-white p-4 border-t">
							<h4 className="font-semibold text-slate-800">{selectedImage.title}</h4>
							<p className="text-sm text-slate-600 mt-1">
								{currentImageIndex + 1} of {experienceImages.length}
							</p>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}