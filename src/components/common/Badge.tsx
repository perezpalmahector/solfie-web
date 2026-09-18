type Props = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: Props) {
  return (
    <span
      className="
      inline-block
      uppercase
      tracking-[3px]
      text-blue-600
      font-semibold
      text-sm"
    >
      {children}
    </span>
  );
}