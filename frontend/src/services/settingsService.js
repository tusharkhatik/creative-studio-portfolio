
import api from "./api";

const settingsService = {
  get() {
    return api.get("/settings");
  },

  update(settingsData) {
    return api.put("/settings", settingsData);
  },
};

export default settingsService;

