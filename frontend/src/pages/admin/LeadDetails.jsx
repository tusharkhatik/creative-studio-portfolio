import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Save } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Select from "../../components/ui/Select";
import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";

const demoLeads = {
  "1": {
    name: "Amit Shah",
    email: "amit@example.com",
    phone: "+91 98765 43210",
    service: "Video Editing",
    budget: "₹10,000 - ₹25,000",
    status: "new",
    message:
      "I need a professional promotional video for my new business. I already have the footage and would like help with editing, color grading, and sound design.",
    createdAt: "Sep 26, 2026",
  },

  "2": {
    name: "Neha Joshi",
    email: "neha@example.com",
    phone: "+91 98765 12345",
    service: "Branding",
    budget: "₹25,000 - ₹50,000",
    status: "contacted",
    message:
      "We are launching a new brand and need a complete visual identity including logo, colors, typography, and supporting assets.",
    createdAt: "Sep 24, 2026",
  },

  "3": {
    name: "Rohan Patil",
    email: "rohan@example.com",
    phone: "+91 98765 67890",
    service: "Photography",
    budget: "₹5,000 - ₹10,000",
    status: "in-progress",
    message:
      "Looking for product photography for approximately 20 products for our ecommerce website.",
    createdAt: "Sep 22, 2026",
  },

  "4": {
    name: "Kavya Deshmukh",
    email: "kavya@example.com",
    phone: "+91 98765 24680",
    service: "Motion Graphics",
    budget: "₹10,000 - ₹25,000",
    status: "converted",
    message:
      "We need motion graphics and short promotional videos for an upcoming social media campaign.",
    createdAt: "Sep 20, 2026",
  },

  "5": {
    name: "Vikram Mehta",
    email: "vikram@example.com",
    phone: "+91 98765 13579",
    service: "Logo Design",
    budget: "₹2,500 - ₹5,000",
    status: "closed",
    message:
      "I need a simple professional logo for a new personal brand.",
    createdAt: "Sep 18, 2026",
  },
};

function LeadDetails() {
  const { leadId } = useParams();
  const navigate = useNavigate();

  const lead = demoLeads[leadId];

  const [status, setStatus] = useState(
    lead?.status || "new"
  );

  const [notes, setNotes] = useState("");

  const handleSave = (event) => {
    event.preventDefault();

    console.log("Updated lead:", {
      id: leadId,
      status,
      notes,
    });

    navigate("/admin/leads");
  };

  if (!lead) {
    return (
      <section className="p-6 lg:p-8">
        <Card>
          <h1 className="text-2xl font-bold text-gray-900">
            Lead Not Found
          </h1>

          <p className="mt-2 text-gray-600">
            The lead you are trying to view does not exist.
          </p>

          <Link
            to="/admin/leads"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to Leads
          </Link>
        </Card>
      </section>
    );
  }

  const statusLabels = {
    new: "New",
    contacted: "Contacted",
    "in-progress": "In Progress",
    converted: "Converted",
    closed: "Closed",
  };

  const statusVariants = {
    new: "info",
    contacted: "warning",
    "in-progress": "warning",
    converted: "success",
    closed: "default",
  };

  return (
    <section className="p-6 lg:p-8">
      <div className="mb-8">
        <Link
          to="/admin/leads"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to Leads
        </Link>

        <div className="mt-6">
          <p className="text-sm font-medium text-gray-500">
            Admin Panel
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">
              {lead.name}
            </h1>

            <Badge variant={statusVariants[status]}>
              {statusLabels[status]}
            </Badge>
          </div>

          <p className="mt-2 text-gray-600">
            Lead received on {lead.createdAt}.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Contact Information
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm text-gray-500">
                  Name
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {lead.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href={`mailto:${lead.email}`}
                  className="mt-1 flex items-center gap-2 font-medium text-gray-900 hover:underline"
                >
                  <Mail size={16} />
                  {lead.email}
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <a
                  href={`tel:${lead.phone}`}
                  className="mt-1 flex items-center gap-2 font-medium text-gray-900 hover:underline"
                >
                  <Phone size={16} />
                  {lead.phone}
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Service
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {lead.service}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Budget
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {lead.budget}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Project Message
              </h2>
            </div>

            <p className="whitespace-pre-line leading-7 text-gray-600">
              {lead.message}
            </p>
          </Card>

          <Card>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Internal Notes
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Add private notes about this lead.
              </p>
            </div>

            <Textarea
              id="notes"
              label="Notes"
              placeholder="Add notes about calls, requirements, follow-ups..."
              rows={6}
              value={notes}
              onChange={(event) =>
                setNotes(event.target.value)
              }
            />
          </Card>
        </div>

        <div>
          <Card>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Lead Management
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update the current lead status.
              </p>
            </div>

            <form
              onSubmit={handleSave}
              className="space-y-5"
            >
              <Select
                id="status"
                label="Status"
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value)
                }
                options={[
                  {
                    value: "new",
                    label: "New",
                  },
                  {
                    value: "contacted",
                    label: "Contacted",
                  },
                  {
                    value: "in-progress",
                    label: "In Progress",
                  },
                  {
                    value: "converted",
                    label: "Converted",
                  },
                  {
                    value: "closed",
                    label: "Closed",
                  },
                ]}
              />

              <Button
                type="submit"
                className="w-full"
              >
                <Save size={17} className="mr-2" />
                Save Changes
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default LeadDetails;