"use client";

import Image from "next/image";
import {
	Github,
	Linkedin,
	Mail,
	MapPin,
	Download,
	SquareArrowOutUpRight,
	Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "../public/profilePicture.jpeg";

export default function CV() {
	return (
		<main className="min-h-screen bg-gray-50 py-10 print:py-0 print:bg-white">
			<div className="container mx-auto max-w-4xl bg-white shadow-lg print:shadow-none">
				{/* Header */}
				<header className="relative bg-slate-800 px-6 py-12 text-white">
					<div className="flex flex-col md:flex-row md:items-center">
						<div className="mb-6 flex justify-center md:mb-0 md:mr-8 md:justify-start">
							<div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white">
								<Image
									src={profilePicture}
									alt="Florin Bejera"
									width={160}
									height={160}
									className="object-cover"
									priority
								/>
							</div>
						</div>
						<div>
							<h1 className="mb-2 text-center text-4xl font-bold md:text-left">
								Florin Bejera
							</h1>
							<h2 className="mb-6 text-center text-xl font-light md:text-left">
								Frontend Developer
							</h2>
							<div className="flex flex-wrap justify-center gap-3 md:justify-start">
								<a
									href="https://www.linkedin.com/in/florin-bejera-1b213b263/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
								>
									<Linkedin className="h-4 w-4" />
									<span>LinkedIn</span>
								</a>
								<a
									href="https://github.com/FlorinBejera2002"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
								>
									<Github className="h-4 w-4" />
									<span>GitHub</span>
								</a>
								<a
									href="mailto:florinbejera@gmail.com"
									className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
								>
									<Mail className="h-4 w-4" />
									<span>Email</span>
								</a>
								<span className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm">
									<MapPin className="h-4 w-4" />
									<span>Timișoara, Timiș, Romania</span>
								</span>
							</div>
						</div>
					</div>
					<div className="absolute right-4 top-4 print:hidden">
						<Button
							onClick={() => window.print()}
							variant="outline"
							size="sm"
							className="bg-white text-slate-800 hover:bg-gray-100"
						>
							<Download className="mr-2 h-4 w-4" />
							Print CV
						</Button>
					</div>
				</header>

				{/* Main Content */}
				<div className="p-6">
					{/* About Me */}
					<section className="mb-6">
						<h3 className="mb-3 border-b border-slate-200 pb-2 text-2xl font-bold text-slate-800">
							About Me
						</h3>
						<p className="text-slate-600">
							I started learning programming in 2022 together with a friend named Vlad Chrisan, driven by the desire to grow professionally. Shortly after, I discovered a strong interest in web development, so I enrolled in a 12-month Full Stack Developer course.

							During this year of learning, I was also working in construction. I spent my days on the construction site and my evenings studying late into the night, dedicating my free time to developing my skills in tech.

							I enjoy design, which helps me bring an aesthetic touch to the projects I work on. Outside of programming, I like spending time in nature and staying active through sports — activities that help me relax and recharge.
						</p>
					</section>

					{/* Skills */}
					<section className="mb-6">
						<h3 className="mb-3 border-b border-slate-200 pb-2 text-2xl font-bold text-slate-800">
							Skills
						</h3>
						<div className="flex flex-wrap gap-2">
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								Next.js
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								React
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								TypeScript
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								JavaScript
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								Tailwind CSS
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								HTML5
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								CSS3
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								SCSS
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								Git
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								REST APIs
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
								Responsive Design
							</span>
						</div>
					</section>

					{/* Experience */}
					<section className="mb-6">
						<h3 className="mb-3 border-b border-slate-200 pb-2 text-2xl font-bold text-slate-800">
							Experience
						</h3>
						<div className="mb-4">
							<div className="flex flex-wrap items-center justify-between">
								<h4 className="text-lg font-semibold text-slate-700">
									Frontend Developer
								</h4>
								<span className="text-sm font-medium text-slate-500">
									Jan 2023 - Present
								</span>
							</div>
							<p className="mb-2 text-slate-600">Freelance</p>
							<ul className="ml-5 list-disc space-y-1 text-slate-600">
								<li>
									Developed responsive web applications using Next.js and React
								</li>
								<li>Implemented TypeScript for type-safe code</li>
								<li>Created modern UI designs with Tailwind CSS</li>
							</ul>
						</div>
					</section>

					{/* Education */}
					<section className="mb-6">
						<h3 className="mb-3 border-b border-slate-200 pb-2 text-2xl font-bold text-slate-800">
							Education
						</h3>
						<div>
							<div className="flex flex-wrap items-center justify-between">
								<h4 className="text-lg font-semibold text-slate-700">
									Full Stack Developer Course
								</h4>
								<span className="text-sm font-medium text-slate-500">
									2022-2023
								</span>
							</div>
							<p className="text-slate-600">GoIT Academy</p>
						</div>
					</section>

					{/* Projects */}
					<section className="mb-6">
						<h3 className="mb-3 border-b border-slate-200 pb-2 text-2xl font-bold text-slate-800">
							Projects
						</h3>

						<div className="mb-4">
							<div className="flex flex-wrap items-center justify-between">
								<h4 className="text-lg font-semibold text-slate-700">
									Arise for Christ Website
								</h4>
								<a
									href="https://www.ariseforchrist.com/ro"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
								>
									<span>view</span>
									<SquareArrowOutUpRight className="h-4 w-4" />
								</a>
							</div>
							<p className="text-slate-600">
								Next.js, TypeScript, Tailwind CSS
							</p>
						</div>

						<div className="mb-4">
							<div className="flex flex-wrap items-center justify-between">
								<h4 className="text-lg font-semibold text-slate-700">
									Ice Cream Website
								</h4>
								<a
									href="https://dris11.github.io/Project-Ice-Cream/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
								>
									<span>view</span>
									<SquareArrowOutUpRight className="h-4 w-4" />
								</a>
							</div>
							<p className="text-slate-600">HTML5, CSS3, JavaScript</p>
						</div>

						<div className="mb-4">
							<div className="flex flex-wrap items-center justify-between">
								<h4 className="text-lg font-semibold text-slate-700">
									Arise for Christ Portal
								</h4>
								<div className="flex items-center gap-1 text-sm text-red-600">
									<span>private</span>
									<Lock className="h-4 w-4" />
								</div>

							</div>
							<p className="text-slate-600">
								Vite JS, TypeScript, Tailwind CSS - Shadcn UI
							</p>
						</div>


					</section>

					{/* Languages */}
					<section>
						<h3 className="mb-3 border-b border-slate-200 pb-2 text-2xl font-bold text-slate-800">
							Languages
						</h3>
						<div className="flex gap-4 text-slate-600">
							<span>Romanian (Native)</span>
							<span>English (B1)</span>
						</div>
					</section>
				</div>

				{/* Footer */}
				<footer className="bg-slate-100 p-4 text-center text-sm text-slate-500 print:hidden">
					<p>© {new Date().getFullYear()} Florin Bejera</p>
				</footer>
			</div>
		</main>
	);
}
