
import api from "./api";

const mediaService = {
  getAll() {
    return api.get("/media");
  },

  upload(formData) {
    return api.post("/media", formData);
  },

  remove(mediaId) {
    return api.delete(`/media/${mediaId}`);
  },
};

export default mediaService;

