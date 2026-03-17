import { techGroups } from "../../../constants/data";

export function TechStackSection() {
  return (
    <section id="stack" className="stack">
      <h2 className="stack-title">Tech Stack</h2>
      <div className="stack-grid">
        {techGroups.map((group) => (
          <div className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chip-list">
              {group.items.map((item) => (
                <div className="chip" key={item.label}>
                  <img src={item.icon} alt="" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
