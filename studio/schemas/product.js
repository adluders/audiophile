export default {
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "graphics",
      title: "Graphics",
      type: "array",
      of: [{ type: "graphic" }],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "categoryImage",
      title: "Category Image",
      type: "array",
      of: [{ type: "graphic" }],
    },
    {
      name: "new",
      title: "New",
      type: "boolean",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "adText",
      title: "Ad Text",
      type: "text",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    { name: "features", title: "Features", type: "text" },
    {
      name: "package",
      title: "Includes",
      type: "array",
      of: [{ type: "packedItem" }],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "galleryItem" }],
    },
    {
      title: "Others",
      name: "others",
      type: "array",
      of: [{ type: "reference", to: [{ type: "item" }] }],
    },
  ],
};
