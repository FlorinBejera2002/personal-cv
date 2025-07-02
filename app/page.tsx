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

	// Imagini pentru experiență și proiecte
	const experienceImages = [
		{ src: image9, alt: "Philippine Arise for Christ", title: "Philippine Arise for Christ" },

		{ src: image1, alt: "Formular de Colaborare", title: "Formular de Colaborare cu 20 de Întrebări" },
		{ src: image2, alt: "Rugăciune", title: "Rugăciune - Interfață Principală" },
		{ src: image3, alt: "Formular adauga rugaciune", title: "Formular de Adăugare Rugăciune" },
		{ src: image4, alt: "Sistem de Autentificare", title: "Autentificare Google & Facebook" },
		{ src: image5, alt: "Site-ul Arise for Christ", title: "Site-ul Arise for Christ" },
		{ src: image6, alt: "Filmoteka", title: "Filmoteka - Catalog de filme" },
		{ src: image7, alt: "Portal Arise for Christ", title: "Portal Arise for Christ" },
		{ src: image8, alt: "Teens Arise for Christ", title: "Teens Arise for Christ" },
		{ src: image, alt: "Portal Colaborare", title: "Afișarea Colaboratorilor în Portalul Arise for Christ" },

		{ src: filmoteka, alt: "Filmoteka", title: "Filmoteka - Catalog de filme" },
		{ src: teens, alt: "Teens Arise for Christ", title: "Teens Arise for Christ" },
		{ src: philippine, alt: "Philippine Arise for Christ", title: "Philippine Arise for Christ" },
		{ src: hebron, alt: "Hebron AFC Home", title: "Hebron AFC Home" },
		{ src: amicus, alt: "Formular AMiCUS Timișoara", title: "Formular AMiCUS Timișoara" },
		{ src: ice, alt: "Site Inghetata", title: "Site Inghetata" },
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
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blueស-50 py-8 print:py-0 print:bg-white">
			<div className="container mx-auto max-w-5xl bg-white shadow-2xl print:shadow-none rounded-lg overflow-hidden">
				{/* Antet */}
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
								Programator Frontend
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
									href="mailto:florin2bejera@gmail.com"
									className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/25 transition-all duration-200 border border-white/20"
								>
									<Mail className="h-4 w-4" />
									<span>Email</span>
								</a>
								<span className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm border border-white/20">
									<MapPin className="h-4 w-4" />
									<span>Timișoara, România</span>
								</span>
							</div>
						</div>
					</div>
					<div className="absolute right-6 top-6 print:hidden">
						<Button
							onClick={() => window.print()}
							variant="outline"
							size="sm"
							className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
						>
							<Printer className="h-4 w-4" />
							Printează CV
						</Button>
					</div>
				</header>

				{/* Conținut Principal */}
				<div className="p-8 lg:p-12">
					{/* Despre Mine */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Despre Mine</h3>
						</div>
						<p className="text-slate-600 text-lg leading-relaxed">
							Sunt pasionat de programare Frontend si am început să învăț în 2022. Am studiat dezvoltarea web timp de un an jumate, după care am început să lucrez la Arise for Christ. Îmi place să lucrez la design-ul site-urilor și aplicațiilor. În timpul liber, îmi place să petrec timp în natură sau să fac sport.
						</p>
					</section>

					{/* Abilități */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Abilități Tehnice</h3>
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
								name: 'Design Responsiv',
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

					{/* Experiență */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Experiență</h3>
						</div>

						<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 mb-6">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
								<div>
									<p className="text-blue-600 font-medium mb-1">Organizația Arise for Christ</p>
									<h4 className="text-xl font-semibold text-slate-700">Programator Frontend</h4>
								</div>
								<div className="flex items-center gap-2 text-blue-600 font-medium">
									<Calendar className="h-4 w-4" />
									<span>Februarie 2023 - Prezent</span>
								</div>
							</div>

							<div className="space-y-6">
								<p className="text-slate-600 mb-3">
									În organizația Arise for Christ lucrez activ la:
								</p>
								{/* Portalul intern (CMS) */}
								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									Portalul intern (CMS)
								</h5>
								<ul className="text-sm text-slate-600 space-y-1 ml-4">
									<li>• Lucrez la dezvoltarea unei platforme CMS (Content Management System) menite să faciliteze administrarea eficientă a conținutului și a datelor organizației.</li>
									<li>• Am implementat funcționalități CRUD (Create, Read, Update, Delete) pentru diverse tipuri de informații: colaboratori, formulare, cereri de evanghelizare, statistici etc.</li>
									<li>• Folosim React Query pentru o experiență fluidă, stocând datele în cache pentru citire rapidă și minimizarea apelurilor către backend.</li>
									<li>• Portalul este conectat la un backend personalizat, cu baze de date gestionate prin Supabase.</li>
								</ul>

								{/* Website-ul principal */}
								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									Website-ul principal
								</h5>
								<ul className="text-sm text-slate-600 space-y-1 ml-4">
									<li>• Am construit site-ul de la zero folosind React cu Next.js, pentru o arhitectură modernă și performantă.</li>
									<li>• Pentru stilizare, utilizez Tailwind CSS, care permite dezvoltare rapidă și un design responsive, adaptat tuturor dispozitivelor.</li>
									<li>• M-am asigurat că designul este curat și în concordanță cu valorile organizației.</li>
								</ul>



								{/* Rugăciune */}
								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									Rugăciune
								</h5>
								<p className="text-slate-600 mb-3">
									O pagină dedicată persoanelor care doresc să adauge motive de rugăciune sau să se roage pentru rugăciunile altora.
								</p>
								<div className="space-y-2">
									<p className="text-sm text-slate-700"><span className="font-medium">Funcționalități principale:</span></p>
									<ul className="text-sm text-slate-600 space-y-1 ml-4">
										<li>• Afișarea unei liste cu toate rugăciunile adăugate</li>
										<li>• Buton „Mă rog” pentru a arăta susținerea față de un motiv de rugăciune</li>
										<li>• Autentificare prin Google sau Facebook</li>
										<li>• Formular pentru adăugarea unui motiv de rugăciune, cu opțiunea de a rămâne anonim</li>
										<li>• Administrarea conținutului: adăugare și ștergere de răspunsuri sau rugăciuni</li>
										<li>• Gestionarea datelor prin backend dedicat, cu stocare în tabele Supabase</li>
									</ul>
								</div>

								{/* Colaborează cu Echipa Arise for Christ */}
								<h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
									Colaborează cu Echipa Arise for Christ
								</h5>
								<p className="text-slate-600 mb-3">
									O pagină dedicată persoanelor care doresc să se implice în misiunea Arise for Christ și să colaboreze cu echipa.
								</p>
								<div className="space-y-2">
									<p className="text-sm text-slate-700"><span className="font-medium">Funcționalități principale:</span></p>
									<ul className="text-sm text-slate-600 space-y-1 ml-4">
										<li>• Formular cu 20 de întrebări implementat pe site</li>
										<li>• Întrebările sunt organizate pe slide-uri și categorii, pentru o experiență structurată</li>
										<li>• Conectare la backend, cu stocarea datelor în tabele Supabase</li>
										<li>• Afișarea datelor colaboratorilor în Portalul Arise for Christ</li>
										<li>• Componentă reutilizabilă pentru adăugarea și actualizarea colaboratorilor</li>
										<li>• Funcționalități de ștergere și generare de PDF-uri cu informațiile colaboratorilor</li>
									</ul>
								</div>

								{/* Galeria de Imagini a Proiectelor */}

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
									<p className="text-blue-600 font-medium mb-1">Academia GoIT</p>
									<h4 className="text-xl font-semibold text-slate-700">Curs Programator Full Stack</h4>
								</div>
								<div className="flex items-center gap-2 text-blue-600 font-medium">
									<Calendar className="h-4 w-4" />
									<span>Ianuarie 2022 - Decembrie 2022</span>
								</div>
							</div>
							<p className="text-slate-600 mb-3">
								În cadrul cursului am învățat limbajele HTML, CSS, SCSS, JavaScript și Node.js.
							</p>
							<p className="text-slate-600 mb-3">
								De asemenea, am avut ocazia să învăț să lucrez în echipă.
							</p>
							<p className="text-slate-600 mb-3">
								Pe lângă curs, am învățat mult și alături de câțiva prieteni care m-au ghidat în alegerea materialelor și ce să studiez.
							</p>
						</div>
					</section>

					{/* Certificări */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Certificări</h3>
						</div>
						<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
								<h4 className="text-xl font-semibold text-slate-700">Curs Programator Full Stack</h4>
								<div className="flex items-center gap-2 text-blue-600 font-medium">
									<Calendar className="h-4 w-4" />
									<span>2022-2023</span>
								</div>
							</div>
							<p className="text-slate-600 font-medium">Academia GoIT</p>
						</div>
					</section>

					{/* Proiecte */}
					<section className="mb-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Proiecte</h3>
						</div>

						<div className="grid gap-6">
							{/* Portal Arise for Christ */}
							<div className="bg-gradient-to-r from-slate-50 to-red-50 rounded-xl p-3 border border-slate-200 flex gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(7)}
								>
									<Image
										src={image7}
										alt="Portal Arise for Christ"
										className="object-cover rounded-md"
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
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Portal Arise for Christ</h4>
										<div className="flex items-center gap-2 text-red-600 font-medium">
											<Lock className="h-4 w-4" />
											<span>Privat</span>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Portal intern pentru gestionarea eficientă a datelor, construit cu Vite și TypeScript, folosind interfața Shadcn. Integrat cu backend pentru actualizări în timp real.
									</p>
								</div>
							</div>

							{/* Site-ul Arise for Christ */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(10)}
								>
									<Image
										src={image9}
										alt="Site-ul Arise for Christ"
										className="object-cover rounded-md"
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
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Site-ul Arise for Christ</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://www.ariseforchrist.com/ro"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Site Live</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Site pentru organizația Arise for Christ. Am făcut totul de la zero folosind Next.js și Tailwind CSS.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://www.ariseforchrist.com</p>
								</div>
							</div>

							{/* Filmoteka */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(10)}
								>
									<Image
										src={filmoteka}
										alt="Filmoteka"
										className="object-cover rounded-md"
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
												<span>Site Live</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Catalog de filme, realizat împreună cu echipa din cadrul cursului de Programator Full Stack.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://cristina-irina.github.io/Filmoteka/index.html</p>
								</div>
							</div>

							{/* Teens Arise for Christ */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(11)}
								>
									<Image
										src={teens}
										alt="Teens Arise for Christ"
										className="object-cover rounded-md"
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
												<span>Site Live</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Website de prezentare pentru organizația Arise for Christ Teens din America.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://teens-ariseforchrist.netlify.app</p>
								</div>
							</div>

							{/* Philippine Arise for Christ */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(12)}
								>
									<Image
										src={philippine}
										alt="Philippine Arise for Christ"
										className="object-cover rounded-md"
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
												<span>Site Live</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Website de prezentare pentru organizația Arise for Christ Filipine.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://philippine-ariseforchrist.netlify.app</p>
								</div>
							</div>

							{/* Hebron AFC Home */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(13)}
								>
									<Image
										src={hebron}
										alt="Hebron AFC Home"
										className="object-cover rounded-md"
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
												<span>Site Live</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Site simplu de prezentare pentru o companie americană.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://hebronafchome.netlify.app/</p>
								</div>
							</div>

							{/* Formular AMiCUS Timișoara */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(14)}
								>
									<Image
										src={amicus}
										alt="Formular AMiCUS Timișoara"
										className="object-cover rounded-md"
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
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Formular AMiCUS Timișoara</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://amicustimisoara.netlify.app/"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Site Live</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Formular simplu de înregistrare integrat cu Supabase pentru colectarea datelor.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://amicustimisoara.netlify.app/</p>
								</div>
							</div>

							{/* Site Inghetata */}
							<div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-3 border border-slate-200 transition-shadow duration-300 flex gap-4">
								<div
									className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200"
									onClick={() => openImageModal(15)}
								>
									<Image
										src={ice}
										alt="Site Inghetata"
										className="object-cover rounded-md"
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
										<h4 className="text-xl font-semibold text-slate-700 mb-2 sm:mb-0">Site Inghetata</h4>
										<div className="flex items-center gap-4">
											<a
												href="https://dris11.github.io/Project-Ice-Cream/"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
											>
												<Globe className="h-4 w-4" />
												<span>Site Live</span>
												<ExternalLink className="h-4 w-4" />
											</a>
										</div>
									</div>
									<p className="text-slate-600 leading-relaxed">
										Pagină de aterizare statică cu design atractiv creată în timpul cursului de Programator Full Stack.
										Am lucrat cu o echipă la structura HTML, animații CSS și interactivitate JavaScript.
									</p>
									<p className="text-xs text-slate-500 mt-2">URL: https://dris11.github.io/Project-Ice-Cream/</p>
								</div>
							</div>
						</div>
					</section>

					{/* Limbi */}
					<section>
						<div className="flex items-center gap-3 mb-6">
							<div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-slate-600 rounded-full"></div>
							<h3 className="text-3xl font-bold text-slate-800">Limbi</h3>
						</div>
						<div className="flex flex-wrap gap-4">
							<div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg px-6 py-4 border border-slate-200">
								<div className="h-3 w-3 bg-green-500 rounded-full"></div>
								<span className="font-medium text-slate-700">Română (Nativ)</span>
							</div>
							<div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg px-6 py-4 border border-slate-200">
								<div className="h-3 w-3 bg-blue-500 rounded-full"></div>
								<span className="font-medium text-slate-700">Engleză (B1)</span>
							</div>
						</div>
					</section>
				</div>

				{/* Subsol */}
				<footer className="bg-gradient-to-r from-slate-100 to-blue-100 p-6 text-center text-sm text-slate-600 print:hidden border-t border-slate-200">
					<p className="font-medium">© {new Date().getFullYear()} Florin Bejera - Programator Frontend</p>
					<p className="mt-1 text-xs">Construit cu Next.js și Tailwind CSS</p>
				</footer>
			</div>

			{/* Modal Imagine */}
			{selectedImage && (
				<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
					<div className="relative max-w-4xl max-h-fit bg-white rounded-lg overflow-hidden">
						{/* Buton Închidere */}
						<button
							onClick={closeImageModal}
							className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
						>
							<X className="h-6 w-6" />
						</button>

						{/* Săgeți de Navigare */}
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

						{/* Imagine */}
						<div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
							<Image src={selectedImage.src} alt={selectedImage.alt} width={800} height={600} />
						</div>

						{/* Titlu Imagine în Jos */}
						<div className="bg-white p-4 border-t">
							<h4 className="font-semibold text-slate-800">{selectedImage.title}</h4>
							<p className="text-sm text-slate-600 mt-1">
								{currentImageIndex + 1} din {experienceImages.length}
							</p>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}