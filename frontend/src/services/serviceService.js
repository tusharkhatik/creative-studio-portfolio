import api from "./api";

const serviceService = {
  getAll() {
    return api.get("/services");
  },

  getById(serviceId) {
    return api.get(`/services/${serviceId}`);
  },

  create(serviceData) {
    return api.post("/services", serviceData);
  },

  update(serviceId, serviceData) {
    return api.put(`/services/${serviceId}`, serviceData);
  },

  remove(serviceId) {
    return api.delete(`/services/${serviceId}`);
  },
};

export default serviceService;

