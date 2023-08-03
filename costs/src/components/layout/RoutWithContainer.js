import Container from "./Container";

export default function RouteWithContainer({ children }) {
  return <Container customClass="min-height">{children}</Container>;
}