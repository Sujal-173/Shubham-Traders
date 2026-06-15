import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SolarCalculator } from "@/components/solar-calculator";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ImageCard } from "@/components/sections/image-card";
import { brand, images, metrics, projects, reasons, services, testimonials, trustBar } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-navy text-white">
        <Image 
          src={images.hero} 
          alt="Utility scale solar farm drone view" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover opacity-45"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC3gAAAAB//Z"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
        <div className="container relative grid min-h-[calc(100vh-80px)] items-center py-16">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
              {brand.tagline}
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-7xl">Power Your Home, Business & Farm with Clean Solar Energy</h1>
            <p className="mt-6 text-xl font-semibold text-white/85 md:text-2xl">550+ Customers | 3500+ KW Installed</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/book-site-survey">Get Free Consultation</LinkButton>
              <LinkButton href="/solar-calculator" variant="outline">Calculate Savings</LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {trustBar.map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-lg bg-cloud px-3 py-3 text-sm font-bold text-navy">
              <CheckCircle2 className="h-4 w-4 text-energy" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-cloud">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="p-6 text-center">
                <p className="text-4xl font-black text-primary">{metric.value}</p>
                <p className="mt-2 font-bold text-slate-600">{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="calculator">
        <div className="container">
          <SolarCalculator />
        </div>
      </section>

      <section className="section bg-cloud">
        <div className="container">
          <SectionHeading eyebrow="Solar EPC Services" title="One engineering partner for every solar project type." text="From residential rooftops to industrial-scale systems, Shubham Traders manages design, procurement, installation, documentation and after-sales support." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <ImageCard key={service.slug} href={`/services/${service.slug}`} image={service.image} imageAlt={service.title} imageSizes="(min-width: 1024px) 25vw, 50vw" imageHeight="h-44">
                  <Icon className="mb-4 h-8 w-8 text-solar" />
                  <h3 className="text-xl font-black text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary">Explore <ArrowRight size={16} /></span>
                </ImageCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Featured Projects" title="Built for serious energy users across Madhya Pradesh." text="Interactive project cards show the range of industrial, commercial and agricultural work delivered by Shubham Traders." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ImageCard key={project.slug} href={`/projects/${project.slug}`} image={project.image} imageAlt={project.title} imageSizes="(min-width: 1024px) 33vw, 100vw" badge={<span className="absolute left-4 top-4 rounded-full bg-solar px-3 py-1 text-sm font-black text-navy">{project.capacity}</span>}>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">{project.type}</p>
                <h3 className="mt-2 text-xl font-black text-navy">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.location}</p>
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cloud">
        <div className="container">
          <SectionHeading eyebrow="Why Choose Us" title="Local execution with enterprise-grade process." align="center" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <Card key={reason.title} className="p-5">
                  <Icon className="mb-4 h-8 w-8 text-energy" />
                  <p className="font-black text-navy">{reason.title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="Proof from customers who trusted the process." text="Designed for Google review integration and video testimonials as the brand gathers more public review assets." />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="p-6">
                <Sparkles className="mb-4 h-7 w-7 text-solar" />
                <p className="leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
                <p className="mt-5 font-black text-navy">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
