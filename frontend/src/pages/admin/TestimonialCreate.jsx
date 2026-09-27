import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Select from "../../components/ui/Select";
import Button from "../../components/common/Button";

function TestimonialCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientName: "",
    company: "",
    role: "",
    quote: "",
    rating: "5",
    clientImage: "",
    status: "draft",
    featured: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Testimonial data:", formData);

    navigate("/admin/testimonials");
  };

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
            Create Testimonial
          </h1>

          <p className="mt-2 text-gray-600">
            Add a new client testimonial to your website.
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
                  Enter information about the client giving the testimonial.
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  id="clientName"
                  name="clientName"
                  label="Client Name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    id="company"
                    name="company"
                    label="Company"
                    placeholder="e.g. Acme Studio"
                    value={formData.company}
                    onChange={handleChange}
                  />

                  <Input
                    id="role"
                    name="role"
                    label="Role"
                    placeholder="e.g. Founder"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  id="clientImage"
                  name="clientImage"
                  label="Client Image URL"
                  placeholder="https://..."
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
                  Add the client's feedback about your work.
                </p>
              </div>

              <Textarea
                id="quote"
                name="quote"
                label="Client Testimonial"
                placeholder="Enter the client's feedback..."
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
                <Button type="submit" className="w-full">
                  <Save size={17} className="mr-2" />
                  Save Testimonial
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

export default TestimonialCreate;