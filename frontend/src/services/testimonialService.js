import api from "./api";

const testimonialService = {
  getAll() {
    return api.get("/testimonials");
  },

  getById(testimonialId) {
    return api.get(`/testimonials/${testimonialId}`);
  },

  create(testimonialData) {
    return api.post("/testimonials", testimonialData);
  },

  update(testimonialId, testimonialData) {
    return api.put(`/testimonials/${testimonialId}`, testimonialData);
  },

  remove(testimonialId) {
    return api.delete(`/testimonials/${testimonialId}`);
  },
};

export default testimonialService;

