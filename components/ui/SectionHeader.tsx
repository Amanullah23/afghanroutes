interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, centered }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-xs font-semibold tracking-[0.14em] uppercase text-lapis-light mb-3">
        {eyebrow}
      </p>
      {/* ✅ dangerouslySetInnerHTML already handles HTML strings like <br/> correctly */}
      <h2
        className="section-title font-playfair text-4xl md:text-5xl font-bold text-lapis leading-tight mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="section-sub text-base text-sage leading-relaxed max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}