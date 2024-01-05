import { TestimonialCarousel } from "./TestimonialCarousel";
import resume from "../resume.json";

export default function Testimonials() {
  const { shoutouts } = resume;
  return <TestimonialCarousel testimonials={shoutouts} />;
}
