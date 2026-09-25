import { services } from "../../data/adminData";

function Services() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Offerings</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Services</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">{service.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">{service.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-white/40">{service.price}</span>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
