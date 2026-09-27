import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Select from "../../components/ui/Select";
import Button from "../../components/common/Button";

function ServiceCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category: "",
    shortDescription: "",
    description: "",
    price: "",
    deliveryTime: "",
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

    console.log("Service data:", formData);

    navigate("/admin/services");
  };

  return (
    <section className="p-6 lg:p-8">
      <div className="mb-8">
        <Link
          to="/admin/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>

        <div className="mt-6">
          <p className="text-sm font-medium text-gray-500">
            Admin Panel
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Create Service
          </h1>

          <p className="mt-2 text-gray-600">
            Add a new creative service to your website.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Basic Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter the main information about this service.
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  id="name"
                  name="name"
                  label="Service Name"
                  placeholder="e.g. Professional Video Editing"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  id="slug"
                  name="slug"
                  label="Slug"
                  placeholder="video-editing"
                  value={formData.slug}
                  onChange={handleChange}
                  helperText="This will be used in the service URL."
                />

                <Select
                  id="category"
                  name="category"
                  label="Category"
                  value={formData.category}
                  onChange={handleChange}
                  options={[
                    {
                      value: "video",
                      label: "Video",
                    },
                    {
                      value: "photography",
                      label: "Photography",
                    },
                    {
                      value: "branding",
                      label: "Branding",
                    },
                    {
                      value: "motion",
                      label: "Motion",
                    },
                    {
                      value: "logo",
                      label: "Logo Design",
                    },
                  ]}
                />
              </div>
            </Card>

            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Service Content
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Describe what clients receive from this service.
                </p>
              </div>

              <div className="space-y-5">
                <Textarea
                  id="shortDescription"
                  name="shortDescription"
                  label="Short Description"
                  placeholder="A short summary of the service..."
                  rows={3}
                  value={formData.shortDescription}
                  onChange={handleChange}
                />

                <Textarea
                  id="description"
                  name="description"
                  label="Full Description"
                  placeholder="Describe the service in detail..."
                  rows={8}
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </Card>

            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Pricing & Delivery
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Define the starting price and expected delivery time.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  id="price"
                  name="price"
                  label="Starting Price"
                  placeholder="e.g. ₹5,000"
                  value={formData.price}
                  onChange={handleChange}
                />

                <Input
                  id="deliveryTime"
                  name="deliveryTime"
                  label="Delivery Time"
                  placeholder="e.g. 3-5 business days"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                />
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Publishing
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Control how this service appears publicly.
                </p>
              </div>

              <div className="space-y-5">
                <Select
                  id="status"
                  name="status"
                  label="Status"
                  value={formData.status}
                  onChange={handleChange}
                  options={[
                    {
                      value: "draft",
                      label: "Draft",
                    },
                    {
                      value: "published",
                      label: "Published",
                    },
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
                      Featured Service
                    </span>

                    <span className="mt-1 block text-sm text-gray-500">
                      Highlight this service on the homepage.
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
                  Save Service
                </Button>

                <Link
                  to="/admin/services"
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

export default ServiceCreate;