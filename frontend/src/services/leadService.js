import api from "./api";

const leadService = {
  getAll() {
    return api.get("/leads");
  },

  getById(leadId) {
    return api.get(`/leads/${leadId}`);
  },

  update(leadId, leadData) {
    return api.put(`/leads/${leadId}`, leadData);
  },

  remove(leadId) {
    return api.delete(`/leads/${leadId}`);
  },
};

export default leadService;

