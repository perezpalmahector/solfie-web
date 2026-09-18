type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="max-w-3xl mb-16">

      <span
        className="
        text-blue-600
        font-semibold
        uppercase
        tracking-widest"
      >
        {subtitle}
      </span>

      <h2
        className="
        mt-4
        text-5xl
        font-bold
        text-slate-900"
      >
        {title}
      </h2>

    </div>
  );
}