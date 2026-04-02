import imgImage3 from "figma:asset/6b0b767feb2e6d442310aec1f64e348954b32ed8.png";
import imgImage4 from "figma:asset/19387b8d642184bd3cfb9c473e4d7b8615f2d19a.png";
import imgImage5 from "figma:asset/3b5b71eb72e91ab4a4ebef5fcff3623759202027.png";
import imgImage6 from "figma:asset/ac986be69020249ee50e2508f158321c917ede1a.png";
import imgImage7 from "figma:asset/a979e4de3f5caa5fc393f579dd7d8a26a07bbeb7.png";
import imgImage8 from "figma:asset/c8a19f83070842cdb0114610dfc72dce10b3d2ec.png";

function SectionCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section copy">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f1114] text-[24px] w-full">Build more in-demand skills with Google</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google AI Essentials</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f1114] text-[12px] w-full">Google</p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[100px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage3} />
        <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 rounded-[8px]" />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame5 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google Prompting Essentials</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f1114] text-[12px] w-full">Google</p>
      <Frame2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[100px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage4} />
        <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 rounded-[8px]" />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f1114] text-[12px] whitespace-nowrap">Google</p>
      <div className="bg-white content-stretch flex h-[22px] items-center justify-center px-[8px] relative rounded-[999px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f1114] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">New</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google People Management Essentials</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame19 />
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[100px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage5} />
        <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 rounded-[8px]" />
      </div>
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google Data Analytics</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f1114] text-[12px] w-full">Google</p>
      <Frame12 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[100px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage6} />
        <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 rounded-[8px]" />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame11 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google Project Management</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f1114] text-[12px] w-full">Google</p>
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[100px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage7} />
        <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 rounded-[8px]" />
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
      <p className="font-['Helvetica:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f1114] text-[16px] w-full">Google Cybersecurity</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f1114] text-[12px] w-full">Google</p>
      <Frame18 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[100px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage8} />
        <div aria-hidden="true" className="absolute border border-[#dae1ed] border-solid inset-0 rounded-[8px]" />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame17 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame8 />
      <Frame7 />
      <Frame10 />
      <Frame13 />
      <Frame16 />
    </div>
  );
}

export default function SectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Section content">
      <SectionCopy />
      <Frame />
    </div>
  );
}