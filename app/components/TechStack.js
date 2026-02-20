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

const integrations = [
  { name: 'Zapier', icon: SiZapier, color: '#FF4F00' },
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
          ZAPIER_ECOSYSTEM_
        </h2>

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