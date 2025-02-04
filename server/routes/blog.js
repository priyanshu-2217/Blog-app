import express from "express";
import AuthController from "../controllers/authController.js";
import CategoryController from "../controllers/categoryController.js";
import BlogController from "../controllers/blogController.js";
import checkUserAuthenticated from "../middlewares/authMiddleware.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/upload/`);
  },
  filename: function (req, res, cb) {
    cb(null, `${Date.now()}-${file.orginalname}`);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/user/register", AuthController.userRegistration);
router.post("/user/login", AuthController.userLogin);

router.get("/get/allblogs", checkUserAuthenticated, BlogController.getAllBlogs);
router.post(
  "/add/allblogs",
  upload.single("thumbnail"),
  checkUserAuthenticated,
  BlogController.addNewBlog
);
router.get(
  "/get/blog/:id",
  checkUserAuthenticated,
  BlogController.getSingleBlog
);

router.get(
  "/get/categories",
  checkUserAuthenticated,
  CategoryController.getAllCategories
);
router.post(
  "add/categories",
  checkUserAuthenticated,
  CategoryController.addNewCategory
);

export default router;
