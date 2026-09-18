import Badge from "./Badge";

type Props = {
  badge: string;
  title: string;
};

export default function Heading({
  badge,
  title,
}: Props) {
  return (
    <div className="max-w-3xl">

      <Badge>

        {badge}

      </Badge>

      <h2
        className="
        mt-4
        text-5xl
        font-bold
        leading-tight"
      >
        {title}
      </h2>

    </div>
  );
}