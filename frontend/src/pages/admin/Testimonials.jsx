import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";

const testimonials = [
  {
    id: 1,
    clientName: "Rahul Sharma",
    company: "Acme Studio",
    role: "Founder",
    rating: 5,
    status: "Published",
    createdAt: "Sep 24, 2026",
  },
  {
    id: 2,
    clientName: "Priya Mehta",
    company: "Nova Labs",
    role: "Marketing Director",
    rating: 5,
    status: "Published",
    createdAt: "Sep 20, 2026",
  },
  {
    id: 3,
    clientName: "Arjun Patel",
    company: "Orbit",
    role: "Creative Director",
    rating: 4,
    status: "Draft",
    createdAt: "Sep 18, 2026",
  },
  {
    id: 4,
    clientName: "Sneha Kulkarni",
    company: "Vertex",
    role: "Founder",
    rating: 5,
    status: "Published",
    createdAt: "Sep 15, 2026",
  },
];

function Testimonials() {
  const columns = [
    {
      key: "clientName",
      label: "Client",
    },
    {
      key: "company",
      label: "Company",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "rating",
      label: "Rating",
      render: (testimonial) => (
        <span className="font-medium">
          {testimonial.rating}/5
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (testimonial) => (
        <Badge
          variant={
            testimonial.status === "Published"
              ? "success"
              : "warning"
          }
        >
          {testimonial.status}
        </Badge>
      ),
    },
    {
      key: "createdAt",
      label: "Created",
    },
  ];

  return (
    <section className="p-6 lg:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Admin Panel
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Testimonials
          </h1>

          <p className="mt-2 text-gray-600">
            Manage client testimonials displayed on your website.
          </p>
        </div>

        <Link to="/admin/testimonials/create">
          <Button>
            <Plus size={18} className="mr-2" />
            Add Testimonial
          </Button>
        </Link>
      </div>

      <Card padding="none">
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            All Testimonials
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {testimonials.length} testimonials
          </p>
        </div>

        <Table
          columns={columns}
          data={testimonials}
          rowKey="id"
          emptyMessage="No testimonials found."
        />
      </Card>
    </section>
  );
}

export default Testimonials;