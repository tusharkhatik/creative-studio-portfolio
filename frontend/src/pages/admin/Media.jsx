import { useState } from "react";
import { Image, Play, Trash2, Upload } from "lucide-react";

import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";
import Modal from "../../components/ui/Modal";

const mediaItems = [
  {
    id: 1,
    name: "brand-film-cover.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    size: "2.4 MB",
    uploadedAt: "Sep 24, 2026",
  },
  {
    id: 2,
    name: "product-photography.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    size: "1.8 MB",
    uploadedAt: "Sep 20, 2026",
  },
  {
    id: 3,
    name: "motion-campaign.mp4",
    type: "video",
    url: "",
    size: "18.2 MB",
    uploadedAt: "Sep 18, 2026",
  },
  {
    id: 4,
    name: "brand-identity.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    size: "3.1 MB",
    uploadedAt: "Sep 15, 2026",
  },
];

function Media() {
  const [items, setItems] = useState(mediaItems);
  const [previewItem, setPreviewItem] = useState(null);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this media?"
    );

    if (!confirmed) {
      return;
    }

    setItems((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length === 0) {
      return;
    }

    const newItems = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      type: file.type.startsWith("video/")
        ? "video"
        : "image",
      url: URL.createObjectURL(file),
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadedAt: new Date().toLocaleDateString(),
    }));

    setItems((current) => [
      ...newItems,
      ...current,
    ]);

    event.target.value = "";
  };

  return (
    <section className="p-6 lg:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Admin Panel
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Media Library
          </h1>

          <p className="mt-2 text-gray-600">
            Manage images and videos used throughout your website.
          </p>
        </div>

        <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
          <Upload size={18} className="mr-2" />
          Upload Media

          <input
            type="file"
            accept="image/*,video/*"
            multiple
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      <Card>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              All Media
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {items.length} media files
            </p>
          </div>

          <Badge>
            Images & Videos
          </Badge>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center">
            <Image
              size={36}
              className="mx-auto text-gray-400"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              No media files
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Upload your first image or video to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setPreviewItem(item)}
                  className="group relative block aspect-video w-full overflow-hidden bg-gray-100"
                >
                  {item.type === "image" && item.url ? (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Play
                        size={36}
                        className="text-gray-400"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-900 opacity-0 transition group-hover:opacity-100">
                      Preview
                    </span>
                  </div>
                </button>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-900">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.size}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.uploadedAt}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                      aria-label={`Delete ${item.name}`}
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>

                  <div className="mt-3">
                    <Badge
                      variant={
                        item.type === "image"
                          ? "info"
                          : "warning"
                      }
                    >
                      {item.type}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Modal
        open={Boolean(previewItem)}
        onClose={() => setPreviewItem(null)}
        title={previewItem?.name || "Media Preview"}
        description={
          previewItem
            ? `${previewItem.type} · ${previewItem.size}`
            : ""
        }
        size="xl"
      >
        {previewItem?.type === "image" &&
        previewItem.url ? (
          <img
            src={previewItem.url}
            alt={previewItem.name}
            className="max-h-[70vh] w-full rounded-xl object-contain"
          />
        ) : (
          <div className="flex min-h-[300px] items-center justify-center rounded-xl bg-gray-100">
            <div className="text-center">
              <Play
                size={42}
                className="mx-auto text-gray-400"
              />

              <p className="mt-3 text-sm text-gray-500">
                Video preview will be connected to the media storage service later.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Media;