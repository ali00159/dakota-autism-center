import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Dakota Autism Center",
  description:
    "Get in touch with Dakota Autism Center in Minneapolis. We offer personalized ABA therapy and autism support services. Call (612) 284-5382 or visit us today.",
};

export default function ContactPage() {
  return <ContactContent />;
}
