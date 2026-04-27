import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { faqData } from "@/constants/faq";
import { FAQContent } from "./FAQContent";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions | Shivdhara Securities",
  description: "Find answers to common questions about equity trading, mutual funds, account opening, and financial advisory services at Shivdhara Securities.",
});

export default function FAQPage() {
  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(cat => 
      cat.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <main className="min-h-screen bg-background">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent/20 border-b border-border">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions related to our services, account opening, investments, and technical support.
          </p>
        </Container>
      </section>

      {/* Content Section (Tabs + Accordion) */}
      <section className="py-16">
        <Container>
          <FAQContent data={faqData} />
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-accent/10 border-t border-border">
        <Container className="text-center">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl max-w-4xl mx-auto border border-border">
            <h2 className="text-3xl font-bold text-primary mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Our dedicated support team is ready to assist you with any further queries you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Contact Support
              </a>
              <a 
                href="tel:+919227780880" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary/10 font-bold rounded-xl hover:bg-accent transition-all"
              >
                Call Us Directly
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
