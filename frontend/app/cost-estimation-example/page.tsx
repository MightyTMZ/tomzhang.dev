'use client';

import { Calculator, Clock, DollarSign, CheckCircle, AlertTriangle, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

interface Task {
  name: string;
  hours: number;
  description: string;
}

const exampleTasks: Task[] = [
  { name: "Discovery & Planning", hours: 4, description: "Requirements gathering, project scope definition" },
  { name: "UI/UX Design", hours: 12, description: "Wireframes, mockups, user experience design" },
  { name: "Frontend Development", hours: 25, description: "User interface implementation, responsive design" },
  { name: "Backend Development", hours: 30, description: "Server logic, database design, API development" },
  { name: "Testing & QA", hours: 10, description: "Bug testing, performance optimization, cross-browser testing" },
  { name: "Deployment & Handoff", hours: 4, description: "Production deployment, domain setup, go-live" },
  { name: "Documentation/Training", hours: 5, description: "User guides, technical documentation, client training" }
];

const hourlyRate = 65;
const bufferPercentage = 15;

export default function CostEstimationPage() {
  const subtotalHours = exampleTasks.reduce((sum, task) => sum + task.hours, 0);
  const bufferHours = Math.round((subtotalHours * bufferPercentage / 100) * 10) / 10;
  const totalHours = subtotalHours + bufferHours;
  const totalCost = totalHours * hourlyRate;
  const rushSurcharge = totalCost * 0.35; // 35% average of 20-50%
  const advanceDiscount = totalCost * 0.20; // 20% discount

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
              Get a quote
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Cost Estimation Example
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Here's how I calculate project costs transparently, using a sample web application as an example.
          </p>
        </div>

        {/* Process Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My 4-Step Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mb-3">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Break Down Tasks</h3>
              <p className="text-gray-600 text-sm">List every major piece of work needed</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mb-3">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Estimate Hours</h3>
              <p className="text-gray-600 text-sm">Realistic time estimates with buffer</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mb-3">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Calculate Cost</h3>
              <p className="text-gray-600 text-sm">Multiply hours by hourly rate</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mb-3">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Add Extras</h3>
              <p className="text-gray-600 text-sm">Rush work or advance payment options</p>
            </div>
          </div>
        </section>

        {/* Task Breakdown */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Example: E-commerce Website</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700">
              <strong>Project:</strong> A custom e-commerce website with user accounts, product catalog, shopping cart, and payment processing.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Task</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Hours</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {exampleTasks.map((task, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{task.name}</td>
                    <td className="px-6 py-4 text-gray-700">{task.hours}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{task.description}</td>
                  </tr>
                ))}
                <tr className="bg-yellow-50 border-t-2 border-yellow-200">
                  <td className="px-6 py-4 font-semibold text-gray-900">Buffer ({bufferPercentage}%)</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{bufferHours}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">Safety margin for unexpected challenges</td>
                </tr>
                <tr className="bg-gray-100 border-t-2 border-gray-300">
                  <td className="px-6 py-4 font-bold text-gray-900">Total Hours</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{totalHours}</td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost Calculation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Calculation</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900">Base Project Cost</h3>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">
              {totalHours} hours × ${hourlyRate}/hour = ${totalCost.toLocaleString()}
            </div>
            <p className="text-blue-800">
              This includes all development work plus a {bufferPercentage}% buffer for unexpected challenges.
            </p>
          </div>
        </section>

        {/* Pricing Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-red-200 rounded-lg p-6 bg-red-50">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="font-semibold text-red-900">Rush Work (+20-50%)</h3>
              </div>
              <p className="text-red-800 mb-3">
                Need it done faster than normal timeline? Rush surcharge applies.
              </p>
              <div className="text-xl font-semibold text-red-900">
                ${totalCost.toLocaleString()} + ${Math.round(rushSurcharge).toLocaleString()} = ${Math.round(totalCost + rushSurcharge).toLocaleString()}
              </div>
              <p className="text-red-700 text-sm mt-2">Example with 35% rush surcharge</p>
            </div>

            <div className="border border-green-200 rounded-lg p-6 bg-green-50">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-green-900">Pay in Advance (-20%)</h3>
              </div>
              <p className="text-green-800 mb-3">
                Pay the full amount upfront and save 20% on the total cost.
              </p>
              <div className="text-xl font-semibold text-green-900">
                ${totalCost.toLocaleString()} - ${Math.round(advanceDiscount).toLocaleString()} = ${Math.round(totalCost - advanceDiscount).toLocaleString()}
              </div>
              <p className="text-green-700 text-sm mt-2">20% discount for full advance payment</p>
            </div>
          </div>
        </section>

        {/* Why This Approach */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why I Use This Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <Clock className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">You see exactly what you're paying for and why.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Realistic Estimates</h3>
              <p className="text-gray-600 text-sm">Buffer time prevents surprises and scope creep.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <DollarSign className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">You pay for actual work, not inflated estimates.</p>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-yellow-800"><strong>Every project is different.</strong> This is just an example—your actual quote will be customized to your specific needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-yellow-800"><strong>Simple tasks</strong> (like connecting a payment API) might take 2–4 hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-yellow-800"><strong>Complex tasks</strong> (like building an AI chatbot) might take 20–40+ hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-yellow-800"><strong>Buffer time</strong> (10–25%) accounts for unexpected challenges and ensures quality delivery.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready for your custom quote?
          </h3>
          <p className="text-gray-600 mb-6">
            Tell me about your project and I'll provide a detailed, transparent estimate just like this one.
          </p>
          <a 
            href="mailto:tom@example.com" 
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <Mail className="w-4 h-4" />
            Get my custom quote
          </a>
        </div>
      </div>
    </div>
  );
}