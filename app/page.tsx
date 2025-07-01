"use client";

import { Button } from '@/components/ui/button';
import {
	Github,
	Linkedin,
	Mail,
	MapPin,
	Download,
	ExternalLink,
	Lock,
	Calendar,
	Code,
	Globe
} from 'lucide-react';
import profilePicture from "../public/profilePicture.jpeg";
import Image from "next/image";
import Link from 'next/link';

export default function CV() {

	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 print:py-0 print:bg-white">
			<div className="container mx-auto max-w-5xl bg-white shadow-2xl print:shadow-none rounded-lg overflow-hidden">
				{/* Header */}
				<header className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-blue-800 px-8 py-16 text-white">
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
								<Link
									href="https://www.linkedin.com/in/florin-bejera-1b213b263/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Linkedin className="h-4 w-4" />
									<span>LinkedIn</span>
								</Link>
								<Link
									href="https://github.com/FlorinBejera2002"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Github className="h-4 w-4" />
									<span>GitHub</span>
								</Link>
								<Link
									href="mailto:florinbejera@gmail.com"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Mail className="h-4 w-4" />
									<span>Email</span>
								</Link>
								<span className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm border border-white/20">
									<MapPin className="h-4 w-4" />
									<span>Timișoara, Romania</span>
								</span>
							</div>
						</div>
					</div>
					<div className="absolute right-6 top-6 print:hidden">
						<Button
							onClick={() => window.print()}
							variant="outline"
							size="sm" className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
						>
							<Download className="h-4 w-4" />
							Download CV
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
							I'm a Frontend Developer and started learning programming in 2022. I was working in construction and studied web development in my free time. I enjoy working on the design of websites and apps. In my free time, I like spending time in nature or doing sports.
						</p>
					</section>

					{/* Skills */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Technical Skills</h3>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
							{[
								'Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS',
								'HTML5', 'CSS3', 'SCSS', 'Git', 'REST APIs', 'Responsive Design', 'Supabase'
							].map((skill) => (
								<span key={skill} className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-slate-50 px-4 py-3 text-sm font-medium text-slate-700 border border-slate-200">
									<Code className="h-4 w-4 text-blue-600" />
									{skill}
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
						<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
								<h4 className="text-xl font-semibold text-slate-700">Frontend Developer</h4>
								<div className="flex items-center gap-2 text-blue-600 font-medium">
									<Calendar className="h-4 w-4" />
									<span>Feb 2023 - Present</span>
								</div>
							</div>
							<p className="text-slate-600">
								Developing modern, responsive web applications with focus on user experience and performance optimization.
							</p>
						</div>
					</section>

					{/* Certifications */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Certifications</h3>
						</div>
						<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200">
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
							<h3 className="text-3xl font-bold text-slate-800"> Projects</h3>
						</div>

						<div className="grid gap-6">
							{/* Arise for Christ Portal */}
							<div className="bg-gradient-to-r from-slate-50 to-red-50 rounded-xl p-6 border border-slate-200">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
									<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Arise for Christ Portal</h4>
									<div className="flex items-center gap-2 text-red-600 font-medium">
										<Lock className="h-4 w-4" />
										<span>Private</span>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Internal portal for efficient data management, built with Vite and TypeScript, using the Shadcn interface. Integrated with backend for real-time updates.
								</p>
							</div>

							{/* Arise for Christ Website */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200 transition-shadow duration-300">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
									<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Arise for Christ Website</h4>
									<div className="flex items-center gap-4">
										<Link
											href="https://www.ariseforchrist.com/ro"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</Link>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Modern website for a Christian organization. Completely redesigned the layout, optimized for mobile,
									and implemented a clean interface using Next.js and Tailwind CSS.
								</p>
								<p className="text-xs text-slate-500 mt-2">URL: https://www.ariseforchrist.com</p>
							</div>

							{/* Teens Arise for Christ */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200 transition-shadow duration-300">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
									<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Teens Arise for Christ</h4>
									<div className="flex items-center gap-4">
										<Link
											href="https://teens-ariseforchrist.netlify.app/en"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</Link>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Community platform for teens to grow in faith through resources and events.
								</p>
								<p className="text-xs text-slate-500 mt-2">URL: https://teens-ariseforchrist.netlify.app</p>
							</div>

							{/* Philippine Arise for Christ */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200 transition-shadow duration-300">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
									<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Philippine Arise for Christ</h4>
									<div className="flex items-center gap-4">
										<Link
											href="https://philippine-ariseforchrist.netlify.app/en"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</Link>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Christian platform dedicated to the Filipino community, offering spiritual resources and events.
								</p>
								<p className="text-xs text-slate-500 mt-2">URL: https://philippine-ariseforchrist.netlify.app</p>
							</div>

							{/* Hebron AFC Home */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200 transition-shadow duration-300">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
									<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Hebron AFC Home</h4>
									<div className="flex items-center gap-4">
										<Link
											href="https://hebronafchome.netlify.app/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</Link>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Simple and professional website for an American company.
								</p>
								<p className="text-xs text-slate-500 mt-2">URL: https://hebronafchome.netlify.app/</p>
							</div>

							{/* Amicus Timisoara Form */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200 transition-shadow duration-300">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
									<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">AMiCUS Timisoara Form</h4>
									<div className="flex items-center gap-4">
										<Link
											href="https://amicustimisoara.netlify.app/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</Link>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Simple registration form integrated with Supabase for data collection.
								</p>
								<p className="text-xs text-slate-500 mt-2">URL: https://amicustimisoara.netlify.app/</p>
							</div>

							{/* Ice Cream Website */}
							{/* <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200 transition-shadow duration-300">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
									<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Ice Cream Website</h4>
									<div className="flex items-center gap-4">
										<Link
											href="https://dris11.github.io/Project-Ice-Cream/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</Link>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Static landing page with attractive design created during Full Stack Developer course.
									Worked on HTML structure, CSS animations, and JavaScript interactivity.
								</p>
								<p className="text-xs text-slate-500 mt-2">URL: https://dris11.github.io/Project-Ice-Cream/</p>
							</div> */}


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
					<p className="mt-1 text-xs">Built with Next JS & Tailwind CSS</p>
				</footer>
			</div >
		</main >
	);
}