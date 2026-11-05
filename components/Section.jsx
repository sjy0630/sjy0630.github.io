// Shared section layout: small label on the left (stacked on mobile), content on the right.
export default function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-14 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8">
      <div className="mb-6 sm:mb-0">
        <h2 className="text-sm font-medium text-foreground">{title}</h2>
        {aside ? <p className="mt-1 text-xs text-muted">{aside}</p> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}
