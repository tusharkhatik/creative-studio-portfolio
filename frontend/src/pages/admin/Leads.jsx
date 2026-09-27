import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";

const leads = [
  {
    id: 1,
    name: "Amit Shah",
    email: "amit@example.com",
    service: "Video Editing",
    budget: "₹10,000 - ₹25,000",
    status: "New",
    createdAt: "Sep 26, 2026",
  },
  {
    id: 2,
    name: "Neha Joshi",
    email: "neha@example.com",
    service: "Branding",
    budget: "₹25,000 - ₹50,000",
    status: "Contacted",
    createdAt: "Sep 24, 2026",
  },
  {
    id: 3,
    name: "Rohan Patil",
    email: "rohan@example.com",
    service: "Photography",
    budget: "₹5,000 - ₹10,000",
    status: "In Progress",
    createdAt: "Sep 22, 2026",
  },
  {
    id: 4,
    name: "Kavya Deshmukh",
    email: "kavya@example.com",
    service: "Motion Graphics",
    budget: "₹10,000 - ₹25,000",
    status: "Converted",
    createdAt: "Sep 20, 2026",
  },
  {
    id: 5,
    name: "Vikram Mehta",
    email: "vikram@example.com",
    service: "Logo Design",
    budget: "₹2,500 - ₹5,000",
    status: "Closed",
    createdAt: "Sep 18, 2026",
  },
];

function Leads() {
  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "service",
      label: "Service",
    },
    {
      key: "budget",
      label: "Budget",
    },
    {
      key: "status",
      label: "Status",
      render: (lead) => {
        const statusVariants = {
          New: "info",
          Contacted: "warning",
          "In Progress": "warning",
          Converted: "success",
          Closed: "default",
        };

        return (
          <Badge variant={statusVariants[lead.status]}>
            {lead.status}
          </Badge>
        );
      },
    },
    {
      key: "createdAt",
      label: "Received",
    },
    {
      key: "actions",
      label: "Actions",
      render: (lead) => (
        <Link
          to={`/admin/leads/${lead.id}`}
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <section className="p-6 lg:p-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500">
          Admin Panel
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Leads
        </h1>

        <p className="mt-2 text-gray-600">
          Manage inquiries and potential clients from your website.
        </p>
      </div>

      <Card padding="none">
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            All Leads
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {leads.length} leads
          </p>
        </div>

        <Table
          columns={columns}
          data={leads}
          rowKey="id"
          emptyMessage="No leads found."
        />
      </Card>
    </section>
  );
}

export default Leads;