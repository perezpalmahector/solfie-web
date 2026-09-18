type Props = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      bg-blue-600
      text-white
      p-8
      text-center"
    >
      <h3
        className="
        text-5xl
        font-bold"
      >
        {value}
      </h3>

      <p
        className="
        mt-3
        opacity-90"
      >
        {label}
      </p>
    </div>
  );
}