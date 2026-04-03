import { useState } from "react";
import { COURSERA_HOME_URL } from "../constants/courseraUrls";
import svgPaths from "../imports/svg-skammmd5tx";
import svgPathsDesktop from "../imports/svg-4vihmbf681";
import imgImg04451 from "figma:asset/21be5635d68e524e6b98c71c0f1368b192dd7655.png";
import imgImage1 from "figma:asset/b4e5d3f2ed235f5346cc914f60be90ae3980d9f5.png";
import imgImage3 from "figma:asset/6b0b767feb2e6d442310aec1f64e348954b32ed8.png";
import imgImage4 from "figma:asset/19387b8d642184bd3cfb9c473e4d7b8615f2d19a.png";
import imgImage5 from "figma:asset/3b5b71eb72e91ab4a4ebef5fcff3623759202027.png";
import imgImage6 from "figma:asset/ac986be69020249ee50e2508f158321c917ede1a.png";
import imgImage7 from "figma:asset/a979e4de3f5caa5fc393f579dd7d8a26a07bbeb7.png";
import imgImage8 from "figma:asset/c8a19f83070842cdb0114610dfc72dce10b3d2ec.png";
import imgExistingGallery from "../assets/existing-gallery.png";
import imgExistingListMd from "../assets/existing-list.png";
import imgExistingListXs from "../assets/existing-list-xs.png";
import imgListImage8 from "../assets/list-image8.png";
import imgListImage9 from "../assets/list-image9.png";
import imgListImage10 from "../assets/list-image10.png";
import imgListImage11 from "../assets/list-image11.png";
import imgListImage12 from "../assets/list-image12.png";
import imgListImage13 from "../assets/list-image13.png";
import imgListImage14 from "../assets/list-image14.png";
import imgMixedHero from "../assets/mixed-hero.png";
import imgMixedArticle1 from "../assets/mixed-article-1.png";
import imgMixedArticle2 from "../assets/mixed-article-2.png";
import imgMixedArticle3 from "../assets/mixed-article-3.png";
import imgMixedWef from "../assets/mixed-wef.png";
import imgMixedCareer from "../assets/mixed-career.png";
import imgExistingMixed from "../assets/existing-mixed.png";

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329 1">
          <line stroke="#DAE1ED" x2="329" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-center relative shrink-0 w-full">
      <a
        href={COURSERA_HOME_URL}
        className="inline-block h-[20px] relative shrink-0 w-[139.204px] cursor-pointer"
        aria-label="Coursera"
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.204 20">
          <path d={svgPathsDesktop.pbd2aa00} fill="#0056D2" />
        </svg>
      </a>
      <Divider />
    </div>
  );
}

const LIST_PROMO_REDEEM_URL =
  "https://www.coursera.org/courseraplus/special/insite?redirectedfromexpired";

function Promo() {
  return (
    <div className="bg-[#f0f6ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] md:px-[24px] py-[12px] relative w-full">
          <p className="font-['Helvetica:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] text-center w-full">
            <span className="leading-[20px] text-[#0f1114] text-[14px]">⚡️ Save 40% on three months of Coursera Plus.* </span>
            <a href={LIST_PROMO_REDEEM_URL} className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] text-[#0056d2] text-[14px] underline">
              Redeem offer.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const HERO_GOOGLE_AI_CERT_URL =
  "https://www.coursera.org/professional-certificates/google-ai?lid=d558ury45ynp&utm_medium=email&utm_campaign=B2C-ded_2026-03-05_BZ_em_Google-AI-Redrop_yyGlobalHigh&bxid=67a2986463028f00586926c2&utm_source=marketing&utm_term=b2c_editorial";

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">
      <a
        href={HERO_GOOGLE_AI_CERT_URL}
        className="relative block h-[194px] shrink-0 w-full cursor-pointer rounded-[16px] md:h-auto md:aspect-[604/340]"
      >
        <img alt="Google AI Course" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
      </a>
      <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start not-italic relative shrink-0 text-[#0f1114] w-full">
        <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[36px] md:leading-[40px] not-italic relative shrink-0 text-[28px] md:text-[32px] w-full">
          Develop AI fluency in 10 hours with Google experts
        </p>
        <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start relative shrink-0 text-[16px] w-full">
          <p className="leading-[0] relative shrink-0 w-full">
            <span className="leading-[24px]">Experience matters, but AI skills are taking the lead—70% of employers prioritize candidates with AI skills over one with more years of experience.1 With the new </span>
            <a
              href="#"
              className="[text-decoration-skip-ink:none] decoration-solid font-['Helvetica:Bold',sans-serif] font-bold leading-[24px] underline"
            >
              Google AI Professional Certificate
            </a>
            <span className="leading-[24px]">, you can build the in-demand AI skills they&apos;re looking for.</span>
          </p>
          <div className="content-stretch flex flex-col gap-[8px] items-start leading-[24px] relative shrink-0 w-full">
            <p className="relative shrink-0 w-full">In just 10 hours, you can learn to:</p>
            <p className="relative shrink-0 w-full">👉 Learn to effectively prompt AI to get the results you actually want</p>
            <p className="relative shrink-0 w-full">👉 Analyze data and tailor content in a fraction of the time</p>
            <p className="relative shrink-0 w-full">👉 Vibe code practical apps for your daily work using plain language</p>
          </div>
          <p className="leading-[0] relative shrink-0 w-full">
            <span className="leading-[24px]">Enroll today to earn a trusted credential and </span>
            <span className="font-['Helvetica:Bold',sans-serif] font-bold leading-[24px]">get three months of Google AI Pro at no cost</span>
            <span className="leading-[24px]">. Get the skills, the portfolio, and the certificate to show you&apos;re ready for the AI-powered workforce.</span>
          </p>
        </div>
      </div>
      <a
        href={HERO_GOOGLE_AI_CERT_URL}
        className="bg-[#0056d2] h-[48px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#0047b3] transition-colors flex items-center justify-center"
      >
        <span className="font-['Helvetica:Bold',sans-serif] font-bold text-[14px] text-white leading-[22px] tracking-[0.005em]">Enroll now</span>
      </a>
    </div>
  );
}

function CourseCard({ image, title, hasNewTag = false }: { image: string; title: string; hasNewTag?: boolean }) {
  return (
    <a href="#" className="content-stretch flex gap-[12px] md:flex-col md:gap-[4px] items-center md:items-start relative shrink-0 w-full md:w-[286px] cursor-pointer group">
      {/* Mobile: horizontal layout with 100x100 image */}
      <div className="relative rounded-[8px] shrink-0 size-[100px] md:hidden">
        <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={image} />
      </div>
      {/* Desktop: vertical layout with aspect ratio image */}
      <div className="hidden md:block aspect-[286/161] relative rounded-[8px] shrink-0 w-full">
        <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={image} />
      </div>
      
      <div className="flex flex-[1_0_0] md:flex-initial flex-row items-center md:items-start self-stretch md:self-auto w-full">
        <div className="content-stretch flex flex-[1_0_0] md:flex-initial flex-col gap-[8px] items-start justify-center min-h-px min-w-px md:min-h-0 md:min-w-0 relative w-full">
          {hasNewTag ? (
            <div className="content-stretch flex items-start md:items-center justify-between relative shrink-0 w-full">
              <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f1114] text-[12px] whitespace-nowrap md:leading-[20px] md:text-[14px]">Google</p>
              <div className="bg-white content-stretch flex h-[22px] items-center justify-center px-[8px] relative rounded-[999px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 pointer-events-none rounded-[999px]" />
                <div className="flex flex-col font-['Helvetica:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f1114] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">New</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f1114] text-[12px] w-full md:leading-[20px] md:text-[14px]">Google</p>
          )}
          <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full md:group-hover:underline">{title}</p>
        </div>
      </div>
    </a>
  );
}

function SectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#0f1114] text-[24px] w-full">
        Build more in-demand skills with Google
      </p>
      
      {/* Mobile: single column */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full md:hidden">
        <CourseCard image={imgImage3} title="Google AI Essentials" />
        <CourseCard image={imgImage4} title="Google Prompting Essentials" />
        <CourseCard image={imgImage5} title="Google People Management Essentials" hasNewTag={true} />
        <CourseCard image={imgImage6} title="Google Data Analytics" />
        <CourseCard image={imgImage7} title="Google Project Management" />
        <CourseCard image={imgImage8} title="Google Cybersecurity" />
      </div>
      
      {/* Desktop: 2-column grid */}
      <div className="hidden md:flex md:flex-col md:gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <CourseCard image={imgImage3} title="Google AI Essentials" />
          <CourseCard image={imgImage4} title="Google Prompting Essentials" />
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <CourseCard image={imgImage5} title="Google People Management Essentials" hasNewTag={true} />
          <CourseCard image={imgImage6} title="Google Data Analytics" />
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <CourseCard image={imgImage7} title="Google Project Management" />
          <CourseCard image={imgImage8} title="Google Cybersecurity" />
        </div>
      </div>
    </div>
  );
}

function HeroBanner() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start relative shrink-0 w-full">
      <HeroContent />
      <Divider />
      <SectionContent />
      <Divider />
    </div>
  );
}

function AdminCustom() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start font-['Helvetica:Regular',sans-serif] not-italic relative shrink-0 text-[#5b6780] text-[12px] w-full">
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="leading-[18px]">1</span>
        <a href="#" className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline">Source</a>
      </p>
      <p className="leading-[18px] relative shrink-0 w-full">*Claim this offer by March 16, 2026 6:59 p.m. EST. Valid for new Coursera Plus subscribers only, limited to one per person. Cannot be used in conjunction with other offers. Coursera reserves the right to modify or cancel the promotion at any time. USD $35.40 each month for three months (regularly USD $59/month). Discount applied at checkout. Automatically renews on an annual basis for USD $59/month (plus applicable taxes), unless canceled. Cancel anytime in account settings. Offer not available to residents of India.</p>
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[32px] md:pb-[48px] pt-[24px] md:pt-[32px] px-[32px] md:px-[48px] relative w-full font-['Helvetica:Regular',sans-serif] text-[#0f1114]">
          <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start relative shrink-0 w-full">
              <Header />
              <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 w-full">
                <Promo />
              </div>
              <HeroBanner />
            </div>
            <AdminCustom />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppBadges() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0 w-[135px]">
      {/* Apple App Store Badge */}
      <a href="#" className="h-[40px] overflow-clip relative shrink-0 w-[119.664px] cursor-pointer hover:opacity-80">
        <div className="absolute contents inset-0">
          {/* Group1 - Background */}
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.664 40.0001">
            <g>
              <path d={svgPaths.pe30ae00} fill="#A6A6A6" />
              <path d={svgPaths.p1c0d3400} fill="black" />
            </g>
          </svg>
          {/* Group2 - Apple Logo */}
          <div className="absolute inset-[21.8%_76.86%_23.76%_8.33%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7166 21.7762">
              <g>
                <path d={svgPaths.p11c46880} fill="white" />
                <path d={svgPaths.p26de8970} fill="white" />
              </g>
            </svg>
          </div>
          {/* Group5 - Text */}
          <div className="absolute inset-[44.68%_8.5%_16.27%_28.77%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.0606 15.6202">
              <g>
                <path d={svgPaths.p19eaa100} fill="white" />
                <path d={svgPaths.p17b2f400} fill="white" />
                <path d={svgPaths.p3c7bcc00} fill="white" />
                <path d={svgPaths.p10598288} fill="white" />
                <path d={svgPaths.p281afc80} fill="white" />
                <path d={svgPaths.p3e942a70} fill="white" />
                <path d={svgPaths.p26bfc900} fill="white" />
                <path d={svgPaths.p2a194000} fill="white" />
              </g>
            </svg>
          </div>
          {/* Group7 - Download text */}
          <div className="absolute inset-[21.09%_12.41%_63.01%_29.81%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.144 6.35838">
              <g>
                <path d={svgPaths.p7e7480} fill="white" />
                <path d={svgPaths.p3d590a00} fill="white" />
                <path d={svgPaths.p1bb4ba00} fill="white" />
                <path d={svgPaths.p20f99500} fill="white" />
                <path d={svgPaths.p145c3000} fill="white" />
                <path d={svgPaths.p29178180} fill="white" />
                <path d={svgPaths.p22443f80} fill="white" />
                <path d={svgPaths.p220fa880} fill="white" />
                <path d={svgPaths.p1ae54100} fill="white" />
                <path d={svgPaths.p2467c500} fill="white" />
                <path d={svgPaths.p3d549100} fill="white" />
                <path d={svgPaths.p17bd4200} fill="white" />
                <path d={svgPaths.p1a93a080} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </a>
      {/* Google Play Badge */}
      <a href="#" className="h-[40px] relative shrink-0 w-[135px] cursor-pointer hover:opacity-80">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 40">
          <g clipPath="url(#clip0_1_2517)">
            <path d={svgPaths.p24728000} fill="black" />
            <path d={svgPaths.p3937ae00} fill="#A6A6A6" />
            <g>
              <path d={svgPaths.p27990cc0} fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="0.2" />
              <path d={svgPaths.p1c8a2c00} fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="0.2" />
              <path d={svgPaths.p14d6d100} fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="0.2" />
              <path d={svgPaths.p3e210900} fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="0.2" />
              <path d={svgPaths.p2f74d080} fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="0.2" />
              <path d={svgPaths.p130a9c00} fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="0.2" />
              <path d={svgPaths.p20ee5800} fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="0.2" />
            </g>
            <path d={svgPaths.p36b29e00} fill="white" />
            <g>
              <path d={svgPaths.p1188180} fill="#EA4335" />
              <path d={svgPaths.pf2f3670} fill="#FBBC04" />
              <path d={svgPaths.pb279b80} fill="#4285F4" />
              <path d={svgPaths.p3efc9400} fill="#34A853" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_2517">
              <rect fill="white" height="40" width="135" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <a href="#" className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-80">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1b26a100} fill="#0F1114" />
        </svg>
        <div className="absolute inset-[21.43%_33.29%_18.88%_35.71%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.44 14.3266">
            <path d={svgPaths.p11a4a80} fill="white" />
          </svg>
        </div>
      </a>
      <a href="#" className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-80">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1af0e080} fill="#0F1114" />
        </svg>
        <div className="absolute bottom-[21.43%] left-[21.43%] right-[19.31%] top-1/4">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2232 12.8571">
            <path d={svgPaths.p36fb4f00} fill="white" />
          </svg>
        </div>
      </a>
      <a href="#" className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-80">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1af0e080} fill="#0F1114" />
        </svg>
        <div className="absolute inset-[21.29%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7812 13.7812">
            <path d={svgPaths.pdb0d000} fill="white" />
          </svg>
        </div>
        <div className="absolute inset-[40.43%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.59375 4.59375">
            <path d={svgPaths.pd593700} fill="black" />
          </svg>
        </div>
        <div className="absolute inset-[26.46%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2982 11.2982">
            <path clipRule="evenodd" d={svgPaths.p15221400} fill="black" fillRule="evenodd" />
          </svg>
        </div>
      </a>
      <a href="#" className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-80">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1b26a100} fill="#0F1114" />
        </svg>
        <div className="absolute inset-[21.43%_23.19%_23.29%_21.43%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2909 13.2673">
            <path d={svgPaths.pbfdc600} fill="white" />
            <path d={svgPaths.p3a700b00} fill="white" />
            <path d={svgPaths.p118e82a0} fill="white" />
          </svg>
        </div>
      </a>
      <a href="#" className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-80">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1af0e080} fill="#0F1114" />
        </svg>
        <div className="absolute bottom-[21.43%] left-1/4 right-[24.58%] top-[21.43%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1008 13.7143">
            <path d={svgPaths.p7984d00} fill="white" />
          </svg>
        </div>
      </a>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-[1_0_0] md:flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] font-bold gap-[12px] items-start leading-[22px] min-h-px min-w-px md:min-w-[175px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.005em] whitespace-nowrap">
      <a href="#" className="relative shrink-0 hover:underline">Help Center</a>
      <a href="#" className="relative shrink-0 hover:underline">Coursera for Business</a>
      <a href="#" className="relative shrink-0 hover:underline">Email Settings</a>
      <a href="#" className="relative shrink-0 hover:underline">Unsubscribe</a>
      <a href="#" className="relative shrink-0 hover:underline">Privacy Notice</a>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0f1114] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] md:px-[48px] md:py-[32px] relative w-full">
        <div className="content-stretch flex flex-wrap gap-y-[32px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
            <div className="h-[16px] relative shrink-0 w-[114.667px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.667 16">
                <path d={svgPaths.p291b7680} fill="white" />
              </svg>
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <FooterLinks />
              <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0">
                <AppBadges />
                <SocialMediaLinks />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start font-['Helvetica:Regular',sans-serif] not-italic relative shrink-0 text-[12px] text-white w-full">
          <p className="leading-[0] relative shrink-0 w-full">
            <span className="leading-[18px]">© 2026 Coursera Inc. All rights reserved. Coursera and the Coursera logo are registered trademarks of Coursera, Inc. All other trademarks are property of their respective owners. Log in to manage all your notification preferences in </span>
            <a href="#" className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline">Email Settings</a>
            <span className="leading-[18px]">.</span>
          </p>
          <p className="leading-[18px] relative shrink-0 w-full">Coursera | 2440 W El Camino Real 5th floor, Mountain View, CA 94040 USA</p>
        </div>
      </div>
    </div>
  );
}

type Template = "gallery" | "list" | "existing" | "existing-list" | "mixed" | "existing-mixed";

const TEMPLATE_ORDER: Template[] = ["gallery", "existing", "list", "existing-list", "mixed", "existing-mixed"];

const TEMPLATE_TAB_LABELS: Record<Template, string> = {
  gallery: "New Gallery view",
  existing: "Existing gallery view",
  list: "New list view",
  "existing-list": "Existing list view",
  mixed: "New mixed view",
  "existing-mixed": "Existing mixed view",
};

function parseTemplateParam(search: string): Template {
  const t = new URLSearchParams(search).get("template") as Template | null;
  if (t && TEMPLATE_ORDER.includes(t)) return t;
  return "gallery";
}

function GalleryView() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[393px] md:w-[700px] max-w-full">
      <Desktop />
      <Footer />
      <div className="h-[95px] relative shrink-0 w-full md:hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[896.84%] left-0 max-w-none top-[-797.03%] w-full" src={imgImg04451} />
        </div>
      </div>
    </div>
  );
}

const listCourseData = [
  { image: imgListImage8, provider: "Google", title: "Google Prompting Essentials", meta: "Specialization · 4 courses" },
  { image: imgListImage9, provider: "IBM", title: "Generative AI: Introduction and Applications", meta: "" },
  { image: imgListImage10, provider: "Google", title: "Google UX Design", meta: "Professional Certificate · 8 courses · Offers degree credit" },
  { image: imgListImage11, provider: "IBM", title: "Generative AI: Prompt Engineering Basics", meta: "" },
  { image: imgListImage12, provider: "IBM", title: "Generative AI for Data Analysts", meta: "Specialization · 3 courses" },
  { image: imgListImage13, provider: "Vanderbilt University", title: "Prompt Engineering for ChatGPT", meta: "" },
  { image: imgListImage14, provider: "Vanderbilt University", title: "Prompt Engineering", meta: "Specialization · 3 courses" },
];

function ListCourseItem({ image, provider, title, meta }: { image: string; provider: string; title: string; meta: string }) {
  return (
    <a href="#" className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full cursor-pointer group">
      <div className="relative rounded-[8px] shrink-0 size-[100px] md:size-[128px]">
        <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={image} />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
        <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[#0f1114] w-full md:leading-[20px] md:text-[14px]">{provider}</p>
        <div className="flex flex-col gap-[4px] w-full">
          <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full md:group-hover:underline">{title}</p>
          {meta && (
            <p className="font-['Helvetica:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#5b6780] text-[12px] tracking-[0%] w-full md:leading-[20px] md:text-[14px]">
              {meta}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}

function ListPromo() {
  return (
    <div className="bg-[#f0f6ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] md:px-[24px] py-[12px] relative w-full">
          <p className="font-['Helvetica:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] text-center w-full">
            <span className="leading-[20px] text-[#0f1114] text-[14px]">🔥 Ends today! Save 40% on three months of Coursera Plus. </span>
            <a href={LIST_PROMO_REDEEM_URL} className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] text-[#0056d2] text-[14px] underline">
              Redeem offer.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ListRecommendations() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] md:gap-[12px] items-start relative shrink-0 w-full">
        <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[36px] md:leading-[40px] not-italic relative shrink-0 text-[#0f1114] text-[28px] md:text-[32px] w-full">
          Recommendations for you
        </p>
        <p className="font-['Helvetica:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">
          You&apos;re set to take on new challenges. Find the recommended courses made for you.
        </p>
      </div>
    </div>
  );
}

const LIST_CATALOG_BROWSE_URL =
  "https://www.coursera.org/browse?lid=vkggwpzzdkwd&utm_medium=email&utm_campaign=WeeklyRecs_SeizetheSavings_GlobalHigh&bxid=67a2986463028f00586926c2&utm_source=marketing&utm_term=recommendations";

function ListCourseSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#0f1114] text-[24px] w-full">
        Specializations &amp; Courses
      </p>
      <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start relative shrink-0 w-full">
        {listCourseData.map((course, i) => (
          <ListCourseItem key={i} {...course} />
        ))}
      </div>
      <a
        href={LIST_CATALOG_BROWSE_URL}
        className="bg-[#0056d2] h-[48px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#0047b3] transition-colors flex items-center justify-center"
      >
        <span className="font-['Helvetica:Bold',sans-serif] font-bold text-[14px] text-white leading-[22px] tracking-[0.005em]">See catalog</span>
      </a>
    </div>
  );
}

function ListDisclaimer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start font-['Helvetica:Regular',sans-serif] not-italic relative shrink-0 text-[#5b6780] text-[12px] w-full">
      <p className="leading-[18px] relative shrink-0 w-full">
        Claim this offer by March 16, 2026, 11:59 p.m. UTC. Valid for new Coursera Plus subscribers only, limited to one per person. Cannot be used in conjunction with other offers. Coursera reserves the right to modify or cancel the promotion at any time. USD $35.40 for 3 consecutive months (regularly USD $59/month). Discount applied at checkout. Automatically renews on a monthly basis for USD $59/month (plus applicable taxes), unless canceled. Cancel anytime in account settings. Offer not available to residents of India. If located outside the US, local currency and pricing will be used for purchase and shown at checkout.
      </p>
    </div>
  );
}

function ListBody() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[32px] md:pb-[48px] pt-[24px] md:pt-[32px] px-[32px] md:px-[48px] relative w-full font-['Helvetica:Regular',sans-serif] text-[#0f1114]">
          <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start relative shrink-0 w-full">
              <Header />
              <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 w-full">
                <ListPromo />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start relative shrink-0 w-full">
              <ListRecommendations />
              <Divider />
              <ListCourseSection />
              <Divider />
            </div>
            <ListDisclaimer />
          </div>
        </div>
      </div>
    </div>
  );
}

function ListView() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[393px] md:w-[700px] max-w-full">
      <ListBody />
      <Footer />
    </div>
  );
}

function ExistingGalleryView() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[393px] md:w-[700px] max-w-full">
      <img alt="Existing gallery email design" className="w-full" src={imgExistingGallery} />
    </div>
  );
}

/** PNG baseline — SM/MD 1440 preview (Gmail chrome). XS 393 slot for this template is intentionally blank (rebuild later). */
function ExistingListViewStatic() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[393px] md:w-[700px] max-w-full">
      <picture className="block w-full">
        <source media="(min-width: 768px)" srcSet={imgExistingListMd} />
        <img alt="Existing list email design" className="block h-auto w-full" src={imgExistingListXs} />
      </picture>
    </div>
  );
}

function ExistingMixedView() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[393px] md:w-[700px] max-w-full">
      <img alt="Existing mixed email design: Turning AI into a productivity superpower" className="w-full" src={imgExistingMixed} />
    </div>
  );
}

function MixedCourseItem({ image, provider, title, description }: { image: string; provider: string; title: string; description: string }) {
  return (
    <a href="#" className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full cursor-pointer group">
      <div className="border border-[#dae1ed] border-solid relative rounded-[8px] shrink-0 size-[100px] md:size-[128px]">
        <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={image} />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
        {/* Typography: CDS email audit — Body Secondary (14/20) institution on md+; Subtitle Medium (16/20) title on XS, Subtitle Large (20/24) on md+; Body Tertiary / Body Secondary for descriptions */}
        <p className="hidden md:block font-['Helvetica:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[#0f1114] w-full">{provider}</p>
        <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full md:group-hover:underline">{title}</p>
        <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5b6780] text-[12px] w-full md:leading-[20px] md:text-[14px]">{description}</p>
      </div>
    </a>
  );
}

const MIXED_GENAI_EXPLORE_URL =
  "https://www.coursera.org/explore/generative-ai?lid=6ei9pwnzuc3x&utm_medium=email&utm_campaign=Reactivate_Career_Chat_3&bxid=67a67ec5d1b84d00585e4e11&utm_source=lifecycle&utm_term=b2c";

const MIXED_COURSERA_PLUS_URL =
  "https://www.coursera.org/courseraplus?lid=vgeohvdq8uxt&utm_medium=email&utm_campaign=Reactivate_Career_Chat_3&bxid=67a67ec5d1b84d00585e4e11&utm_source=lifecycle&utm_term=b2c";

const MIXED_CAREER_CHAT_NEWSLETTER_URL =
  "https://www.linkedin.com/newsletters/7055249714664853504?lid=lwmk1jshk174&utm_medium=email&utm_campaign=Reactivate_Career_Chat_3&bxid=67a67ec5d1b84d00585e4e11&utm_source=lifecycle&utm_term=b2c";

function MixedBody() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center pb-[32px] md:pb-[48px] pt-[24px] md:pt-[32px] px-[24px] md:px-[48px] relative shrink-0 w-full font-['Helvetica:Regular',sans-serif] text-[#0f1114]">
      <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <Header />
          {/* Hero — Title Large: XS 28/36, SM/MD 32/40 (Email audit 155:8878 / 155:8935); body Body Primary 16/24 */}
          <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start relative shrink-0 w-full">
            {/* Hero content */}
            <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">
              <a
                href={MIXED_GENAI_EXPLORE_URL}
                className="relative block shrink-0 w-full cursor-pointer rounded-[16px] aspect-[345/194] md:aspect-[604/340]"
              >
                <img alt="AI productivity" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgMixedHero} />
              </a>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[28px] w-full md:leading-[40px] md:text-[32px]">
                  Turning AI into a productivity superpower
                </p>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <p className="leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
                    Welcome back to your high-income skills series! This week, we're exploring the rapidly evolving world of artificial intelligence (AI), a skill set that is climbing across almost every field.
                  </p>
                  <p className="leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
                    AI is often used to drive automation and perform tasks requiring minimal human input, like information sorting. But you don't need to know the ins and outs of algorithms in order to benefit from AI. You can:
                  </p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full text-[16px]">
                    <ul className="block relative shrink-0 w-full">
                      <li className="leading-[24px] list-disc ms-[24px]">
                        Use generative AI, like <a href="#" className="underline cursor-pointer hover:opacity-80">ChatGPT</a>, to brainstorm or write text
                      </li>
                    </ul>
                    <ul className="block relative shrink-0 w-full">
                      <li className="leading-[24px] list-disc ms-[24px]">
                        Explore <a href="#" className="underline cursor-pointer hover:opacity-80">AI ethics</a> to safeguard against the negative consequences of AI technology
                      </li>
                    </ul>
                    <ul className="block relative shrink-0 w-full">
                      <li className="leading-[24px] list-disc ms-[24px]">
                        Develop an AI strategy and incorporate new tools into your workflow
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <a
                href={MIXED_GENAI_EXPLORE_URL}
                className="bg-[#0056d2] h-[48px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#0047b3] transition-colors flex items-center justify-center"
              >
                <span className="font-['Helvetica:Bold',sans-serif] font-bold text-[14px] text-white leading-[22px] tracking-[0.005em]">
                  Explore 150+ GenAI courses
                </span>
              </a>
            </div>
            <Divider />
            {/* Where to begin — Title Medium 24/28; Body Primary 16/24 */}
            <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
                <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] relative shrink-0 text-[24px] w-full">Where to begin</p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full text-[16px]">
                  <p className="leading-[0] relative shrink-0 w-full">
                    <span className="leading-[24px]">For a beginner-friendly crash course, try Google Cloud&apos;s </span>
                    <a href="#" className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline cursor-pointer hover:opacity-80">
                      Introduction to Generative AI
                    </a>
                    <span className="leading-[24px]">
                      . In one hour, you&apos;ll learn what generative AI is, how it works, and tools you can use to build your own Gen AI apps.
                    </span>
                  </p>
                  <p className="leading-[24px] relative shrink-0 w-full">
                    Ready to deepen your skills? Here are some more popular AI courses:
                  </p>
                </div>
              </div>
              <MixedCourseItem
                image={imgMixedArticle1}
                provider="University of Pennsylvania"
                title="Learn AI business applications"
                description="Explore AI applications across several business sectors, including marketing, finance, and people management."
              />
              <MixedCourseItem
                image={imgMixedArticle2}
                provider="Vanderbilt University"
                title="Save time with AI"
                description="Identify how to use AI to manage projects and automate tasks."
              />
              <MixedCourseItem
                image={imgMixedArticle3}
                provider="Google"
                title="Get the most out of AI"
                description="Learn how to give clear instructions to generative AI so you can unlock more of AI's benefits."
              />
            </div>
            <Divider />
            {/* Looking for more — Title Medium 24/28; Body Primary 16/24; secondary CTA Subtitle Medium 16/20 */}
            <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">
              <a
                href={MIXED_COURSERA_PLUS_URL}
                className="border border-[#dae1ed] border-solid relative block h-[194px] shrink-0 w-full cursor-pointer rounded-[16px] md:h-auto md:aspect-[604/340]"
              >
                <img alt="World Economic Forum stats" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgMixedWef} />
              </a>
              <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['Helvetica:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] w-full">
                  Looking for more in-demand skills?
                </p>
                <p className="leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
                  800+ global employers shared their views on skills and jobs over the next 5 years in the World Economic Forum's Future of Jobs report. Explore <a href="#" className="underline cursor-pointer hover:opacity-80">high-income skills</a> that you can carry with you to any job.
                </p>
                <p className="leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
                  Best news of all? You could learn multiple high-income skills with a Coursera Plus subscription!
                </p>
              </div>
              <a
                href={MIXED_COURSERA_PLUS_URL}
                className="h-[48px] relative rounded-[8px] shrink-0 w-full cursor-pointer border border-[#0056d2] hover:bg-[#f0f6ff] transition-colors flex items-center justify-center"
              >
                <span className="font-['Helvetica:Bold',sans-serif] font-bold text-[14px] text-[#0056d2] leading-[22px] tracking-[0.005em]">
                  Get Coursera Plus
                </span>
              </a>
            </div>
          </div>
        </div>
        <Divider />
        {/* Career tips — Subtitle Large 20/24 headline; Body Primary 16/24; link Action Primary 14/22 Bold */}
        <div className="bg-[#f0f6ff] content-stretch flex flex-col gap-[16px] items-start px-[32px] pb-[32px] pt-[24px] md:px-[32px] md:pb-[32px] md:pt-[32px] relative rounded-[16px] shrink-0 w-full">
          <div className="content-stretch flex w-full flex-col gap-[16px] md:flex-row md:items-center md:gap-[48px]">
            <div className="content-stretch flex w-full min-w-0 flex-col gap-[16px] items-start leading-[24px] not-italic md:flex-[1_0_0]">
              <p className="w-full shrink-0 font-['Helvetica:Bold',sans-serif] font-bold text-[20px] leading-[24px]">
                Looking for more career tips?
              </p>
              <p className="w-full shrink-0 text-[14px] leading-[20px] font-normal">
                Coursera&apos;s Career Chat will answer your career questions and share resources to support your career growth.
              </p>
            </div>
            <div className="relative hidden size-[80px] shrink-0 md:block">
              <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgMixedCareer} />
            </div>
          </div>
          <a
            href={MIXED_CAREER_CHAT_NEWSLETTER_URL}
            className="inline-flex cursor-pointer items-center gap-[8px] font-['Helvetica:Bold',sans-serif] font-bold text-[14px] leading-[22px] tracking-[0.005em] text-[#0056d2] no-underline"
          >
            Subscribe to Career Chat
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
              <path
                d="M10.95 7.75H0.9C0.645 7.75 0.431 7.664 0.259 7.493C0.086 7.321 0 7.109 0 6.855C0 6.602 0.086 6.388 0.259 6.213C0.431 6.038 0.645 5.95 0.9 5.95H10.95L6.545 1.545C6.365 1.365 6.275 1.154 6.275 0.913C6.275 0.671 6.367 0.454 6.55 0.263C6.733 0.088 6.946 0 7.188 0C7.429 0 7.64 0.09 7.82 0.271L13.765 6.223C13.855 6.313 13.921 6.411 13.963 6.516C14.004 6.621 14.025 6.734 14.025 6.854C14.025 6.974 14.004 7.087 13.963 7.192C13.921 7.297 13.858 7.392 13.775 7.475L7.825 13.425C7.642 13.608 7.433 13.696 7.2 13.688C6.967 13.679 6.758 13.587 6.575 13.412C6.392 13.221 6.3 13.003 6.3 12.758C6.3 12.514 6.392 12.303 6.575 12.125L10.95 7.75Z"
                fill="#0056d2"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function MixedView() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[393px] md:w-[700px] max-w-full">
      <MixedBody />
      <Footer />
    </div>
  );
}

type PreviewViewport = "xs" | "md";

function DesignPreviewNav({
  template,
  onTemplateChange,
  viewport,
  onViewportChange,
}: {
  template: Template;
  onTemplateChange: (t: Template) => void;
  viewport: PreviewViewport;
  onViewportChange: (v: PreviewViewport) => void;
}) {
  return (
    <div className="w-full rounded-[12px] border border-[#e8eaed] bg-white shadow-sm overflow-hidden">
      <div className="flex flex-wrap gap-x-8 gap-y-1 px-5 pt-5 pb-0">
        {TEMPLATE_ORDER.map((key) => {
          const active = template === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onTemplateChange(key)}
              className={`relative pb-3 text-[14px] leading-tight transition-colors ${
                active ? "font-bold text-[#0f1114]" : "font-normal text-[#8b95a5] hover:text-[#0f1114]"
              }`}
            >
              {TEMPLATE_TAB_LABELS[key]}
              {active && <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-[1px] bg-[#0f1114]" aria-hidden />}
            </button>
          );
        })}
      </div>
      <div className="h-px w-full bg-[#e8eaed]" />
      <div className="flex flex-wrap items-center gap-3 px-5 py-4">
        <span className="sr-only">Preview width</span>
        <button
          type="button"
          onClick={() => onViewportChange("md")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors ${
            viewport === "md" ? "bg-[#4a5568] text-white shadow-sm" : "bg-[#eef2f7] text-[#4a5568] hover:bg-[#e4eaf2]"
          }`}
        >
          {viewport === "md" && (
            <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-white/20" aria-hidden>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-white">
                <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
          SM/MD 1440px
        </button>
        <button
          type="button"
          onClick={() => onViewportChange("xs")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors ${
            viewport === "xs" ? "bg-[#4a5568] text-white shadow-sm" : "bg-[#eef2f7] text-[#4a5568] hover:bg-[#e4eaf2]"
          }`}
        >
          {viewport === "xs" && (
            <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-white/20" aria-hidden>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-white">
                <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
          XS 393px
        </button>
      </div>
    </div>
  );
}

function AppEmbedShell() {
  const template = parseTemplateParam(typeof window !== "undefined" ? window.location.search : "");
  const views: Record<Template, import("react").ReactNode> = {
    gallery: <GalleryView />,
    list: <ListView />,
    existing: <ExistingGalleryView />,
    "existing-list": null,
    mixed: <MixedView />,
    "existing-mixed": <ExistingMixedView />,
  };
  return <div className="min-h-screen w-full bg-[#f5f5f5]">{views[template]}</div>;
}

function GmailSidebar() {
  return (
    <div className="w-[68px] flex flex-col items-center pt-[4px] shrink-0 border-r border-[#e0e0e0]">
      <div className="flex flex-col items-center gap-[4px] w-full px-[8px]">
        <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#444746"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </button>
        <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#444746"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>
        </button>
        <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#444746"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
        </button>
      </div>
    </div>
  );
}

function GmailNavPanel() {
  return (
    <div className="w-[176px] flex flex-col pt-[8px] shrink-0 overflow-hidden">
      <button className="mx-[16px] mb-[16px] h-[56px] w-[136px] bg-[#c2e7ff] rounded-[16px] flex items-center gap-[12px] px-[20px] text-[14px] font-medium text-[#001d35] hover:shadow-md transition-shadow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" fill="#001d35"/></svg>
        Compose
      </button>
      <div className="flex flex-col">
        <div className="flex items-center px-[24px] h-[32px] bg-[#d3e3fd] rounded-r-full text-[14px] font-bold text-[#001d35]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#001d35" className="mr-[16px] shrink-0"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>
          <span className="flex-1">Inbox</span>
          <span className="text-[12px] font-bold">4,953</span>
        </div>
        {[
          { icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z", label: "Starred" },
          { icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z", label: "Snoozed" },
          { icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z", label: "Sent" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center px-[24px] h-[32px] rounded-r-full text-[14px] text-[#444746] hover:bg-[#e8eaed] transition-colors cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#444746" className="mr-[16px] shrink-0"><path d={icon} /></svg>
            <span>{label}</span>
          </div>
        ))}
        <div className="flex items-center px-[24px] h-[32px] rounded-r-full text-[14px] text-[#444746] hover:bg-[#e8eaed] transition-colors cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#444746" className="mr-[16px] shrink-0"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10z" /></svg>
          <span className="flex-1">Drafts</span>
          <span className="text-[12px]">7</span>
        </div>
        <div className="flex items-center px-[24px] h-[32px] rounded-r-full text-[14px] text-[#444746] hover:bg-[#e8eaed] transition-colors cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#444746" className="mr-[16px] shrink-0"><path d="M18 6V4l-2-2h-5L9 4v2H3v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6h-3zm-7-2h2l1 1v1h-4V5l1-1zm7 16H6V8h12v12z" /></svg>
          <span className="flex-1">Purchases</span>
          <span className="text-[12px]">398</span>
        </div>
        <div className="flex items-center px-[24px] h-[32px] rounded-r-full text-[14px] text-[#444746] hover:bg-[#e8eaed] transition-colors cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#444746" className="mr-[16px] shrink-0"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
          <span>More</span>
        </div>
        <div className="mt-[16px] flex items-center justify-between px-[24px] h-[32px]">
          <span className="text-[14px] font-medium text-[#444746]">Labels</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#444746" className="cursor-pointer"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
        </div>
      </div>
    </div>
  );
}

function GmailTopBar() {
  return (
    <div className="h-[64px] flex items-center px-[8px] gap-[8px] shrink-0 border-b border-[#e0e0e0]">
      <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#5f6368"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
      <div className="flex items-center gap-[8px] shrink-0">
        <svg width="28" height="28" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#4285F4" clipPath="polygon(0 0, 50% 0, 50% 100%, 0 100%)"/>
          <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64" fill="#34A853" opacity="0.8"/>
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64" fill="#FBBC04" opacity="0.8"/>
        </svg>
        <span className="text-[22px] text-[#5f6368] font-normal">Gmail</span>
      </div>
      <div className="flex-1 max-w-[720px] mx-[40px]">
        <div className="bg-[#eaf1fb] rounded-full h-[48px] flex items-center px-[16px] gap-[12px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          <span className="text-[16px] text-[#5f6368]">Search mail</span>
          <div className="flex-1" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
        </div>
      </div>
      <div className="flex items-center gap-[4px] shrink-0">
        <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
        </button>
        <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
        </button>
        <div className="flex items-center gap-[8px] ml-[8px]">
          <div className="flex items-center gap-[4px] bg-[#ceead6] rounded-full px-[12px] h-[32px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#188038]" />
            <span className="text-[12px] text-[#188038] font-medium">Active</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#188038"><path d="M7 10l5 5 5-5z"/></svg>
          </div>
          <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5f6368"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
          </button>
          <div className="w-[36px] h-[36px] rounded-full bg-[#1b72e8] flex items-center justify-center text-white text-[16px] font-medium cursor-pointer">W</div>
        </div>
      </div>
    </div>
  );
}

function GmailEmailHeader({ subject }: { subject: string }) {
  return (
    <div className="border-b border-[#e0e0e0]">
      <div className="flex items-center h-[48px] px-[8px] gap-[4px]">
        <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        </button>
        {[
          "M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 5.78 3 6.22V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.22c0-.44-.17-.65-.46-.99zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z",
          "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
          "M18.83 7h-2.6L10.5 4 4 7.4V17c-1.1 0-2-.9-2-2V7.17c0-.53.32-1.09.8-1.34L10.5 2l7.54 3.83c.43.22.73.67.79 1.17zM20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 3.67l-6.5 3.33L7 11.67V10l6.5 3.33L20 10v1.67z",
          "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0012 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
          "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
          "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
        ].map((d, i) => (
          <button key={i} className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d={d} /></svg>
          </button>
        ))}
        <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
      </div>
      <div className="flex items-center justify-between px-[20px] pb-[4px]">
        <div className="flex items-center gap-[8px]">
          <h2 className="text-[22px] text-[#1f1f1f]">{subject}</h2>
          <span className="bg-[#e8eaed] text-[#5f6368] text-[12px] px-[6px] py-[1px] rounded-[4px]">Inbox</span>
          <span className="text-[#5f6368] text-[12px] cursor-pointer">×</span>
        </div>
        <div className="flex items-center gap-[4px]">
          <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#5f6368"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
          </button>
          <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#5f6368"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-[20px] py-[12px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#1a73e8] flex items-center justify-center text-white text-[18px] font-medium shrink-0">C</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-[4px]">
              <span className="text-[14px] font-bold text-[#1f1f1f]">Coursera</span>
              <span className="text-[12px] text-[#5f6368]">&lt;Coursera@m.learn.coursera.org&gt;</span>
            </div>
            <div className="flex items-center gap-[4px]">
              <span className="text-[12px] text-[#5f6368]">to ashin.1124</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#5f6368"><path d="M7 10l5 5 5-5z"/></svg>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <span className="text-[12px] text-[#5f6368] mr-[8px]">Mar 16, 2026, 3:56 AM</span>
          {[
            "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
            "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
            "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z",
            "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
          ].map((d, i) => (
            <button key={i} className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#5f6368"><path d={d} /></svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function GmailReplyBar() {
  return (
    <div className="flex items-center gap-[8px] px-[20px] py-[16px] border-t border-[#e0e0e0]">
      {[
        { icon: "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z", label: "Reply" },
        { icon: "M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z", label: "Reply all" },
        { icon: "M12 8V4l8 8-8 8v-4H4V8h8z", label: "Forward" },
      ].map(({ icon, label }) => (
        <button key={label} className="flex items-center gap-[8px] px-[20px] h-[36px] rounded-full border border-[#dadce0] text-[14px] text-[#5f6368] hover:bg-[#f1f3f4] transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#5f6368"><path d={icon} /></svg>
          {label}
        </button>
      ))}
      <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-[#e8eaed] transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#5f6368"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
      </button>
    </div>
  );
}

function GmailWrapper({ children, subject }: { children: React.ReactNode; subject: string }) {
  return (
    <div className="flex flex-col w-full bg-[#f6f8fc] rounded-[12px] overflow-hidden border border-[#e0e0e0] shadow-sm" style={{ minHeight: "90vh" }}>
      <GmailTopBar />
      <div className="flex flex-1 overflow-hidden">
        <GmailSidebar />
        <GmailNavPanel />
        <div className="flex-1 flex flex-col bg-white rounded-tl-[16px] overflow-hidden">
          <GmailEmailHeader subject={subject} />
          <div className="flex-1 overflow-auto flex justify-center bg-white">
            <div className="flex justify-center w-full">
              {children}
            </div>
          </div>
          <GmailReplyBar />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [template, setTemplate] = useState<Template>("gallery");
  const [previewViewport, setPreviewViewport] = useState<PreviewViewport>("md");

  const isEmbed =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("embed") === "1";

  if (isEmbed) {
    return <AppEmbedShell />;
  }

  const views: Record<Template, import("react").ReactNode> = {
    gallery: <GalleryView />,
    list: <ListView />,
    existing: <ExistingGalleryView />,
    "existing-list": <ExistingListViewStatic />,
    mixed: <MixedView />,
    "existing-mixed": <ExistingMixedView />,
  };
  const emailContent = views[template];

  const subjectLines: Record<Template, string> = {
    gallery: "New from Google! Go from familiar to AI fluent in 10 hours",
    existing: "New from Google! Go from familiar to AI fluent in 10 hours",
    list: "Ready: Google Prompting Essentials",
    "existing-list": "Ready: Google Prompting Essentials",
    mixed: "High-income skills: Turning AI into a productivity superpower",
    "existing-mixed": "High-income skills: Turning AI into a productivity superpower",
  };

  const iframeSrc =
    typeof window !== "undefined"
      ? (() => {
          const u = new URL(window.location.href);
          u.searchParams.set("embed", "1");
          u.searchParams.set("template", template);
          return u.toString();
        })()
      : "";

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f5f5f5]">
      <div className="w-full max-w-[1600px] px-4 pt-4 pb-2">
        <DesignPreviewNav
          template={template}
          onTemplateChange={setTemplate}
          viewport={previewViewport}
          onViewportChange={setPreviewViewport}
        />
      </div>

      {previewViewport === "xs" ? (
        <div className="flex w-full flex-1 justify-center px-4 pb-8">
          {template === "existing-list" ? (
            <div
              className="w-[393px] max-w-full rounded-[12px] border border-[#dae1ed] bg-white shadow-sm"
              style={{ height: "calc(100vh - 200px)", minHeight: 560 }}
              aria-hidden
            />
          ) : (
            <iframe
              key={template}
              title="Email preview — 393px width"
              className="w-[393px] max-w-full rounded-[12px] border border-[#dae1ed] bg-white shadow-sm"
              style={{ height: "calc(100vh - 200px)", minHeight: 560 }}
              src={iframeSrc}
            />
          )}
        </div>
      ) : (
        <>
          {/* SM/MD preview: always show Gmail chrome + email (ignores browser width) */}
          <div className="flex w-full justify-center px-4 pb-4">
            <div className="w-full max-w-[1400px]">
              <GmailWrapper subject={subjectLines[template]}>{emailContent}</GmailWrapper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}