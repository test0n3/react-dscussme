const LocalStorage = {
  saveUser: userData => {
    const exist = this.existUser();
    if (!exist) {
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("userData saved");
    } else {
      console.log("userData exists");
    }
    return void 0;
  },

  existUser: () => {
    return localStorage.getItem("user");
  },

  deleteUser: () => {
    const exist = localStorage.getItem("user");
    if (!exist) {
      localStorage.removeItem("user");
      console.log("Logout");
    } else {
      console.log("No user. Already logged out");
    }
    return void 0;
  },

  saveDiscussion: () => {},

  shareDiscussion: () => {}
};

export default LocalStorage;
