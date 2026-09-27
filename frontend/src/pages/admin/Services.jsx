import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";

const services = [
  {
    id: 1,
    name: "Video Editing",
    slug: "video-editing",
    category: "Video",
    price: "Starting at ₹5,000",
    status: "Published",
    createdAt: "Sep 24, 2026",
  },
  {
    id: 2,
    name: "Photography",
    slug: "photography",
    category: "Photography",
    price: "Starting at ₹3,000",
    status: "Published",
    createdAt: "Sep 20, 2026",
  },
  {
    id: 3,
    name: "Logo Design",
    slug: "logo-design",
    category: "Branding",
    price: "Starting at ₹2,500",
    status: "Published",
    createdAt: "Sep 18, 2026",
  },
  {
    id: 4,
    name: "Motion Graphics",
    slug: "motion-graphics",
    category: "Motion",
    price: "Starting at ₹4,000",
    status: "Draft",
    createdAt: "Sep 15, 2026",
  },
];

function Services() {
  const columns = [
    {
      key: "name",
      label: "Service",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "price",
      label: "Pricing",
    },
    {
      key: "status",
      label: "Status",
      render: (service) => (
        <Badge
          variant={
            service.status === "Published"
              ? "success"
              : "warning"
          }
        >
          {service.status}
        </Badge>
      ),
    },
    {
      key: "createdAt",
      label: "Created",
    },
    {
      key: "actions",
      label: "Actions",
      render: (service) => (
        <Link
          to={`/admin/services/${service.id}/edit`}
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Edit
        </Link>
      ),
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
            Services
          </h1>

          <p className="mt-2 text-gray-600">
            Manage the creative services offered on your website.
          </p>
        </div>

        <Link to="/admin/services/create">
          <Button>
            <Plus size={18} className="mr-2" />
            Add Service
          </Button>
        </Link>
      </div>

      <Card padding="none">
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            All Services
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {services.length} services
          </p>
        </div>

        <Table
          columns={columns}
          data={services}
          rowKey="id"
          emptyMessage="No services found."
        />
      </Card>
    </section>
  );
}

export default Services;