import React, { ChangeEvent, useContext, useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Montserrat } from "next/font/google";
import { useRouter } from 'next/navigation';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { CartContext, OrderContext } from '@/context';
const Montserratfont = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: "normal",
  subsets: ["latin"]
})

interface FormData{
  firstName:string;
  lastName:string;
  email:string;
  phoneNumber:string;
  shippingAddress:{
    street:string
  };
  paymentMethod:string;
  creditCardDetails:{
    cardNumber:string;
    expiryDate:string;
    cvv:string
  };
  termsAndConditions:boolean
}

function CheckOutForm() {
  const router = useRouter()
  const orderObj=useContext(OrderContext)
  const cartObj=useContext(CartContext)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    shippingAddress: {
      street: '',
    },
    paymentMethod: 'creditCard',
    creditCardDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
    termsAndConditions: false,
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    if (name.includes('.')) {
      // Handle nested fields
      const [parent, child] = name.split('.');
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [parent]: {
          ...prevFormData[parent],
          [child]: value,
        },
      }));
    } else {
      // Handle top-level fields
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newOrder = {
      id: Math.floor(Math.random() * 90000 + 10000), 
      name: formData.firstName + ' ' + formData.lastName,
      email: formData.email,
      address: formData.shippingAddress.street,
    };
  
    
    orderObj.handleNewOrder(newOrder);
    router.push(`/order/${newOrder.id}`)
    localStorage.removeItem('cart');
cartObj.cart.length=0

 
  };

  return (
    <div className={`${Montserratfont.className} container w-full max-w-[2000px] mt-64`}>
      <div className="w-[65%] mx-auto border py-4 px-6 my-14">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          {/* Shipping Address */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="shippingAddress">Shipping Address</Label>
            <Input
              type="text"
              id="shippingAddress"
              name="shippingAddress.street"
              placeholder="Street"
              value={formData.shippingAddress.street}
              onChange={handleChange}
            />

          </div>

          {/* Payment Method */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className='w-32'
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>

          {/* Credit Card Details */}
          {formData.paymentMethod === 'creditCard' && (
            <>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  type="text"
                  id="cardNumber"
                  name="creditCardDetails.cardNumber"
                  placeholder="Enter your card number"
                  value={formData.creditCardDetails.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  type="text"
                  id="expiryDate"
                  name="creditCardDetails.expiryDate"
                  placeholder="MM/YY"
                  value={formData.creditCardDetails.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  type="text"
                  id="cvv"
                  name="creditCardDetails.cvv"
                  placeholder="CVV"
                  value={formData.creditCardDetails.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="termsAndConditions"
              name="termsAndConditions"
              required
            />
            <Label htmlFor="termsAndConditions">
              I accept the <span className="text-blue-500">Terms & Conditions</span>.
            </Label>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full   font-bold py-2 px-4 rounded">
            Place Order
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CheckOutForm;