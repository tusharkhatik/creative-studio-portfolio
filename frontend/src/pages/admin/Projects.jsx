import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";

const projects = [
  {
    id: 1,
    title: "Brand Film",
    category: "Video",
    client: "Acme Studio",
    status: "Published",
    createdAt: "Sep 24, 2026",
  },
  {
    id: 2,
    title: "Product Photography",
    category: "Photography",
    client: "Nova Labs",
    status: "Published",
    createdAt: "Sep 20, 2026",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding",
    client: "Orbit",
    status: "Draft",
    createdAt: "Sep 18, 2026",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Motion",
    client: "Vertex",
    status: "Published",
    createdAt: "Sep 15, 2026",
  },
];

function Projects() {
  const columns = [
    {
      key: "title",
      label: "Project",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "client",
      label: "Client",
    },
    {
      key: "status",
      label: "Status",
      render: (project) => (
        <Badge
          variant={
            project.status === "Published"
              ? "success"
              : "warning"
          }
        >
          {project.status}
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
      render: (project) => (
        <Link
          to={`/admin/projects/${project.id}/edit`}
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
            Projects
          </h1>

          <p className="mt-2 text-gray-600">
            Manage the projects displayed on your portfolio.
          </p>
        </div>

        <Link to="/admin/projects/create">
          <Button>
            <Plus size={18} className="mr-2" />
            Add Project
          </Button>
        </Link>
      </div>

      <Card padding="none">
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            All Projects
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {projects.length} projects
          </p>
        </div>

        <Table
          columns={columns}
          data={projects}
          rowKey="id"
          emptyMessage="No projects found."
        />
      </Card>
    </section>
  );
}

export default Projects;