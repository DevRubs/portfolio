import {
  SiAirtable,
  SiAsana,
  SiCalendly,
  SiCanva,
  SiClickup,
  SiDiscord,
  SiDropbox,
  SiFacebook,
  SiGithub,
  SiGoogle,
  SiGooglecalendar,
  SiGoogledrive,
  SiGmail,
  SiGooglesheets,
  SiHubspot,
  SiIntercom,
  SiJira,
  SiLinkedin,
  SiMailchimp,
  SiMiro,
  SiNotion,
  SiOpenai,
  SiQuickbooks,
  SiSalesforce,
  SiShopify,
  SiSlack,
  SiStripe,
  SiTrello,
  SiTypeform,
  SiWebflow,
  SiXero,
  SiYoutube,
  SiZapier,
  SiZendesk,
  SiZoom,
  SiClaude,
  SiGooglegemini,
  SiMake,
  SiN8N,
} from 'react-icons/si';

function MondayIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="22" width="14" height="24" rx="7" fill="#FF3D57" />
      <rect x="25" y="18" width="14" height="28" rx="7" fill="#FFCC00" />
      <rect x="42" y="14" width="14" height="32" rx="7" fill="#00CA72" />
    </svg>
  );
}

function GrokIcon({ className }) {
  return (
    <svg viewBox="0 0 512 492" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M197.76 315.52l170.197-125.803c8.342-6.186 20.267-3.776 24.256 5.803 20.907 50.539 11.563 111.253-30.08 152.939-41.621 41.685-99.562 50.816-152.512 29.994l-57.834 26.816c82.965 56.768 183.701 42.731 246.656-20.33 49.941-50.006 65.408-118.166 50.944-179.627l.128.149c-20.971-90.282 5.162-126.378 58.666-200.17 1.28-1.75 2.56-3.499 3.819-5.291l-70.421 70.507v-.214l-243.883 245.27m-35.072 30.528c-59.563-56.96-49.28-145.088 1.515-195.926 37.568-37.61 99.136-52.97 152.874-30.4l57.707-26.666a166.554 166.554 0 00-39.019-21.334 191.467 191.467 0 00-208.042 41.942c-54.038 54.101-71.04 137.301-41.856 208.298 21.802 53.056-13.931 90.582-49.92 128.47C23.104 463.915 10.304 477.333 0 491.541l162.56-145.386" fill="currentColor"/>
    </svg>
  );
}

const integrations = [
  { name: 'Zapier', icon: SiZapier, color: '#FF4F00' },
  { name: 'Make', icon: SiMake, color: '#6B46C1' },
  { name: 'n8n', icon: SiN8N, color: '#FF6B35' },
  { name: 'OpenAI', icon: SiOpenai, color: '#10A37F' },
  { name: 'HubSpot', icon: SiHubspot, color: '#FF7A59' },
  { name: 'Salesforce', icon: SiSalesforce, color: '#00A1E0' },
  { name: 'Google', icon: SiGoogle, color: '#4285F4' },
  { name: 'Gmail', icon: SiGmail, color: '#EA4335' },
  { name: 'Google Drive', icon: SiGoogledrive, color: '#0F9D58' },
  { name: 'Google Sheets', icon: SiGooglesheets, color: '#34A853' },
  { name: 'Google Calendar', icon: SiGooglecalendar, color: '#4285F4' },
  { name: 'Monday.com', icon: MondayIcon, color: '#FFFFFF' },
  { name: 'Asana', icon: SiAsana, color: '#F06A6A' },
  { name: 'Slack', icon: SiSlack, color: '#4A154B' },
  { name: 'Notion', icon: SiNotion, color: '#FFFFFF' },
  { name: 'Airtable', icon: SiAirtable, color: '#18BFFF' },
  { name: 'Trello', icon: SiTrello, color: '#0052CC' },
  { name: 'Shopify', icon: SiShopify, color: '#95BF47' },
  { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
  { name: 'Mailchimp', icon: SiMailchimp, color: '#FFE01B' },
  { name: 'Calendly', icon: SiCalendly, color: '#006BFF' },
  { name: 'Dropbox', icon: SiDropbox, color: '#0061FF' },
  { name: 'Zoom', icon: SiZoom, color: '#0B5CFF' },
  { name: 'Discord', icon: SiDiscord, color: '#5865F2' },
  { name: 'ClickUp', icon: SiClickup, color: '#7B68EE' },
  { name: 'Jira', icon: SiJira, color: '#0052CC' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Intercom', icon: SiIntercom, color: '#1F8DED' },
  { name: 'Zendesk', icon: SiZendesk, color: '#03363D' },
  { name: 'Typeform', icon: SiTypeform, color: '#FFFFFF' },
  { name: 'Webflow', icon: SiWebflow, color: '#4353FF' },
  { name: 'QuickBooks', icon: SiQuickbooks, color: '#2CA01C' },
  { name: 'Xero', icon: SiXero, color: '#13B5EA' },
  { name: 'Miro', icon: SiMiro, color: '#FFD02F' },
  { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
  { name: 'LinkedIn', icon: SiLinkedin, color: '#0A66C2' },
  { name: 'YouTube', icon: SiYoutube, color: '#FF0000' },
  { name: 'Facebook', icon: SiFacebook, color: '#1877F2' },
];

const rowSets = [
  integrations.filter((_, index) => index % 3 === 0),
  integrations.filter((_, index) => index % 3 === 1),
  integrations.filter((_, index) => index % 3 === 2),
];

export default function TechStack() {
  return (
    <section id="stack" className="px-4 md:px-12 lg:px-32 py-20 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#00ff9d] text-xs md:text-sm mb-4">{'>'} integrations.scan()</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e0e0e0] mb-2">
          AUTOMATION_ECOSYSTEM_
        </h2>

        {/* Featured Tools */}
        <div className="mb-12">
          <div className="relative border border-[#00ff9d]/30 bg-[#0b0f0d] shadow-[0_0_0_1px_rgba(0,255,157,0.08),0_0_30px_rgba(0,255,157,0.08)]">
            <div className="flex items-center justify-between border-b border-[#00ff9d]/25 px-3 md:px-4 py-2 bg-[#0a0a0a]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00ff9d]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#666666]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#1a1a1a]" />
              </div>
              <p className="text-[10px] md:text-xs text-[#00ff9d] tracking-wide">
                rbn@automation:~/stack/featured
              </p>
            </div>

            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, rgba(0,255,157,0.5) 0px, rgba(0,255,157,0.5) 1px, transparent 1px, transparent 3px)',
              }}
            />

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center">
                {/* Automation Tools */}
                <div className="flex-1 max-w-[500px] mx-auto w-full">
                  <p className="text-[#00ff9d] text-xs md:text-sm mb-6 text-center">{'>'} automation_tools:</p>
                  <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10">
                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className="p-3 md:p-4 rounded-lg bg-[#0b0f0d] border border-[#00ff9d]/20 group-hover:border-[#00ff9d]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                        <SiZapier className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_12px_rgba(255,79,0,0.4)]" style={{ color: '#FF4F00' }} />
                      </div>
                      <span className="text-[#e0e0e0] text-sm md:text-base font-medium group-hover:text-[#00ff9d] transition-colors">Zapier</span>
                    </div>

                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className="p-3 md:p-4 rounded-lg bg-[#0b0f0d] border border-[#00ff9d]/20 group-hover:border-[#00ff9d]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                        <SiMake className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_12px_rgba(107,70,193,0.4)]" style={{ color: '#6B46C1' }} />
                      </div>
                      <span className="text-[#e0e0e0] text-sm md:text-base font-medium group-hover:text-[#00ff9d] transition-colors">Make</span>
                    </div>

                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className="p-3 md:p-4 rounded-lg bg-[#0b0f0d] border border-[#00ff9d]/20 group-hover:border-[#00ff9d]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                        <SiN8N className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_12px_rgba(255,107,53,0.4)]" style={{ color: '#FF6B35' }} />
                      </div>
                      <span className="text-[#e0e0e0] text-sm md:text-base font-medium group-hover:text-[#00ff9d] transition-colors">n8n</span>
                    </div>
                  </div>
                </div>

                {/* AI Tools */}
                <div className="flex-1 max-w-[500px] mx-auto w-full">
                  <p className="text-[#00ff9d] text-xs md:text-sm mb-6 text-center">{'>'} ai_models:</p>
                  <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className="p-3 md:p-4 rounded-lg bg-[#0b0f0d] border border-[#00ff9d]/20 group-hover:border-[#00ff9d]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                        <SiOpenai className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_12px_rgba(16,163,127,0.4)]" style={{ color: '#10A37F' }} />
                      </div>
                      <span className="text-[#e0e0e0] text-sm md:text-base font-medium group-hover:text-[#00ff9d] transition-colors">ChatGPT</span>
                    </div>

                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className="p-3 md:p-4 rounded-lg bg-[#0b0f0d] border border-[#00ff9d]/20 group-hover:border-[#00ff9d]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                        <SiGooglegemini className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_12px_rgba(72,133,237,0.4)]" style={{ color: '#4885ed' }} />
                      </div>
                      <span className="text-[#e0e0e0] text-sm md:text-base font-medium group-hover:text-[#00ff9d] transition-colors">Gemini</span>
                    </div>

                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className="p-3 md:p-4 rounded-lg bg-[#0b0f0d] border border-[#00ff9d]/20 group-hover:border-[#00ff9d]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                        <SiClaude className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_12px_rgba(217,119,87,0.4)]" style={{ color: '#D97757' }} />
                      </div>
                      <span className="text-[#e0e0e0] text-sm md:text-base font-medium group-hover:text-[#00ff9d] transition-colors">Claude</span>
                    </div>

                    <div className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className="p-3 md:p-4 rounded-lg bg-[#0b0f0d] border border-[#00ff9d]/20 group-hover:border-[#00ff9d]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                        <GrokIcon className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" style={{ color: '#FFFFFF' }} />
                      </div>
                      <span className="text-[#e0e0e0] text-sm md:text-base font-medium group-hover:text-[#00ff9d] transition-colors">Grok</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border border-[#00ff9d]/30 bg-[#0b0f0d] shadow-[0_0_0_1px_rgba(0,255,157,0.08),0_0_30px_rgba(0,255,157,0.08)]">
          <div className="flex items-center justify-between border-b border-[#00ff9d]/25 px-3 md:px-4 py-2 bg-[#0a0a0a]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00ff9d]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#666666]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#1a1a1a]" />
            </div>
            <p className="text-[10px] md:text-xs text-[#00ff9d] tracking-wide">
              rbn@automation:~/stack/integrations
            </p>
          </div>

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(0,255,157,0.5) 0px, rgba(0,255,157,0.5) 1px, transparent 1px, transparent 3px)',
            }}
          />

          {rowSets.map((row, rowIndex) => {
            const rowItems = [...row, ...row];
            const duration = rowIndex === 0 ? 22 : rowIndex === 1 ? 26 : 30;
            const direction = rowIndex === 1 ? 'reverse' : 'normal';
            const rowLabel = rowIndex === 0 ? 'left-stream' : rowIndex === 1 ? 'right-stream' : 'left-stream';

            return (
              <div
                key={`row-${rowIndex}`}
                className={`relative overflow-hidden ${rowIndex !== 2 ? 'border-b border-[#1a1a1a]' : ''}`}
              >
                <div className="flex items-center justify-between px-3 md:px-4 pt-2 text-[10px] md:text-xs text-[#00ff9d]/80">
                  <span>{'>'} row_{rowIndex + 1}.direction({rowLabel})</span>
                  <span>speed={duration}s</span>
                </div>

                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-[#0b0f0d] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-[#0b0f0d] to-transparent z-10" />

                <div
                  className="logo-carousel-track"
                  style={{
                    animationName: 'logoCarousel',
                    animationDuration: `${duration}s`,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationDirection: direction,
                    animationPlayState: 'running',
                  }}
                >
                  {rowItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={`${item.name}-${rowIndex}-${index}`}
                        className="flex items-center gap-3 px-4 py-3 md:py-4 border-r border-[#1a1a1a] min-w-max bg-[#0d1110]/70"
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6 drop-shadow-[0_0_8px_rgba(0,255,157,0.15)]" style={{ color: item.color }} />
                        <span className="text-sm md:text-base text-[#e0e0e0] whitespace-nowrap tracking-wide">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}