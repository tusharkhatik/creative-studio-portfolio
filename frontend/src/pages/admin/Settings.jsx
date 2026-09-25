function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Preferences</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Settings</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-lg font-semibold text-white">Brand settings</p>
          <div className="mt-4 space-y-3 text-sm text-white/60">
            <p>Studio name: Creative Studio</p>
            <p>Email: hello@creative.com</p>
            <p>Location: Pune, India</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-lg font-semibold text-white">Integrations</p>
          <div className="mt-4 space-y-3 text-sm text-white/60">
            <p>Forms: Enabled</p>
            <p>Media uploads: Active</p>
            <p>Notifications: On</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
