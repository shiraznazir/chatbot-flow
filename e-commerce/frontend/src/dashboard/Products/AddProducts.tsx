import React, { useEffect, useState } from "react";
import CustomSelect from "../../components/common/CustomSelect";
import SubMenu from "../../components/common/SubMenu";
import TextField from "../../components/common/TextField";
import MultiSelect from "../../components/common/MultiSelect";
import SavePanel from "../../components/common/SavePanel";
import AreaField from "../../components/common/AreaField";
import UploadImage from "../../components/common/UploadImage";
import { addProduct, getSingleProduct, updateProduct } from "../../apis";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import RadioButton from "../../components/common/RadioButton";
import Loader from "../../components/common/Loader";
import ScrollToTop from "../../components/common/ScrollToTop";

const stylesList: string[] = [
  "Modern",
  "Formal",
  "Causal",
  "Party Wear",
  "Romantic Wear",
  "Trendy Wear",
];

const categoryList: string[] = ["Men", "Women", "Kids", "Gifts", "Handmade"];

const optionColor = [
  { value: "White", label: "White" },
  { value: "Yellow", label: "Yellow" },
  { value: "Blue", label: "Blue" },
  { value: "Black", label: "Black" },
  { value: "Green", label: "Green" },
  { value: "Maroon", label: "Maroon" },
  { value: "Gray", label: "Gray" },
  { value: "Brown", label: "Brown" },
];

const optionSize = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
  { value: "XXXL", label: "XXXL" },
];

interface FormData {
  productName: string;
  price: number;
  offerPrice: number;
  discount: number;
  description: string;
  details: string;
}

// interface Error {
//   productName: boolean;
//   price: boolean;
//   offerPrice: boolean;
//   discount: boolean;
//   color: boolean;
//   size: boolean;
//   style: boolean;
//   category: boolean;
//   subCategory: boolean;
//   type: boolean;
//   description: boolean;
//   details: boolean;
// }

// const initialError: Error = {
//   productName: false,
//   price: false,
//   offerPrice: false,
//   discount: false,
//   color: false,
//   size: false,
//   style: false,
//   category: false,
//   subCategory: false,
//   type: false,
//   description: false,
//   details: false,
// };

const initialFormData: FormData = {
  productName: "",
  price: 0,
  offerPrice: 0,
  discount: 0,
  description: "",
  details: "",
};

const AddProducts: React.FC = () => {
  const navigate = useNavigate();
  const params: any = useParams();
  const [productDetails, setProductsDetails] = useState<any>(null);
  const [basicForm, setBasicForm] = useState<FormData>(initialFormData);
  const [styleVal, setStyleVal] = useState<string>("");
  const [categoryVal, setCategoryVal] = useState<string>("");
  const [subCategoryVal, setSubCategoryVal] = useState<string>("");
  const [typeVal, setTypeVal] = useState<string>("");
  const [colourVal, setColorVal] = useState<string[]>([]);
  const [sizeVal, setSizeVal] = useState<string[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<boolean>(false);
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [sideImage, setSideImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [subCategoryList, setSubCategoryList] = useState<string[]>([]);
  const [typeList, setTypeList] = useState<string[]>([]);

  useEffect(() => {
    switch (categoryVal) {
      case "Men":
        setSubCategoryList([
          "Top Wear",
          "Bottom Wear",
          "Foot Wear",
          "Indian Festive Wear",
        ]);
        break;
      case "Women":
        setSubCategoryList(["Indian Wear", "Western Wear"]);
        break;
      case "Kids":
        setSubCategoryList(["Girls Wear", "Boys Wear", "Foot Wear"]);
        break;
      default:
        setSubCategoryList([]);
        break;
    }
  }, [categoryVal]);

  useEffect(() => {
    switch (subCategoryVal) {
      case "Indian Festive Wear":
        setTypeList(["Kurtas & Kurta Sets"]);
        break;
      case "Foot Wear":
        setTypeList([
          "Sneakers",
          // "Formal Shoes",
          // "Boots",
          "Sports Shoes",
          // "Slipers",
          // "Sandals",
          // "Flip-flop",
        ]);
        break;
      case "Top Wear":
        setTypeList([
          "T-Shirt",
          // "Shirt",
          "Formal-Shirt",
          "Causal-Shirt",
          // "Hoodies",
          // "Jackets",
          "Sweatshirts",
          "Sweaters",
          // "Blazers",
        ]);
        break;
      case "Bottom Wear":
        setTypeList([
          "Jeans",
          "Formal-Trousers",
          "Casual-Trousers",
          "Shorts",
          "Track-Pants & Joggers",
        ]);
        break;
      case "Indian Wear":
        setTypeList([
          "Kurtas & Suits",
          "Sarees",
          "Kurtis, tunis & Tops",
          // "Ethnic Wear",
          // "Skirts",
          // "Palazzos",
          "Lengha-Cholis",
        ]);
        break;
      case "Western Wear":
        setTypeList([
          "Dresses",
          "Tops",
          "T-Shirts",
          "Jeans",
          // "Trousers & Capris",
          // "Jump-suits",
          // "Shrugs",
          "Sweaters & SweatsShirts",
          // "Skirts & Shorts",
          // "Jackets",
          // "Blazers",
        ]);
        break;
      case "Girls Wear":
        setTypeList([
          "Dresses",
          "Tops",
          "T-shirts",
          "Party wear",
          "Jump suits",
          "Skirts & Shorts",
          "Jeans",
          "Trousers & Capris",
          "Jacket",
          "Sweaters & Sweats Shirts",
          "Innerwear & Sleepwear",
        ]);
        break;
      case "Boys Wear":
        setTypeList([
          "T-Shirt",
          "Shirt",
          "Jeans",
          "Party Wear",
          "Shorts",
          "Jeans",
          "Trousers & Capri",
          "Jacket",
          "Sweater & Sweats Shirts",
          "Kurta-Pujama",
        ]);
        break;
      case "Kids Footwear":
        setTypeList([
          "Causal-Shoes",
          "Sports-Shoes",
          "Sandals",
          "Flats",
          "Sleepers",
          "School-Shoes",
          "Heels",
        ]);
        break;
      default:
        setTypeList([]);
        break;
    }
  }, [subCategoryVal]);

  const validate = () => {
    if (!basicForm.productName) {
      toast.error("Please enter product name");
      return false;
    } else if (!basicForm.price) {
      toast.error("Please enter price");
      return false;
    } else if (!basicForm.offerPrice) {
      toast.error("Please enter offer price");
      return false;
    } else if (!basicForm.discount) {
      toast.error("Please enter discount");
      return false;
    } else if (colourVal.length === 0) {
      toast.error("Please select color");
      return false;
    } else if (sizeVal.length === 0) {
      toast.error("Please select size");
      return false;
    } else if (!styleVal) {
      toast.error("Please select style");
      return false;
    } else if (!categoryVal) {
      toast.error("Please select category");
      return false;
    } else if (!subCategoryVal) {
      toast.error("Please select sub category");
      return false;
    } else if (!typeVal) {
      toast.error("Please select type");
      return false;
    } else if (!basicForm.description) {
      toast.error("Please enter description");
      return false;
    } else if (!basicForm.details) {
      toast.error("Please enter details");
      return false;
    } else if (!frontImage) {
      toast.error("Please upload front image");
      return false;
    } else if (!backImage) {
      toast.error("Please upload back image");
      return false;
    } else if (!sideImage) {
      toast.error("Please upload side image");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("productName", basicForm.productName);
      formData.append("price", String(basicForm.price));
      formData.append("offerPrice", String(basicForm.offerPrice));
      formData.append("discount", String(basicForm.discount));
      formData.append("description", basicForm.description);
      formData.append("details", basicForm.details);
      colourVal.forEach((color) => formData.append(`color`, color));
      sizeVal.forEach((size) => formData.append("size", size));
      formData.append("style", styleVal);
      formData.append("category", categoryVal);
      formData.append("subCategory", subCategoryVal);
      formData.append("type", typeVal);
      formData.append("featured", String(featuredProduct));
      frontImage && formData.append("img", frontImage);
      backImage && formData.append("img", backImage);
      sideImage && formData.append("img", sideImage);

      if (params?.uid) {
        updateProduct(params.uid, formData)
          .then((response: any) => {
            if (response.success) {
              toast.success(response.message);
              setTimeout(() => {
                navigate("/dashboard/products");
              }, 3000);
            } else {
              toast.error(response.message);
            }
          })
          .catch((err: any) => {
            toast.error("Error ", err);
          });
      } else {
        addProduct(formData)
          .then((response: any) => {
            if (response.success) {
              toast.success(response.message);
              setTimeout(() => {
                navigate("/dashboard/products");
              }, 3000);
            } else {
              toast.error(response.message);
            }
          })
          .catch((err: any) => {
            toast.error("Error ", err);
          });
      }
    }
  };

  const getProductByIdApi = async () => {
    try {
      if (params?.uid) {
        const response = await getSingleProduct(params.uid);
        if (response.success) {
          setProductsDetails(response.product);
        } else {
          toast.error(response.message);
        }
      }
    } catch (error) {
      console.error("Error getting product:", error);
      toast.error(`An error occurred while getting the product.`);
    }
  };

  useEffect(() => {
    if (params?.uid) {
      getProductByIdApi();
    } else {
      setLoading(false);
    }
  }, [params.uid]);

  useEffect(() => {
    if (productDetails) {
      const basicData = {
        productName: productDetails?.productName,
        price: productDetails?.price,
        offerPrice: productDetails?.offerPrice,
        discount: productDetails?.discount,
        description: productDetails?.description,
        details: productDetails?.details,
      };
      setBasicForm({ ...basicData });
      setColorVal(productDetails.color);
      setSizeVal(productDetails.size);
      setStyleVal(productDetails.style);
      setCategoryVal(productDetails.category);
      setSubCategoryVal(productDetails.subCategory);
      setTypeVal(productDetails.type);
      setFeaturedProduct(productDetails?.featured || "");
      setLoading(false);
    }
  }, [productDetails]);

  const handleBack = () => {
    navigate("/dashboard/products");
  };

  useEffect(() => {
    if (basicForm?.price && basicForm?.discount) {
      const value = basicForm.price * ((100 - basicForm.discount) / 100);
      setBasicForm((prevForm) => ({
        ...prevForm,
        offerPrice: Math.floor(value),
      }));
    }
  }, [basicForm?.price, basicForm?.discount]);

  return (
    <div className="relative">
      <ScrollToTop />
      <SubMenu
        main="Products"
        sub={params?.uid ? "Edit Products" : "Add Products"}
        handleBack={handleBack}
      />
      <div className="w-full p-4 bg-gray-200 mb-16">
        <div className="bg-white">
          {loading ? (
            <>
              <Loader />
            </>
          ) : (
            <>
              <div className="w-full p-4 font-semibold">
                <h1>Primary Details</h1>
              </div>
              <div className="border-b border-purple-200"></div>

              {/* Name */}
              <div className="p-4 grid grid-cols-2 gap-4">
                <TextField
                  value={basicForm.productName}
                  setValue={(value) =>
                    setBasicForm({ ...basicForm, productName: value })
                  }
                  type="text"
                  label="Products Name"
                  disabled={false}
                />
                {/* Style */}
                <CustomSelect
                  value={styleVal}
                  setValue={setStyleVal}
                  list={stylesList}
                  label="Style"
                />

                {/* Category */}
                <CustomSelect
                  value={categoryVal}
                  setValue={setCategoryVal}
                  list={categoryList}
                  label="Category"
                />
                {/* SubCategory */}
                <CustomSelect
                  value={subCategoryVal}
                  setValue={setSubCategoryVal}
                  list={subCategoryList}
                  label="Sub-Category"
                />

                {/* Size */}
                <MultiSelect
                  labelText="Size"
                  selectedValues={sizeVal}
                  setValue={setSizeVal}
                  options={optionSize}
                />
                {/* color */}
                <MultiSelect
                  labelText="Color"
                  selectedValues={colourVal}
                  setValue={setColorVal}
                  options={optionColor}
                />
                {/* Type */}
                <CustomSelect
                  value={typeVal}
                  setValue={setTypeVal}
                  list={typeList}
                  label="Type"
                />
                <TextField
                  value={basicForm.price === 0 ? "" : basicForm.price}
                  setValue={(value) =>
                    setBasicForm({ ...basicForm, price: Number(value) })
                  }
                  type="number"
                  label="Price"
                  disabled={false}
                />
                <TextField
                  value={basicForm.discount === 0 ? "" : basicForm.discount}
                  setValue={(value) =>
                    setBasicForm({ ...basicForm, discount: Number(value) })
                  }
                  type="number"
                  label="Discount ( % )"
                  disabled={false}
                />
                <TextField
                  value={basicForm.offerPrice === 0 ? "" : basicForm.offerPrice}
                  setValue={(value) =>
                    setBasicForm({ ...basicForm, offerPrice: Number(value) })
                  }
                  disabled={true}
                  type="number"
                  label="Offer Price"
                />

                <AreaField
                  value={basicForm.description}
                  setValue={(value: any) =>
                    setBasicForm((prevData) => ({
                      ...prevData,
                      description: value,
                    }))
                  }
                  label="Description"
                />
                <AreaField
                  value={basicForm.details}
                  setValue={(value: any) =>
                    setBasicForm((prevData) => ({
                      ...prevData,
                      details: value,
                    }))
                  }
                  label="Details"
                />
                <RadioButton
                  title="Featured Product"
                  label1="True"
                  label2="false"
                  value={featuredProduct}
                  setValue={setFeaturedProduct}
                />
                <UploadImage
                  id="image1"
                  label="Upload Front Image"
                  selectedImage={frontImage}
                  setState={setFrontImage}
                />
                <UploadImage
                  id="image2"
                  label="Upload Back Image"
                  selectedImage={backImage}
                  setState={setBackImage}
                />
                <UploadImage
                  id="image3"
                  label="Upload Side Image"
                  selectedImage={sideImage}
                  setState={setSideImage}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <SavePanel update={Boolean(params.uid)} handleSubmit={handleSubmit} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddProducts;
