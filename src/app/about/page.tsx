import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionTitle
          title="About Shivdhara Securities"
          subtitle="Empowering investors with knowledge and tools since 2010."
        />
        <div className="prose max-w-none text-muted-foreground">
          <p>
            Shivdhara Securities is a premier financial services firm dedicated to providing comprehensive investment solutions. 
            Our journey began with a simple mission: to make high-quality financial advisory accessible to every investor.
          </p>
          <p>
            Today, we are proud to serve over 15,000 clients across India, offering everything from equity trading to 
            personalized portfolio management.
          </p>
        </div>
      </Container>
    </div>
  );
}
