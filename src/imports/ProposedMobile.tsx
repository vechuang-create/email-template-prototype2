import svgPaths from "./svg-skammmd5tx";
import { COURSERA_HOME_URL } from "../constants/courseraUrls";
import imgImg04451 from "figma:asset/21be5635d68e524e6b98c71c0f1368b192dd7655.png";
import imgImage1 from "figma:asset/b4e5d3f2ed235f5346cc914f60be90ae3980d9f5.png";
import imgImage3 from "figma:asset/6b0b767feb2e6d442310aec1f64e348954b32ed8.png";
import imgImage4 from "figma:asset/19387b8d642184bd3cfb9c473e4d7b8615f2d19a.png";
import imgImage5 from "figma:asset/3b5b71eb72e91ab4a4ebef5fcff3623759202027.png";
import imgImage6 from "figma:asset/ac986be69020249ee50e2508f158321c917ede1a.png";
import imgImage7 from "figma:asset/a979e4de3f5caa5fc393f579dd7d8a26a07bbeb7.png";
import imgImage8 from "figma:asset/c8a19f83070842cdb0114610dfc72dce10b3d2ec.png";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Header">
      <a
        href={COURSERA_HOME_URL}
        className="inline-block h-[16px] relative shrink-0 w-[111px] cursor-pointer"
        data-name="Coursera Logo"
        aria-label="Coursera"
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 16">
          <path d={svgPaths.p2ca45a00} fill="var(--fill-0, #0056D2)" id="Union" />
        </svg>
      </a>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider / Horizontal">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329 1">
            <line id="Divider / Horizontal" stroke="var(--stroke-0, #DAE1ED)" x2="329" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Promo() {
  return (
    <div className="bg-[#f0f6ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Promo">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] text-center w-full">
            <span className="font-['Helvetica:Regular',sans-serif] leading-[20px] text-[#0f1114] text-[14px]">{`⚡️ Save 40% on three months of Coursera Plus.* `}</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid font-['Helvetica:Regular',sans-serif] leading-[20px] text-[#0056d2] text-[14px] underline">Redeem offer.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function NotificationPageNotification() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 w-full" data-name="Notification / PageNotification">
      <Promo />
    </div>
  );
}

function SectionContentBodyPrimary() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[24px] relative shrink-0 w-full" data-name="Section content - Body Primary">
      <p className="relative shrink-0 w-full">In just 10 hours, you can learn to:</p>
      <p className="relative shrink-0 w-full">👉 Learn to effectively prompt AI to get the results you actually want</p>
      <p className="relative shrink-0 w-full">👉 Analyze data and tailor content in a fraction of the time</p>
      <p className="relative shrink-0 w-full">👉 Vibe code practical apps for your daily work using plain language</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[12px] items-start relative shrink-0 text-[16px] w-full" data-name="_💠 Content">
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="leading-[24px]">{`Experience matters, but AI skills are taking the lead—70% of employers prioritize candidates with AI skills over one with more years of experience.1 With the new `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Helvetica:Bold',sans-serif] leading-[24px] underline">Google AI Professional Certificate</span>
        <span className="leading-[24px]">, you can build the in-demand AI skills they’re looking for.</span>
      </p>
      <SectionContentBodyPrimary />
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="leading-[24px]">{`Enroll today to earn a trusted credential and `}</span>
        <span className="font-['Helvetica:Bold',sans-serif] leading-[24px]">get three months of Google AI Pro at no cost</span>
        <span className="leading-[24px]">. Get the skills, the portfolio, and the certificate to show you’re ready for the AI-powered workforce.</span>
      </p>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0f1114] w-full" data-name="Hero copy">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[36px] relative shrink-0 text-[28px] w-full">Develop AI fluency in 10 hours with Google experts</p>
      <Content />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Hero content">
      <div className="h-[194px] relative rounded-[16px] shrink-0 w-full" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
      </div>
      <HeroCopy />
      <div className="bg-[#0056d2] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <div className="flex flex-col font-['Helvetica:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.005em] whitespace-nowrap">
              <p className="leading-[22px]">Enroll now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section copy">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f1114] text-[24px] w-full">Build more in-demand skills with Google</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google AI Essentials</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[14px] w-full">Google</p>
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 size-[100px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage3} />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame8 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google Prompting Essentials</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[14px] w-full">Google</p>
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 size-[100px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage4} />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame9 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[14px] whitespace-nowrap">Google</p>
      <div className="bg-white content-stretch flex h-[22px] items-center justify-center px-[8px] relative rounded-[999px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f1114] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">New</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google People Management Essentials</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame23 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 size-[100px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage5} />
      </div>
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google Data Analytics</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[14px] w-full">Google</p>
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 size-[100px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage6} />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame14 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google Project Management</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[14px] w-full">Google</p>
      <Frame18 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 size-[100px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage7} />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame17 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google Cybersecurity</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[14px] w-full">Google</p>
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 size-[100px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage8} />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame20 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame11 />
      <Frame10 />
      <Frame13 />
      <Frame16 />
      <Frame19 />
    </div>
  );
}

function SectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section content">
      <SectionCopy />
      <Frame3 />
    </div>
  );
}

function HeroBanner() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Hero banner">
      <HeroContent />
      <div className="h-0 relative shrink-0 w-full" data-name="Section Divider">
        <div className="absolute h-0 left-0 right-0 top-0" data-name="Divider / Horizontal">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329 1">
              <line id="Divider / Horizontal" stroke="var(--stroke-0, #DAE1ED)" x2="329" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <SectionContent />
      <div className="h-0 relative shrink-0 w-full" data-name="Section Divider">
        <div className="absolute h-0 left-0 right-0 top-0" data-name="Divider / Horizontal">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329 1">
              <line id="Divider / Horizontal" stroke="var(--stroke-0, #DAE1ED)" x2="329" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Header />
      <NotificationPageNotification />
      <HeroBanner />
    </div>
  );
}

function AdminCustom() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[12px] items-start not-italic relative shrink-0 text-[#5b6780] text-[12px] w-full" data-name="Admin custom">
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="leading-[18px]">1</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline">Source</span>
      </p>
      <p className="leading-[18px] relative shrink-0 w-full">*Claim this offer by March 16, 2026 6:59 p.m. EST. Valid for new Coursera Plus subscribers only, limited to one per person. Cannot be used in conjunction with other offers. Coursera reserves the right to modify or cancel the promotion at any time. USD $35.40 each month for three months (regularly USD $59/month). Discount applied at checkout. Automatically renews on an annual basis for USD $59/month (plus applicable taxes), unless canceled. Cancel anytime in account settings. Offer not available to residents of India.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame2 />
      <AdminCustom />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Desktop">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[32px] pt-[24px] px-[32px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function CourseraLogo() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114.667px]" data-name="Coursera Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.667 16">
        <g id="Coursera Logo">
          <path d={svgPaths.p291b7680} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Bold',sans-serif] font-bold gap-[12px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.005em] whitespace-nowrap" data-name="Footer links">
      <p className="relative shrink-0">Help Center</p>
      <p className="relative shrink-0">Coursera for Business</p>
      <p className="relative shrink-0">Email Settings</p>
      <p className="relative shrink-0">Unsubscribe</p>
      <p className="relative shrink-0">Privacy Notice</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[21.8%_76.86%_23.76%_8.33%]" data-name="<Group>">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7166 21.7762">
        <g id="<Group>">
          <path d={svgPaths.p11c46880} fill="var(--fill-0, white)" id="<Path>" />
          <path d={svgPaths.p26de8970} fill="var(--fill-0, white)" id="<Path>_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[21.8%_76.86%_23.76%_8.33%]" data-name="<Group>">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[44.68%_8.5%_16.27%_28.77%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.0606 15.6202">
        <g id="Group">
          <path d={svgPaths.p19eaa100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p17b2f400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3c7bcc00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p10598288} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p281afc80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3e942a70} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p26bfc900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2a194000} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[21.8%_8.5%_16.27%_8.33%]" data-name="<Group>">
      <Group3 />
      <Group5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.664 40.0001">
        <g id="Group">
          <path d={svgPaths.pe30ae00} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          <path d={svgPaths.p1c0d3400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
      <Group2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[21.09%_12.41%_63.01%_29.81%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.144 6.35838">
        <g id="Group">
          <path d={svgPaths.p7e7480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d590a00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1bb4ba00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p20f99500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p145c3000} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p29178180} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p22443f80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p220fa880} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1ae54100} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p2467c500} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p3d549100} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p17bd4200} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1a93a080} fill="var(--fill-0, white)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[21.09%_12.41%_63.01%_29.81%]" data-name="<Group>">
      <Group7 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
      <Group6 />
    </div>
  );
}

function DownloadOnTheAppStoreBadgeUsUkRgbBlk() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[119.664px]" data-name="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 1">
      <Group />
    </div>
  );
}

function GetItOnGooglePlayBadgeWebColorEnglish() {
  return (
    <div className="h-[40px] relative shrink-0 w-[135px]" data-name="GetItOnGooglePlay_Badge_Web_color_English 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 40">
        <g clipPath="url(#clip0_1_2517)" id="GetItOnGooglePlay_Badge_Web_color_English 2">
          <path d={svgPaths.p24728000} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3937ae00} fill="var(--fill-0, #A6A6A6)" id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.p27990cc0} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.2" />
            <path d={svgPaths.p1c8a2c00} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.2" />
            <path d={svgPaths.p14d6d100} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.2" />
            <path d={svgPaths.p3e210900} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.2" />
            <path d={svgPaths.p2f74d080} fill="var(--fill-0, white)" id="Vector_7" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.2" />
            <path d={svgPaths.p130a9c00} fill="var(--fill-0, white)" id="Vector_8" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.2" />
            <path d={svgPaths.p20ee5800} fill="var(--fill-0, white)" id="Vector_9" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.2" />
          </g>
          <path d={svgPaths.p36b29e00} fill="var(--fill-0, white)" id="Vector_10" />
          <g id="Group_2">
            <path d={svgPaths.p1188180} fill="var(--fill-0, #EA4335)" id="Vector_11" />
            <path d={svgPaths.pf2f3670} fill="var(--fill-0, #FBBC04)" id="Vector_12" />
            <path d={svgPaths.pb279b80} fill="var(--fill-0, #4285F4)" id="Vector_13" />
            <path d={svgPaths.p3efc9400} fill="var(--fill-0, #34A853)" id="Vector_14" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2517">
            <rect fill="white" height="40" width="135" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AppBadges() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0 w-[135px]" data-name="App badges">
      <DownloadOnTheAppStoreBadgeUsUkRgbBlk />
      <GetItOnGooglePlayBadgeWebColorEnglish />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[21.43%_23.19%_23.29%_21.43%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2909 13.2673">
        <g id="Group 316124106">
          <path d={svgPaths.pbfdc600} fill="var(--fill-0, white)" id="Path" />
          <path d={svgPaths.p3a700b00} fill="var(--fill-0, white)" id="Path_2" />
          <path d={svgPaths.p118e82a0} fill="var(--fill-0, white)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Social media links">
      <div className="relative shrink-0 size-[24px]" data-name="Social media icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1b26a100} fill="var(--fill-0, #0F1114)" id="Path" />
        </svg>
        <div className="absolute inset-[21.43%_33.29%_18.88%_35.71%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.44 14.3266">
            <path d={svgPaths.p11a4a80} fill="var(--fill-0, white)" id="Path" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Social media icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1af0e080} fill="var(--fill-0, #0F1114)" id="Path" />
        </svg>
        <div className="absolute bottom-[21.43%] left-[21.43%] right-[19.31%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2232 12.8571">
            <path d={svgPaths.p36fb4f00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Social media icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1af0e080} fill="var(--fill-0, #0F1114)" id="Path" />
        </svg>
        <div className="absolute inset-[21.29%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7812 13.7812">
            <path d={svgPaths.pdb0d000} fill="var(--fill-0, white)" id="Path" />
          </svg>
        </div>
        <div className="absolute inset-[40.43%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.59375 4.59375">
            <path d={svgPaths.pd593700} fill="var(--fill-0, black)" id="Path" />
          </svg>
        </div>
        <div className="absolute inset-[26.46%]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2982 11.2982">
            <path clipRule="evenodd" d={svgPaths.p15221400} fill="var(--fill-0, black)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Social media icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1b26a100} fill="var(--fill-0, #0F1114)" id="Path" />
        </svg>
        <Group8 />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Social media icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1af0e080} fill="var(--fill-0, #0F1114)" id="Path" />
        </svg>
        <div className="absolute bottom-[21.43%] left-1/4 right-[24.58%] top-[21.43%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1008 13.7143">
            <path d={svgPaths.p7984d00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0" data-name="Social Links">
      <AppBadges />
      <SocialMediaLinks />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <FooterLinks />
      <SocialLinks />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <CourseraLogo />
      <Frame22 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-start flex flex-wrap gap-y-[32px] items-start relative shrink-0 w-full" data-name="Links">
      <Frame />
    </div>
  );
}

function LegalCopy() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[12px] items-start not-italic relative shrink-0 text-[12px] text-white w-full" data-name="Legal copy">
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="leading-[18px]">{`© 2026 Coursera Inc. All rights reserved. Coursera and the Coursera logo are registered trademarks of Coursera, Inc. All other trademarks are property of their respective owners. Log in to manage all your notification preferences in `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline">Email Settings</span>
        <span className="leading-[18px]">.</span>
      </p>
      <p className="leading-[18px] relative shrink-0 w-full">Coursera | 2440 W El Camino Real 5th floor, Mountain View, CA 94040 USA</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0f1114] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Links />
        <LegalCopy />
      </div>
    </div>
  );
}

export default function ProposedMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Proposed mobile">
      <div className="h-[299px] relative shrink-0 w-[393px]" data-name="IMG_0445 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[284.95%] left-0 max-w-none top-0 w-full" src={imgImg04451} />
        </div>
      </div>
      <Desktop />
      <Footer />
      <div className="h-[95px] relative shrink-0 w-[393px]" data-name="IMG_0445 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[896.84%] left-0 max-w-none top-[-797.03%] w-full" src={imgImg04451} />
        </div>
      </div>
    </div>
  );
}