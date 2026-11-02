import React from 'react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../../data/portfolioData';
import { GraduationCap, Award, ShieldCheck, Calendar, MapPin } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-dark-secondary/60 border-t border-aqua-electric/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-aqua-electric" />
              <h3 className="text-xl font-bold text-content-primary">
                Formal Education
              </h3>
            </div>

            <div className="p-7 rounded-3xl glass-card border border-aqua-electric/25 shadow-glow-sm space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-aqua-electric">
                  Undergraduate Degree
                </span>
                <h4 className="text-xl font-bold text-content-primary">
                  {PERSONAL_INFO.college}
                </h4>
                <p className="text-sm font-semibold text-aqua-sky">
                  {PERSONAL_INFO.degree}
                </p>
              </div>

              <div className="space-y-2 py-3 border-y border-aqua-electric/15 text-xs font-mono text-content-secondary">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-aqua-electric" />
                  <span>Duration: {PERSONAL_INFO.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-aqua-electric" />
                  <span>Location: {PERSONAL_INFO.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Specialized coursework focusing on machine learning algorithms, probabilistic models,
                linear algebra, data structures, and computer science foundations.
              </p>
            </div>
          </div>

          {/* Certifications Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-aqua-electric" />
              <h3 className="text-xl font-bold text-content-primary">
                Verified Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-3xl glass-card border border-aqua-electric/20 hover:border-aqua-electric/40 hover:shadow-glow-cyan transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-aqua-electric bg-dark-elevated border border-aqua-electric/30">
                        {cert.date}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-aqua-electric" />
                    </div>

                    <h4 className="text-base font-bold text-content-primary leading-snug">
                      {cert.title}
                    </h4>

                    <div className="text-xs font-semibold text-aqua-sky">
                      {cert.issuer}
                    </div>

                    {cert.score && (
                      <div className="inline-block px-2.5 py-1 rounded-xl bg-dark-primary text-xs font-mono font-bold text-emerald-400 border border-emerald-500/30">
                        Score: {cert.score}
                      </div>
                    )}

                    {cert.credentialNote && (
                      <p className="text-xs text-content-secondary leading-normal">
                        {cert.credentialNote}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-aqua-electric/15">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-elevated text-content-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
