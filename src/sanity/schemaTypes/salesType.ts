import { defineField, defineType } from "sanity";

export const SalesType = defineType({
  title: "sales",
  name: "sales",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "sale description",
      type: "blockContent",
    }),
    defineField({
      name: "discountAmount",
      title: "discount amount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
      description: "The amount of discount to be applied to the product",
    }),
    defineField({
      name: "isActive",
      title: "is active",
      type: "boolean",
      description: "Is the sale currently active?",
      initialValue: true,
    }),
    defineField({
      title: "Coupon Code",
      name: "couponCode",
      type: "string",
    }),
    defineField({
      type: "date",
      name: "validFrom",
      title: "valid from",
    }),
    defineField({
      type: "date",
      name: "validUntil",
      title: "valid until",
    }),
  ],
});
