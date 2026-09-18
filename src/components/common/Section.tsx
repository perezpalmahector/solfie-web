import Container from "./Container";

type Props = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="py-24"
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}