import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionTitle
          title="Contact Us"
          subtitle="Have questions? Our experts are here to help you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-accent/30 p-10 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="How can we help you?"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Corporate Office
              </h3>
              <p className="text-muted-foreground">
                1412, RK Empire, 150 Feet Ring Rd, Near Mavdi circle, <br />
                Rajkot, Gujarat, India, 360004,
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Call Us</h3>
              <a className="text-muted-foreground" href="tel:+919227780880">
                +91 9227780880
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Email Us</h3>
              <a
                className="text-muted-foreground"
                href="mailto:[EMAIL_ADDRESS]"
              >
                [EMAIL_ADDRESS]
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
