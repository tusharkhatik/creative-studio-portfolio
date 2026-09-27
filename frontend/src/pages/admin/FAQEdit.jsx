import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Select from "../../components/ui/Select";
import Button from "../../components/common/Button";

function FAQCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "general",
    order: "1",
    status: "draft",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("FAQ data:", formData);

    navigate("/admin/faqs");
  };

  return (
    <section className="p-6 lg:p-8">
      <div className="mb-8">
        <Link
          to="/admin/faqs"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to FAQs
        </Link>

        <div className="mt-6">
          <p className="text-sm font-medium text-gray-500">
            Admin Panel
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Create FAQ
          </h1>

          <p className="mt-2 text-gray-600">
            Add a frequently asked question to your website.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  FAQ Content
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Write the question and its answer.
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  id="question"
                  name="question"
                  label="Question"
                  placeholder="e.g. How long does a project take?"
                  value={formData.question}
                  onChange={handleChange}
                  required
                />

                <Textarea
                  id="answer"
                  name="answer"
                  label="Answer"
                  placeholder="Write a clear answer..."
                  rows={8}
                  value={formData.answer}
                  onChange={handleChange}
                  required
                />
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  FAQ Settings
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Configure the FAQ category and display order.
                </p>
              </div>

              <div className="space-y-5">
                <Select
                  id="category"
                  name="category"
                  label="Category"
                  value={formData.category}
                  onChange={handleChange}
                  options={[
                    {
                      value: "general",
                      label: "General",
                    },
                    {
                      value: "process",
                      label: "Process",
                    },
                    {
                      value: "pricing",
                      label: "Pricing",
                    },
                    {
                      value: "services",
                      label: "Services",
                    },
                  ]}
                />

                <Input
                  id="order"
                  name="order"
                  type="number"
                  label="Display Order"
                  min="1"
                  value={formData.order}
                  onChange={handleChange}
                />

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
              </div>
            </Card>

            <Card>
              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full"
                >
                  <Save size={17} className="mr-2" />
                  Save FAQ
                </Button>

                <Link
                  to="/admin/faqs"
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

export default FAQCreate;