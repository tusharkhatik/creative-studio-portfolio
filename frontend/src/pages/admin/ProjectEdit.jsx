import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Select from "../../components/ui/Select";
import Button from "../../components/common/Button";
import Loading from "../../components/feedback/Loading";

const demoProjects = {
  "1": {
    title: "Brand Film",
    slug: "brand-film",
    category: "video",
    client: "Acme Studio",
    shortDescription:
      "A cinematic brand film created to introduce Acme Studio's new creative direction.",
    description:
      "This project focused on creating a cinematic brand film that communicates the personality, values, and visual identity of Acme Studio.",
    featuredImage: "https://example.com/brand-film.jpg",
    projectUrl: "https://example.com",
    status: "published",
    featured: true,
  },

  "2": {
    title: "Product Photography",
    slug: "product-photography",
    category: "photography",
    client: "Nova Labs",
    shortDescription:
      "Product photography created for a modern technology brand.",
    description:
      "A complete product photography project focused on clean compositions, lighting, and presentation.",
    featuredImage: "https://example.com/product-photography.jpg",
    projectUrl: "",
    status: "published",
    featured: false,
  },

  "3": {
    title: "Brand Identity",
    slug: "brand-identity",
    category: "branding",
    client: "Orbit",
    shortDescription:
      "A complete visual identity system for Orbit.",
    description:
      "The project included brand direction, visual identity, logo development, and supporting brand assets.",
    featuredImage: "https://example.com/brand-identity.jpg",
    projectUrl: "",
    status: "draft",
    featured: false,
  },

  "4": {
    title: "Social Media Campaign",
    slug: "social-media-campaign",
    category: "motion",
    client: "Vertex",
    shortDescription:
      "A motion-focused social media campaign.",
    description:
      "A collection of short-form motion graphics and social media assets designed for a digital campaign.",
    featuredImage: "https://example.com/social-media.jpg",
    projectUrl: "",
    status: "published",
    featured: true,
  },
};

function ProjectEdit() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = () => {
      const project = demoProjects[projectId];

      if (!project) {
        setFormData(null);
        setLoading(false);
        return;
      }

      setFormData(project);
      setLoading(false);
    };

    loadProject();
  }, [projectId]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Updated project:", {
      id: projectId,
      ...formData,
    });

    navigate("/admin/projects");
  };

  if (loading) {
    return <Loading message="Loading project..." fullScreen />;
  }

  if (!formData) {
    return (
      <section className="p-6 lg:p-8">
        <Card>
          <h1 className="text-2xl font-bold text-gray-900">
            Project Not Found
          </h1>

          <p className="mt-2 text-gray-600">
            The project you are trying to edit does not exist.
          </p>

          <Link
            to="/admin/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </Card>
      </section>
    );
  }

  return (
    <section className="p-6 lg:p-8">
      <div className="mb-8">
        <Link
          to="/admin/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="mt-6">
          <p className="text-sm font-medium text-gray-500">
            Admin Panel
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Edit Project
          </h1>

          <p className="mt-2 text-gray-600">
            Update the information for this portfolio project.
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
                  Update the main information about this project.
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  id="title"
                  name="title"
                  label="Project Title"
                  placeholder="e.g. Brand Film for Acme"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />

                <Input
                  id="slug"
                  name="slug"
                  label="Slug"
                  placeholder="brand-film-for-acme"
                  value={formData.slug}
                  onChange={handleChange}
                  helperText="This will be used in the project URL."
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Select
                    id="category"
                    name="category"
                    label="Category"
                    value={formData.category}
                    onChange={handleChange}
                    options={[
                      { value: "video", label: "Video" },
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

                  <Input
                    id="client"
                    name="client"
                    label="Client"
                    placeholder="e.g. Acme Studio"
                    value={formData.client}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Project Content
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Update the project description and details.
                </p>
              </div>

              <div className="space-y-5">
                <Textarea
                  id="shortDescription"
                  name="shortDescription"
                  label="Short Description"
                  placeholder="A short summary of the project..."
                  rows={3}
                  value={formData.shortDescription}
                  onChange={handleChange}
                />

                <Textarea
                  id="description"
                  name="description"
                  label="Full Description"
                  placeholder="Describe the project in detail..."
                  rows={8}
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </Card>

            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Media
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Update the main project visual and external link.
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  id="featuredImage"
                  name="featuredImage"
                  label="Featured Image URL"
                  placeholder="https://..."
                  value={formData.featuredImage}
                  onChange={handleChange}
                  helperText="Image upload will be connected later."
                />

                <Input
                  id="projectUrl"
                  name="projectUrl"
                  label="Project URL"
                  placeholder="https://..."
                  value={formData.projectUrl}
                  onChange={handleChange}
                  helperText="Optional external project link."
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
                  Control how this project appears publicly.
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
                      Featured Project
                    </span>

                    <span className="mt-1 block text-sm text-gray-500">
                      Show this project in the featured portfolio section.
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
                  Update Project
                </Button>

                <Link
                  to="/admin/projects"
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

export default ProjectEdit;