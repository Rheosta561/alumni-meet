
import SectionWrapper from "./SectionWrapper";
import MessageCard from "./MessageCard";
import AlumniCard from "./AlumniCard";
import { alumniList, leadershipMessages, legacyStats } from "../../data";

function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      <SectionWrapper title="Legacy of the DTU Alumni Meet">
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            For decades, the Alumni Meet has served as a bridge between the past and the future — 
            uniting pioneers, innovators, and leaders who once walked the same corridors of DTU. 
            It is not just a reunion, but a celebration of shared dreams, enduring friendships, and collective achievements.
          </p>

          <div className="flex justify-center gap-6 mt-4 text-gray-600">
            {legacyStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                  <span className="text-xs mt-1">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Leadership Messages">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipMessages.map((msg, idx) => (
            <MessageCard key={idx} title={msg.title} message={msg.message} image={msg.image} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Notable Alumni">
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {alumniList.concat(alumniList).map((a, idx) => (
              <div key={idx} className="inline-block">
                <AlumniCard name={a.name} role={a.role} image={a.image} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 40s linear infinite;
          }
        `}
      </style>

    </section>
  );
}

export default AboutSection;
