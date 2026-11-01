import React, { useState } from 'react';
import { Cpu, GitBranch, ArrowRight, CheckCircle2, FileCode, Layers, ShieldCheck } from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

export const EngineeringSkills: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('arch');

  const stages: Stage[] = [
    {
      id: 'analysis',
      step: 'Phase 01',
      title: 'Problem Statement Analysis',
      description: 'Deconstructing real-world briefs, identifying regulatory constraints, threat vectors, and core user friction points before writing any code.',
      deliverables: ['Stakeholder Requirements Spec', 'Constraint Matrix', 'Competitive Literature Review'],
      metrics: 'Clarity & Scope Definition'
    },
    {
      id: 'arch',
      step: 'Phase 02',
      title: 'Solution Architecture & Workflow',
      description: 'Structuring modular component hierarchies, API contracts, real-time data streaming flows, and fault-tolerant system state transitions.',
      deliverables: ['End-to-End System Diagrams', 'Data Schemas (JSON/TypeScript)', 'Client-Server Communication Specs'],
      metrics: 'Extensibility & Scalability'
    },
    {
      id: 'feasibility',
      step: 'Phase 03',
      title: 'Feasibility & Viability Analysis',
      description: 'Evaluating hardware constraints, inference latency, compute budgets, and browser runtime performance across desktop and mobile devices.',
      deliverables: ['Latency Budgets (<200ms)', 'Software-WebGL Fallback Guard', 'Resource Consumption Model'],
      metrics: 'Runtime Resilience'
    },
    {
      id: 'proto',
      step: 'Phase 04',
      title: 'Hackathon Rapid Prototyping',
      description: 'Transforming architectural blueprints into functional, demonstrable software within intense 24-to-36 hour competitive sprints.',
      deliverables: ['Working Interactive Demo', 'GitHub Repository & README', 'Verified Test Deployments'],
      metrics: 'Sprint Delivery Velocity'
    },
    {
      id: 'docs',
      step: 'Phase 05',
      title: 'Documentation & Presentation',
      description: 'Synthesizing technical findings into clean runbooks, architectural RFCs, and high-impact presentation decks for juries and stakeholders.',
      deliverables: ['System Workflow Runbooks', 'Live Demonstration Decks', 'Jury Problem Breakdown Slides'],
      metrics: 'Clear Communication'
    }
  ];

  const current = stages.find(s => s.id === activeStage) || stages[0];

  return (
    <section className="py-24 relative bg-[#100D0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Methodology & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Research & Engineering Skills
          </h2>
          <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl">
            A disciplined, end-to-end engineering lifecycle from initial problem analysis to architecture, prototyping, and technical documentation.
          </p>
        </div>

        {/* Interactive Engineering Pipeline Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {stages.map((stage) => {
            const isActive = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`p-4 rounded-xl text-left transition-all border relative overflow-hidden group ${
                  isActive
                    ? 'bg-[#241B17] border-[#FF941F] shadow-lg shadow-[#FF941F]/15'
                    : 'bg-[#16100E] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono text-[#FF941F] mb-1">{stage.step}</div>
                <div className="text-xs font-bold text-white group-hover:text-[#FFB347] transition-colors leading-snug">
                  {stage.title}
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF941F] to-[#FFB347]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Stage Card */}
        <div className="p-7 rounded-2xl bg-[#1B1411] border border-white/12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#FF941F] mb-2">
              <span>{current.step}</span>
              <span className="text-white/20">/</span>
              <span>Engineering Lifecycle</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              {current.title}
            </h3>
            <p className="text-sm text-[#C9C2BC] leading-relaxed mb-6">
              {current.description}
            </p>

            <div className="space-y-2">
              <div className="text-xs font-mono text-white flex items-center gap-2 mb-1">
                <FileCode className="w-3.5 h-3.5 text-[#FF941F]" />
                <span>Key Engineering Deliverables</span>
              </div>
              {current.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#C9C2BC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#70D6A3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-xl bg-[#241B17] border border-white/10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFB347] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#FF941F]" />
                <span>Primary Benchmark</span>
              </div>
              <div className="text-lg font-bold text-white mb-2">
                {current.metrics}
              </div>
              <p className="text-xs text-[#C9C2BC] leading-relaxed">
                Applied systematically across national hackathons (Smart India Hackathon, HackIndia) and academic software systems at SLRTCE.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#5E4D43]">
              <span>Verified Engineering Discipline</span>
              <span className="text-[#FF941F]">● Rigorous</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
