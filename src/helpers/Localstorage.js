const LocalStorage = {
  existUser: () => {
    const exist = localStorage.getItem("user");
    if (exist === null) return false;
    return exist;
  },

  saveUser: userData => {
<<<<<<< HEAD
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("userData saved");
=======
    const exist = false;
    if (!exist) {
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("userData saved");
    } else {
      console.log("userData exists");
    }
>>>>>>> master
    return void 0;
  },

  deleteUser: () => {
    localStorage.removeItem("user");
    console.log("Logout");
    return void 0;
  },

  saveDiscussions: newDiscussions => {
    localStorage.setItem("discussions", JSON.stringify(newDiscussions));
    return void 0;
  },

  shareDiscussions: () => {
    return localStorage.getItem("discussions");
  },

  saveComments: newComments => {
    localStorage.setItem("comments", JSON.stringify(newComments));
    return void 0;
  },

  shareComments: () => {
    return localStorage.getItem("comments");
  }
};

export default LocalStorage;
