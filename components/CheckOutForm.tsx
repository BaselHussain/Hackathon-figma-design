"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import { Montserrat } from "next/font/google";
const Montserratfont = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

// Define Zod schema outside the component
const AddressSchema = z.object({
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z
    .string()
    .min(5, "Postal code must be at least 5 characters")
    .max(10, "Postal code must be at most 10 characters"),
  country: z.string().min(1, "Country is required"),
});

export const CheckoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .optional(),
  shippingAddress: AddressSchema,
  billingAddress: AddressSchema.optional(),
  paymentMethod: z.enum(["creditCard", "paypal", "bankTransfer"], {
    message: "Please select a payment method",
  }),
  creditCardDetails: z
    .object({
      cardNumber: z
        .string()
        .length(16, "Card number must be 16 digits")
        .regex(/^\d{16}$/, "Card number must only contain digits")
        .optional(),
      expiryDate: z
        .string()
        .regex(
          /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
          "Expiry date must be in MM/YY format"
        )
        .optional(),
      cvv: z
        .string()
        .length(3, "CVV must be 3 digits")
        .regex(/^\d{3}$/, "CVV must only contain digits")
        .optional(),
    })
    .refine((data) => {
      if (data.cardNumber || data.expiryDate || data.cvv) {
        return !!data.cardNumber && !!data.expiryDate && !!data.cvv;
      }
      return true;
    }, {
      message: "Credit card details are incomplete",
    })
    .optional(),
  termsAndConditions: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});

export default function CheckOutForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof CheckoutSchema>>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      paymentMethod: "creditCard", // Set default value for payment method to avoid the validation error
    },
  });

  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(
    form.watch("paymentMethod")
  );

  // Define the onSubmit function
  const onSubmit: SubmitHandler<z.infer<typeof CheckoutSchema>> = (values) => {
    console.log(values);
    router.push("/order");
    alert("Order placed")
  };

  return (
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] mt-64`}>
      <div className="w-[65%] mx-auto border py-4 px-6 my-14">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Shipping Address */}
            <FormField
              control={form.control}
              name="shippingAddress.street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shipping Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Street" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Payment Method */}
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        field.onChange(e.target.value); // Update form state
                      }}
                    >
                      <option value="creditCard">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="bankTransfer">Bank Transfer</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Credit Card Details */}
            {paymentMethod === "creditCard" && (
              <>
                <FormField
                  control={form.control}
                  name="creditCardDetails.cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your card number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="creditCardDetails.expiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiry Date</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/YY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="creditCardDetails.cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input placeholder="CVV" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Terms and Conditions */}
            <FormField
              control={form.control}
              name="termsAndConditions"
              render={({ field }) => {
                const { value, ...fieldWithoutValue } = field; // Destructure and omit `value`
                return (
                  <FormItem className="flex gap-2 items-center">
                    <FormControl>
                      <Checkbox
                        {...fieldWithoutValue} // Spread the remaining props
                        checked={field.value} // Explicitly set the `checked` prop
                        onCheckedChange={field.onChange} // Map `onCheckedChange` for boolean handling
                      />
                    </FormControl>
                    <FormDescription>
                      I accept the <span className="text-blue-500">Terms & Conditions</span>.
                    </FormDescription>
                  </FormItem>
                );
              }}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
