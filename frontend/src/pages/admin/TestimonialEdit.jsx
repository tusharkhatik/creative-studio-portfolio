import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Select from "../../components/ui/Select";
import Button from "../../components/common/Button";
import Loading from "../../components/feedback/Loading";

const demoTestimonials = {
  "1": {
    clientName: "Rahul Sharma",
    company: "Acme Studio",
    role: "Founder",
    quote:
      "The team transformed our vision into a polished brand film. The final result exceeded our expectations.",
    rating: "5",
    clientImage: "https://example.com/rahul.jpg",
    status: "published",
    featured: true,
  },

  "2": {
    clientName: "Priya Mehta",
    company: "Nova Labs",
    role: "Marketing Director",
    quote:
      "The photography work was professional, creative, and delivered exactly when promised.",
    rating: "5",
    clientImage: "https://example.com/priya.jpg",
    status: "published",
    featured: true,
  },

  "3": {
    clientName: "Arjun Patel",
    company: "Orbit",
    role: "Creative Director",
    quote:
      "The branding work gave our company a much stronger and more consistent visual identity.",
    rating: "4",
    clientImage: "https://example.com/arjun.jpg",
    status: "draft",
    featured: false,
  },

  "4": {
    clientName: "Sneha Kulkarni",
    company: "Vertex",
    role: "Founder",
    quote:
      "The motion graphics brought our campaign to life and helped us create much stronger social content.",
    rating: "5",
    clientImage: "https://example.com/sneha.jpg",
    status: "published",
    featured: false,
  },
};

function TestimonialEdit() {
  const { testimonialId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonial = () => {
      const testimonial = demoTestimonials[testimonialId];

      if (!testimonial) {
        setFormData(null);
        setLoading(false);
        return;
      }

      setFormData(testimonial);
      setLoading(false);
    };

    loadTestimonial();
  }, [testimonialId]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Updated testimonial:", {
      id: testimonialId,
      ...formData,
    });

    navigate("/admin/testimonials");
  };

  if (loading) {
    return (
      <Loading
        message="Loading testimonial..."
        fullScreen
      />
    );
  }

  if (!formData) {
    return (
      <section className="p-6 lg:p-8">
        <Card>
          <h1 className="text-2xl font-bold text-gray-900">
            Testimonial Not Found
          </h1>

          <p className="mt-2 text-gray-600">
            The testimonial you are trying to edit does not exist.
          </p>

          <Link
            to="/admin/testimonials"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to Testimonials
          </Link>
        </Card>
      </section>
    );
  }

  return (
    <section className="p-6 lg:p-8">
      <div className="mb-8">
        <Link
          to="/admin/testimonials"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to Testimonials
        </Link>

        <div className="mt-6">
          <p className="text-sm font-medium text-gray-500">
            Admin Panel
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Edit Testimonial
          </h1>

          <p className="mt-2 text-gray-600">
            Update this client's testimonial and publishing settings.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Client Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Update the information about the client.
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  id="clientName"
                  name="clientName"
                  label="Client Name"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    id="company"
                    name="company"
                    label="Company"
                    value={formData.company}
                    onChange={handleChange}
                  />

                  <Input
                    id="role"
                    name="role"
                    label="Role"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  id="clientImage"
                  name="clientImage"
                  label="Client Image URL"
                  value={formData.clientImage}
                  onChange={handleChange}
                  helperText="Image upload will be connected later."
                />
              </div>
            </Card>

            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Testimonial
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Update the client's feedback.
                </p>
              </div>

              <Textarea
                id="quote"
                name="quote"
                label="Client Testimonial"
                rows={8}
                value={formData.quote}
                onChange={handleChange}
                required
              />
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Publishing
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Control how this testimonial appears publicly.
                </p>
              </div>

              <div className="space-y-5">
                <Select
                  id="rating"
                  name="rating"
                  label="Rating"
                  value={formData.rating}
                  onChange={handleChange}
                  options={[
                    { value: "5", label: "5 / 5" },
                    { value: "4", label: "4 / 5" },
                    { value: "3", label: "3 / 5" },
                    { value: "2", label: "2 / 5" },
                    { value: "1", label: "1 / 5" },
                  ]}
                />

                <Select
                  id="status"
                  name="status"
                  label="Status"
                  value={formData.status}
                  onChange={handleChange}
                  options={[
                    { value: "draft", label: "Draft" },
                    { value: "published", label: "Published" },
                  ]}
                />

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                  />

                  <span>
                    <span className="block text-sm font-medium text-gray-900">
                      Featured Testimonial
                    </span>

                    <span className="mt-1 block text-sm text-gray-500">
                      Highlight this testimonial on the homepage.
                    </span>
                  </span>
                </label>
              </div>
            </Card>

            <Card>
              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full"
                >
                  <Save size={17} className="mr-2" />
                  Update Testimonial
                </Button>

                <Link
                  to="/admin/testimonials"
                  className="flex w-full items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </form>
    </section>
  );
}

export default TestimonialEdit;