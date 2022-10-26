import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";

const Checkout = () => {
    const course = useLoaderData();
    const { img, name, price } = course;
    return (
        <section className="my-container section-gap">
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="content-gap-y">
                    <p className="text-2xl font-bold">Order Summary</p>
                    <div className="space-y-3 rounded-lg bg-base-content/10 px-2 py-4 sm:px-6">
                        <div className="flex flex-col items-center rounded-lg sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md object-cover object-center" src={img} alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="text-2xl font-semibold">{name}</span>
                                <p className="text-lg font-bold">{price} $</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-2xl font-bold">Select Shift</p>
                    <form className="grid gap-6">
                        <div className="relative">
                            <input className="peer hidden" id="radio_1" type="radio" name="radio" defaultChecked="" />
                            <span className="peer-checked:border-base-content/70 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-base-content/30 bg-base-100" />
                            <label
                                className="peer-checked:border-2 peer-checked:border-base-content/70 peer-checked:bg-base-content/10 flex cursor-pointer select-none rounded-lg border border-base-content/30 p-4"
                                htmlFor="radio_1"
                            >
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Morning Shift</span>
                                    <p className="text-slate-500 text-sm leading-6">Class: 10.00-12.00 Am</p>
                                </div>
                            </label>
                        </div>
                        <div className="relative">
                            <input className="peer hidden" id="radio_2" type="radio" name="radio" defaultChecked="" />
                            <span className="peer-checked:border-base-content/70 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-base-content/30 bg-base-100" />
                            <label
                                className="peer-checked:border-2 peer-checked:border-base-content/70 peer-checked:bg-base-content/10 flex cursor-pointer select-none rounded-lg border border-base-content/30 p-4"
                                htmlFor="radio_2"
                            >
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Evening Shift</span>
                                    <p className="text-slate-500 text-sm leading-6">Class: 08.00-10.00 PM</p>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="bg-base-content/10 rounded-lg p-8">
                    <p className="text-2xl font-bold">Payment Details</p>
                    <p className="text-gray-400 mb-4">Complete your order by providing your payment details.</p>
                    <div className="content-gap-y">
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Email
                            </label>
                            <div className="relative">
                                <input type="text" name="email" className="pl-11 input w-full" placeholder="Your Email" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <MdAlternateEmail />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="card-holder" className="mb-2 block text-sm font-medium">
                                Card Holder
                            </label>
                            <div className="relative">
                                <input type="text" name="card-holder" className="w-full pl-11 input" placeholder="Your Name" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <BiMessageDetail />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="card-no" className="mb-2 block text-sm font-medium">
                                Card Details
                            </label>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-shrink-0">
                                    <input type="text" name="card-no" className="w-full pl-11 input" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <FaAddressCard />
                                    </div>
                                </div>
                                <input type="text" name="credit-expiry" className="w-full input" placeholder="MM/YY" />
                                <input type="text" name="credit-cvc" className="w-full input" placeholder="CVC" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-semibold">Total</p>
                            <p className="text-2xl font-semibold">${price}</p>
                        </div>
                    </div>
                    <button className="mt-4 w-full btn btn-primary">Place Order</button>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
