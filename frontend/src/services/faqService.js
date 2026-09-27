import api from "./api";

const faqService = {
  getAll() {
    return api.get("/faqs");
  },

  getById(faqId) {
    return api.get(`/faqs/${faqId}`);
  },

  create(faqData) {
    return api.post("/faqs", faqData);
  },

  update(faqId, faqData) {
    return api.put(`/faqs/${faqId}`, faqData);
  },

  remove(faqId) {
    return api.delete(`/faqs/${faqId}`);
  },
};

export default faqService;

