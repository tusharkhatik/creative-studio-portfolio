import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Select from "../../components/ui/Select";
import Button from "../../components/common/Button";
import Loading from "../../components/feedback/Loading";

const demoServices = {
  "1": {
    name: "Video Editing",
    slug: "video-editing",
    category: "video",
    shortDescription:
      "Professional video editing for brands, creators, and businesses.",
    description:
      "Complete video editing services including storytelling, pacing, transitions, color correction, sound design, and final delivery.",
    price: "₹5,000",
    deliveryTime: "3-5 business days",
    status: "published",
    featured: true,
  },

  "2": {
    name: "Photography",
    slug: "photography",
    category: "photography",
    shortDescription:
      "Professional photography for products, brands, and campaigns.",
    description:
      "Photography services focused on high-quality visuals for products, social media, websites, and marketing campaigns.",
    price: "₹3,000",
    deliveryTime: "2-4 business days",
    status: "published",
    featured: true,
  },

  "3": {
    name: "Logo Design",
    slug: "logo-design",
    category: "branding",
    shortDescription:
      "Custom logo design for new and growing brands.",
    description:
      "A complete logo design process including concept development, revisions, final artwork, and export formats.",
    price: "₹2,500",
    deliveryTime: "3-5 business days",
    status: "published",
    featured: false,
  },

  "4": {
    name: "Motion Graphics",
    slug: "motion-graphics",
    category: "motion",
    shortDescription:
      "Engaging motion graphics for digital campaigns and social media.",
    description:
      "Motion design services for social media campaigns, promotional content, advertisements, and digital experiences.",
    price: "₹4,000",
    deliveryTime: "4-7 business days",
    status: "draft",
    featured: false,
  },
};

function ServiceEdit() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = () => {
      const service = demoServices[serviceId];

      if (!service) {
        setFormData(null);
        setLoading(false);
        return;
      }

      setFormData(service);
      setLoading(false);
    };

    loadService();
  }, [serviceId]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Updated service:", {
      id: serviceId,
      ...formData,
    });

    navigate("/admin/services");
  };

  if (loading) {
    return (
      <Loading
        message="Loading service..."
        fullScreen
      />
    );
  }

  if (!formData) {
    return (
      <section className="p-6 lg:p-8">
        <Card>
          <h1 className="text-2xl font-bold text-gray-900">
            Service Not Found
          </h1>

          <p className="mt-2 text-gray-600">
            The service you are trying to edit does not exist.
          </p>

          <Link
            to="/admin/services"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
        </Card>
      </section>
    );
  }

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
            Edit Service
          </h1>

          <p className="mt-2 text-gray-600">
            Update this service's information and publishing settings.
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
                  Update the main information about this service.
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  id="name"
                  name="name"
                  label="Service Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  id="slug"
                  name="slug"
                  label="Slug"
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
                  Update what clients receive from this service.
                </p>
              </div>

              <div className="space-y-5">
                <Textarea
                  id="shortDescription"
                  name="shortDescription"
                  label="Short Description"
                  rows={3}
                  value={formData.shortDescription}
                  onChange={handleChange}
                />

                <Textarea
                  id="description"
                  name="description"
                  label="Full Description"
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
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  id="price"
                  name="price"
                  label="Starting Price"
                  value={formData.price}
                  onChange={handleChange}
                />

                <Input
                  id="deliveryTime"
                  name="deliveryTime"
                  label="Delivery Time"
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
                  Update Service
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

export default ServiceEdit;