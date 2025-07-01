"use client";

import { Button } from '@/components/ui/button';
import {
	Github,
	Linkedin,
	Mail,
	MapPin, ExternalLink,
	Lock,
	Calendar,
	Code,
	Globe,
	Printer,
	ChevronLeft,
	ChevronRight,
	X
} from 'lucide-react';
import { useState } from 'react';
import image from "../public/image.png";
import image1 from "../public/image1.png";
import image2 from "../public/image2.png";
import image3 from "../public/image3.png";
import image4 from "../public/image4.png";
import Image from 'next/image';
import profilePicture from "../public/profilePicture.jpeg";


export default function CV() {
	const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Placeholder images - you'll replace these with your actual images
	const experienceImages = [
		{ src: image, alt: "Prayer Wall Interface", title: "Prayer Wall - Main Interface" },
		{ src: image1, alt: "Authentication System", title: "Google & Facebook Authentication" },
		{ src: image2, alt: "Collaboration Form", title: "20-Question Collaboration Form" },
		{ src: image3, alt: "Admin Portal", title: "Arise for Christ Portal Dashboard" },
		{ src: image4, alt: "PDF Generation", title: "PDF Generation Feature" }
	];

	const openImageModal = (imageIndex: any) => {
		setSelectedImage(experienceImages[imageIndex]);
		setCurrentImageIndex(imageIndex);
	};

	const closeImageModal = () => {
		setSelectedImage(null);
	};

	const navigateImage = (direction: any) => {
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
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Linkedin className="h-4 w-4" />
									<span>LinkedIn</span>
								</a>
								<a
									href="https://github.com/FlorinBejera2002"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Github className="h-4 w-4" />
									<span>GitHub</span>
								</a>
								<a
									href="mailto:florinbejera@gmail.com"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Mail className="h-4 w-4" />
									<span>Email</span>
								</a>
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
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
								<div>
									<p className="text-blue-600 font-medium mb-1">Arise for Christ Organization</p>
									<h4 className="text-xl font-semibold text-slate-700">Frontend Developer</h4>
								</div>
								<div className="flex items-center gap-2 text-blue-600 font-medium">
									<Calendar className="h-4 w-4" />
									<span>Feb 2023 - Present</span>
								</div>
							</div>

							<div className="space-y-6">
								{/* Prayer Wall Project */}

								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									Prayer Wall
								</h5>
								<p className="text-slate-600 mb-3">
									O pagină dedicată persoanelor care doresc să adauge motive de rugăciune sau să se roage pentru rugăciunile altora.
								</p>
								<div className="space-y-2">
									<p className="text-sm text-slate-700"><span className="font-medium">Funcționalități principale:</span></p>
									<ul className="text-sm text-slate-600 space-y-1 ml-4">
										<li>• Afișarea unei liste cu toate rugăciunile adăugate</li>
										<li>• Buton „Mă rog" pentru a arăta susținerea față de un motiv de rugăciune</li>
										<li>• Autentificare prin Google sau Facebook</li>
										<li>• Formular pentru adăugarea unui motiv de rugăciune cu opțiunea de a rămâne anonim</li>
										<li>• Administrarea conținutului: adaugă răspunsuri, șterge răspunsuri sau șterge rugăciunea</li>
										<li>• Gestionarea datelor prin backend dedicat cu stocarea în tabele Supabase</li>
									</ul>
								</div>


								{/* Collaborate with Team Project */}

								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									Collaborate with the Arise for Christ Team
								</h5>
								<p className="text-slate-600 mb-3">
									O pagină dedicată persoanelor care doresc să se implice în misiunea Arise for Christ și să colaboreze cu echipa.
								</p>
								<div className="space-y-2">
									<p className="text-sm text-slate-700"><span className="font-medium">Funcționalități principale:</span></p>
									<ul className="text-sm text-slate-600 space-y-1 ml-4">
										<li>• Formular cu 20 de întrebări implementat pe site</li>
										<li>• Întrebările organizate pe slide-uri și categorii pentru experiență structurată</li>
										<li>• Conectare la backend cu stocarea datelor în tabele Supabase</li>
										<li>• Afișarea datelor colaboratorilor în Portalul Arise for Christ</li>
										<li>• Componentă reutilizabilă pentru adăugarea și actualizarea colaboratorilor</li>
										<li>• Funcționalități de ștergere și generare de PDF-uri cu informațiile colaboratorilor</li>
									</ul>
								</div>

								{/* Project Images Gallery */}
								<h5 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									Project Screenshots
								</h5>
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
									{experienceImages.map((image, index) => (
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
							<h3 className="text-3xl font-bold text-slate-800">Projects</h3>
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
										<a
											href="https://www.ariseforchrist.com/ro"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</a>
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
										<a
											href="https://teens-ariseforchrist.netlify.app/en"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</a>
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
										<a
											href="https://philippine-ariseforchrist.netlify.app/en"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</a>
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
										<a
											href="https://hebronafchome.netlify.app/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</a>
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
										<a
											href="https://amicustimisoara.netlify.app/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
										>
											<Globe className="h-4 w-4" />
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</a>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Simple registration form integrated with Supabase for data collection.
								</p>
								<p className="text-xs text-slate-500 mt-2">URL: https://amicustimisoara.netlify.app/</p>
							</div>

							{/* Ice Cream Website */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200 transition-shadow duration-300">
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
											<span>Live Site</span>
											<ExternalLink className="h-4 w-4" />
										</a>
									</div>
								</div>
								<p className="text-slate-600 leading-relaxed">
									Static landing page with attractive design created during Full Stack Developer course.
									Worked with a team on HTML structure, CSS animations, and JavaScript interactivity.
								</p>
								<p className="text-xs text-slate-500 mt-2">URL: https://dris11.github.io/Project-Ice-Cream/</p>
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
					<p className="mt-1 text-xs">Built with Next.js & Tailwind CSS</p>
				</footer>
			</div>

			{/* Image Modal */}
			{selectedImage && (
				<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
					<div className="relative max-w-4xl max-h-fit bg-white rounded-lg overflow-hidden">
						{/* Close button */}
						<button
							onClick={closeImageModal}
							className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
						>
							<X className="h-6 w-6" />
						</button>

						{/* Navigation arrows */}
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

						{/* Image title at bottom */}
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