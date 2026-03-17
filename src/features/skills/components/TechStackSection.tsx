import { techGroups } from "../../../constants/data";

export function TechStackSection() {
  const mainGroups = techGroups.filter((group) => group.title !== "Other");
  const otherGroup = techGroups.find((group) => group.title === "Other");

  return (
    <section id="stack" className="flex w-full flex-col items-center gap-[30px] text-center">
      <h2 className="font-['Itim'] text-[36px] text-[#5197ff] max-[600px]:font-['Poppins'] max-[600px]:font-semibold">
        Tech Stack
      </h2>

      <div className="grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-5">
        {mainGroups.map((group) => (
          <div className="flex flex-col items-center gap-[30px]" key={group.title}>
            <h3 className="font-['Poppins'] text-[20px] tracking-[2.4px] text-[#8491a0]">
              {group.title}
            </h3>
            <div className="flex flex-col items-center gap-[15px]">
              {group.items.map((item) => (
                <div
                  className="flex items-center gap-[8px] rounded-[22.712px] bg-[#303030] px-[12px] py-[10px] font-['Poppins'] text-[20px] text-white"
                  key={item.label}
                >
                  <img className="h-[26px] w-[26px]" src={item.icon} alt="" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {otherGroup ? (
        <div className="flex w-full flex-col items-center gap-[20px]">
          <h3 className="font-['Poppins'] text-[20px] tracking-[2.4px] text-[#8491a0]">
            Other
          </h3>
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee-single items-center gap-[15px]">
              {otherGroup.items.map((item) => (
                <div
                  className="flex items-center gap-[8px] rounded-[22.712px] bg-[#303030] px-[12px] py-[10px] font-['Poppins'] text-[20px] text-white"
                  key={`other-${item.label}`}
                >
                  <img className="h-[26px] w-[26px]" src={item.icon} alt="" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
