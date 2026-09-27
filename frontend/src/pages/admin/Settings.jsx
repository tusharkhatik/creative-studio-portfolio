import { useState } from "react";
import { Save } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";

function Settings() {
  const [settings, setSettings] = useState({
    studioName: "Creative Studio",
    email: "hello@creative.com",
    phone: "+91 98765 43210",
    location: "Pune, India",

    instagram: "",
    linkedin: "",
    youtube: "",
    behance: "",

    responseTime: "Within 24 hours",

    siteTitle: "Creative Studio — Creative Design & Media",
    metaDescription:
      "Creative Studio provides professional video editing, photography, branding, logo design and motion graphics services.",

    maintenanceMode: "disabled",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSettings((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Settings saved:", settings);

    alert("Settings saved successfully.");
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-500">Admin Settings</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
            Settings
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-gray-500">
            Manage your studio information, social profiles, contact
            preferences and website configuration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* General Settings */}
          <Card>
            <div className="border-b pb-5">
              <h2 className="text-lg font-semibold text-gray-900">
                General Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Basic information about your creative studio.
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Input
                label="Studio Name"
                name="studioName"
                value={settings.studioName}
                onChange={handleChange}
                placeholder="Creative Studio"
              />

              <Input
                label="Business Email"
                name="email"
                type="email"
                value={settings.email}
                onChange={handleChange}
                placeholder="hello@example.com"
              />

              <Input
                label="Phone Number"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />

              <Input
                label="Location"
                name="location"
                value={settings.location}
                onChange={handleChange}
                placeholder="Pune, India"
              />
            </div>
          </Card>

          {/* Social Media */}
          <Card>
            <div className="border-b pb-5">
              <h2 className="text-lg font-semibold text-gray-900">
                Social Profiles
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Add links to your studio's social and portfolio platforms.
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Input
                label="Instagram"
                name="instagram"
                value={settings.instagram}
                onChange={handleChange}
                placeholder="https://instagram.com/yourstudio"
              />

              <Input
                label="LinkedIn"
                name="linkedin"
                value={settings.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/company/yourstudio"
              />

              <Input
                label="YouTube"
                name="youtube"
                value={settings.youtube}
                onChange={handleChange}
                placeholder="https://youtube.com/@yourstudio"
              />

              <Input
                label="Behance"
                name="behance"
                value={settings.behance}
                onChange={handleChange}
                placeholder="https://behance.net/yourstudio"
              />
            </div>
          </Card>

          {/* Contact Settings */}
          <Card>
            <div className="border-b pb-5">
              <h2 className="text-lg font-semibold text-gray-900">
                Contact Settings
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Configure how visitors should understand your response
                process.
              </p>
            </div>

            <div className="mt-6 max-w-md">
              <Select
                label="Typical Response Time"
                name="responseTime"
                value={settings.responseTime}
                onChange={handleChange}
                options={[
                  {
                    label: "Within a few hours",
                    value: "Within a few hours",
                  },
                  {
                    label: "Within 24 hours",
                    value: "Within 24 hours",
                  },
                  {
                    label: "Within 1–2 business days",
                    value: "Within 1–2 business days",
                  },
                  {
                    label: "Within 3 business days",
                    value: "Within 3 business days",
                  },
                ]}
              />
            </div>
          </Card>

          {/* Website Settings */}
          <Card>
            <div className="border-b pb-5">
              <h2 className="text-lg font-semibold text-gray-900">
                Website Settings
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Basic SEO and website configuration.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              <Input
                label="Site Title"
                name="siteTitle"
                value={settings.siteTitle}
                onChange={handleChange}
                placeholder="Your website title"
              />

              <div>
                <label
                  htmlFor="metaDescription"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Meta Description
                </label>

                <textarea
                  id="metaDescription"
                  name="metaDescription"
                  value={settings.metaDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                  placeholder="Describe your website..."
                />

                <p className="mt-2 text-xs text-gray-500">
                  This can later be used for SEO metadata.
                </p>
              </div>

              <div className="max-w-md">
                <Select
                  label="Maintenance Mode"
                  name="maintenanceMode"
                  value={settings.maintenanceMode}
                  onChange={handleChange}
                  options={[
                    {
                      label: "Disabled",
                      value: "disabled",
                    },
                    {
                      label: "Enabled",
                      value: "enabled",
                    },
                  ]}
                />
              </div>
            </div>
          </Card>

          {/* Save */}
          <div className="flex justify-end">
            <Button type="submit" variant="primary">
              <span className="inline-flex items-center gap-2">
                <Save size={17} />
                Save Settings
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;

