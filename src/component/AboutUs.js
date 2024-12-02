import { Card, Button } from "react-bootstrap";
import { Home, Package, FileText, CreditCard, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-vh-100 bg-light py-5 px-4">
      <div className="container">
        <h1 className="text-center mb-4 text-danger">
          About Our Magical Event Planner
        </h1>

        <p className="text-center text-secondary mb-5 fs-5">
          Welcome to the most exciting event management platform! We turn your dreams into unforgettable experiences. 
          Here's how our app sprinkles magic on your event planning:
        </p>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                  <Home className="text-danger" size={30} />
                </div>
                <Card.Title className="text-danger">1. Explore Our Home</Card.Title>
                <Card.Text className="text-secondary">
                  Start your journey on our vibrant home page, where event dreams come to life!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                  <Package className="text-danger" size={30} />
                </div>
                <Card.Title className="text-danger">2. Choose Your Package</Card.Title>
                <Card.Text className="text-secondary">
                  Pick from our dazzling array of event packages, each bursting with possibilities!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                  <FileText className="text-danger" size={30} />
                </div>
                <Card.Title className="text-danger">3. Fill Out the Form</Card.Title>
                <Card.Text className="text-secondary">
                  Tell us about your dream event with our fun and easy-to-use form!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                  <CreditCard className="text-danger" size={30} />
                </div>
                <Card.Title className="text-danger">4. Make Your Payment</Card.Title>
                <Card.Text className="text-secondary">
                  Secure your spot with our hassle-free payment process. It's as easy as waving a wand!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-secondary fs-4 mb-3">
            Ready to create event magic?
          </p>
          {/* Remove the Link component */}
          <Button variant="danger" className="fs-5 px-4 py-2">
            Get Started Now <Sparkles className="ms-2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
