import { Mail } from "lucide-react";
import ServicesGrid from "@/components/services-grid";
import FAQSection from "@/components/faq-section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Tom Zhang</h1>
            <a
              href="mailto:tom.zhang.career@hotmail.com"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hello, I'm Tom!
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Web & app development, bots, and automation—custom solutions
            tailored for you.
          </p>
          <p className="text-sm text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
            <strong>Disclaimer: </strong>This is independent freelance work and
            is not affiliated with or reflective of my employer(s).
          </p>

          <div className="mb-12">
            <Link
              href="https://www.tomzhang.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm underline decoration-1 underline-offset-4"
            >
              Learn more about me
            </Link>
            <br />
            {/* <Link
              href="mailto:tom.zhang.career@hotmail.com"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm underline decoration-1 underline-offset-4"
            >
              Contact me
            </Link> */}
          </div>

          {/* Services Grid */}
          <ServicesGrid />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to start your project?
          </h3>
          <p className="text-gray-600 mb-8">
            Let's discuss your ideas and bring them to life
          </p>
          <Link
            href="mailto:tom.zhang.career@hotmail.com"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <Mail className="w-4 h-4" />
            Contact me
          </Link>
        </div>
      </footer>
    </div>
  );
}
