// Shared section layout: numbered label on the left (stacked on mobile), content on the right.
export default function Section({ id, index, title, aside, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-16 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-8">
      <div className="mb-7 sm:mb-0">
        {index ? <p className="font-mono text-xs text-accent">{index}</p> : null}
        <h2 className="mt-1 font-serif text-2xl text-foreground">{title}</h2>
        {aside ? <p className="mt-1 text-xs text-muted">{aside}</p> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}
