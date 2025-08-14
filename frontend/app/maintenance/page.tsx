'use client';

import { Clock, Shield, Wrench, AlertCircle, CheckCircle, XCircle, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const priorityLevels = [
  {
    level: "P1",
    title: "Critical (Site Down)",
    description: "Complete outages or critical functionality broken",
    acknowledge: "≤1 business day",
    start: "1–2 business days",
    icon: AlertCircle,
    color: "text-red-600 bg-red-50"
  },
  {
    level: "P2", 
    title: "High (Degraded/Bugs)",
    description: "Significant issues affecting user experience",
    acknowledge: "≤1 business day",
    start: "2–3 business days", 
    icon: AlertCircle,
    color: "text-orange-600 bg-orange-50"
  },
  {
    level: "P3",
    title: "Normal (Minor/Edits)",
    description: "Small fixes, content updates, minor improvements",
    acknowledge: "Schedule within a week",
    start: "As scheduled",
    icon: Wrench,
    color: "text-blue-600 bg-blue-50"
  }
];

const warrantyIncludes = [
  "Fix defects caused by my code that deviate from approved scope",
  "Security & dependency updates (on request)",
  "Minor fixes/tweaks and small content edits (<15 min)",
  "Light monitoring if I have access; backups if hosting allows",
  "Version upgrades (framework/CMS) when safe"
];

const warrantyExcludes = [
  "New features or redesigns",
  "Content writing, SEO/ads, analytics accuracy", 
  "Hosting/third-party outages",
  "Breaking platform changes or end-of-life",
  "Legal/regulatory compliance"
];

const supportSteps = [
  {
    step: 1,
    title: "You send a request",
    description: "Submit your support request with details"
  },
  {
    step: 2, 
    title: "I triage quickly",
    description: "I assess priority and provide initial response"
  },
  {
    step: 3,
    title: "I share an estimate", 
    description: "You receive time/cost estimate for approval"
  },
  {
    step: 4,
    title: "You approve",
    description: "Confirm you want to proceed with the work"
  },
  {
    step: 5,
    title: "I do the work",
    description: "Complete the requested changes or fixes"
  },
  {
    step: 6,
    title: "Summary & invoice",
    description: "Receive work summary and invoice for payment"
  }
];

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <a 
              href="mailto:tom@example.com" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Maintenance & Support
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Clear policies and procedures for ongoing support after your project launches.
          </p>
        </div>

        {/* Availability Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Availability</h3>
              <p className="text-blue-800 mb-2">
                I'm a high‑school student working part‑time. I reply fast <strong>Sun–Thu, 09:00–18:00 (North America/Toronto)</strong>.
              </p>
              <p className="text-blue-700 text-sm">
                Exam weeks may slow me down; I'll be upfront about any delays.
              </p>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">30-Day Warranty (Included)</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-4">
              <strong>30 days from project acceptance.</strong> I'll fix defects caused by my code that deviate from the approved scope.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Remedy:</strong> Fix the issue or provide a reasonable workaround.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                What's Covered
              </h3>
              <ul className="space-y-2">
                {warrantyIncludes.map((item, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Not Included
              </h3>
              <ul className="space-y-2">
                {warrantyExcludes.map((item, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* On-Demand Support Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How On-Demand Support Works</h2>
          <p className="text-gray-600 mb-8">
            After the warranty period: on‑demand support only, hourly rate, business hours.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-yellow-800 text-sm">
              <strong>Billing:</strong> Hourly rate set in proposal; 15‑minute minimum; rush work may add a surcharge.
            </p>
          </div>
        </section>

        {/* Response Time Targets */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Response Time Targets</h2>
          <p className="text-gray-600 mb-6">
            Best‑effort targets, not guaranteed SLAs. Actual availability depends on my schedule.
          </p>
          
          <div className="space-y-4">
            {priorityLevels.map((priority, index) => {
              const IconComponent = priority.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${priority.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{priority.level}</h3>
                        <span className="text-gray-600">—</span>
                        <span className="font-medium text-gray-900">{priority.title}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{priority.description}</p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-gray-500">
                          <strong>Acknowledge:</strong> {priority.acknowledge}
                        </span>
                        <span className="text-gray-500">
                          <strong>Start:</strong> {priority.start}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Client Responsibilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Responsibilities</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Provide timely access (repo, hosting, CI/CD, third‑party accounts)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">One point of contact and quick approvals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Keep domains/hosting/licenses current; keep backups if you self‑edit</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Terms</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Third-Party & Upgrades</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  Third‑party costs are pass‑through
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  Breaking changes/EOL usually require a paid mini‑project
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Billing & Pause</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  On‑demand work invoiced on completion (or weekly for bigger tasks)
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  Payment due on receipt; more than 4 days late → work pauses until paid
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Handover */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Handover</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-green-800 mb-3">
              <strong>You own the code after full payment.</strong>
            </p>
            <p className="text-green-700 text-sm">
              On request: brief runbook and one 30‑minute handoff call to help you understand the project structure.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Questions about maintenance?
          </h3>
          <p className="text-gray-600 mb-6">
            I'm happy to clarify any part of the support process before we start working together.
          </p>
          <a 
            href="mailto:tom@example.com" 
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <Mail className="w-4 h-4" />
            Ask me anything
          </a>
        </div>
      </div>
    </div>
  );
}