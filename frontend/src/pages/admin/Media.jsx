import { media } from "../../data/adminData";

function Media() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Assets</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Media library</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {media.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src={item.url} alt={item.name} className="h-44 w-full object-cover" />
            <div className="p-4">
              <p className="font-medium text-white">{item.name}</p>
              <p className="mt-1 text-sm text-white/45">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
