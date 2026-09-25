import { faqs } from "../../data/adminData";

function FAQs() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Support</p>
        <h2 className="mt-2 text-3xl font-bold text-white">FAQs</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">{item.question}</p>
            <p className="mt-3 text-sm leading-6 text-white/60">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
