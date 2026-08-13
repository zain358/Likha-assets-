import Link from "next/link";

const services: Record<string, { name: string; tag: string; color: string; desc: string; items: string[] }> = {
  "website-development": {
    name: "Website Development",
    tag: "Web",
    color: "#3d5afe",
    desc: "Fast, sharp websites built to convert. From landing pages to full multipage sites — modern stack, smooth animations, and performance that ranks.",
    items: ["Landing pages", "Company websites", "E-commerce", "3D & motion experiences"],
  },
  "mobile-app-development": {
    name: "Mobile App Development",
    tag: "iOS & Android",
    color: "#d8613c",
    desc: "Mobile apps that feel right and work right for real users on real devices. Cross-platform builds that ship fast without cutting corners.",
    items: ["Flutter apps", "iOS & Android", "App UI/UX design", "App Store deployment"],
  },
  "system-development": {
    name: "System Development",
    tag: "Platforms",
    color: "#c7c7bf",
    desc: "Custom portals, dashboards, and internal tools built around how your team actually works. Own your workflow instead of renting it.",
    items: ["Admin dashboards", "Booking & inventory systems", "Client portals", "Automation & integrations"],
  },
  "video-editing": {
    name: "Video Editing",
    tag: "Content",
    color: "#17171a",
    desc: "Cinematic edits, motion graphics, and short-form content that stops the scroll. Built for brands that want to stand out on every feed.",
    items: ["Brand films", "Social media edits", "Motion graphics", "Event highlights"],
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = services[slug] ?? services["website-development"];

  return (
    <main className="flex min-h-screen flex-col justify-center px-6 py-28 md:px-10">
      <Link href="/#services" className="mb-10 text-sm uppercase tracking-widest text-muted transition hover:text-white" data-cursor="hover">
        ← Back to Services
      </Link>

      <p className="text-sm uppercase tracking-widest" style={{ color: p.color === "#17171a" ? "#3d5afe" : p.color }}>
        {p.tag}
      </p>
      <h1 className="mt-2 font-display text-5xl font-black uppercase leading-none tracking-tighter md:text-8xl">
        {p.name}
      </h1>
      <p className="mt-8 max-w-xl text-lg text-white/70">{p.desc}</p>

      <ul className="mt-8 flex max-w-xl flex-wrap gap-3">
        {p.items.map((it) => (
          <li key={it} className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80">
            {it}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex gap-4">
        <Link href="/#contact" data-cursor="hover" className="rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-85">
          Start a Project
        </Link>
      </div>
    </main>
  );
}