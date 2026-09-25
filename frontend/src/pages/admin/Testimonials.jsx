import { testimonials } from "../../data/adminData";

function Testimonials() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Client feedback</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Testimonials</h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {testimonials.map((item) => (
          <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-base leading-7 text-white/70">“{item.message}”</p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">{item.role}</p>
              </div>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">Review</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
