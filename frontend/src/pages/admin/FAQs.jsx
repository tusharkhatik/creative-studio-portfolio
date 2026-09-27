import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";

const faqs = [
  {
    id: 1,
    question: "How long does a typical project take?",
    category: "General",
    status: "Published",
    order: 1,
    createdAt: "Sep 24, 2026",
  },
  {
    id: 2,
    question: "Do you offer revisions?",
    category: "Process",
    status: "Published",
    order: 2,
    createdAt: "Sep 20, 2026",
  },
  {
    id: 3,
    question: "What information do you need to start a project?",
    category: "Process",
    status: "Published",
    order: 3,
    createdAt: "Sep 18, 2026",
  },
  {
    id: 4,
    question: "Do you work with clients remotely?",
    category: "General",
    status: "Draft",
    order: 4,
    createdAt: "Sep 15, 2026",
  },
];

function FAQs() {
  const columns = [
    {
      key: "question",
      label: "Question",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "order",
      label: "Order",
    },
    {
      key: "status",
      label: "Status",
      render: (faq) => (
        <Badge
          variant={
            faq.status === "Published"
              ? "success"
              : "warning"
          }
        >
          {faq.status}
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
      render: (faq) => (
        <Link
          to={`/admin/faqs/${faq.id}/edit`}
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
            FAQs
          </h1>

          <p className="mt-2 text-gray-600">
            Manage frequently asked questions displayed on your website.
          </p>
        </div>

        <Link to="/admin/faqs/create">
          <Button>
            <Plus size={18} className="mr-2" />
            Add FAQ
          </Button>
        </Link>
      </div>

      <Card padding="none">
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            All FAQs
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {faqs.length} FAQs
          </p>
        </div>

        <Table
          columns={columns}
          data={faqs}
          rowKey="id"
          emptyMessage="No FAQs found."
        />
      </Card>
    </section>
  );
}

export default FAQs;