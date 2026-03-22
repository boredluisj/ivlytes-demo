"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "IV Hydration Therapy",
  "Colonic Hydrotherapy",
  "BioTE Hormone Therapy",
  "Medical Weight Loss",
  "SkinPen Microneedling",
  "General Inquiry",
];

const inputClass = "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F0EDE8] text-sm placeholder:text-[#9BA8BB]/50 focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-white/[0.06] transition-all";
const labelClass = "block text-xs font-medium text-[#9BA8BB] mb-1.5";
const errorClass = "text-xs text-red-400 mt-1";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // TODO: wire up to actual form endpoint (e.g. Web3Forms, email API, CRM)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-[#2DD4BF] mx-auto mb-4" />
        <h3 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-2">Message Sent!</h3>
        <p className="text-[#9BA8BB]">We&apos;ll get back to you within 1 business day. For faster response, call <a href="tel:2816669211" className="text-[#2DD4BF]">(281) 666-9211</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelClass}>First Name</label>
          <input id="firstName" type="text" {...register("firstName")} className={inputClass} placeholder="Jane" />
          {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name</label>
          <input id="lastName" type="text" {...register("lastName")} className={inputClass} placeholder="Smith" />
          {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input id="email" type="email" {...register("email")} className={inputClass} placeholder="jane@example.com" />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input id="phone" type="tel" {...register("phone")} className={inputClass} placeholder="(281) 555-0000" />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>Service Interest</label>
        <select id="service" {...register("service")} className={inputClass}>
          <option value="">Select a service...</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" rows={4} {...register("message")} className={inputClass} placeholder="Tell us about your wellness goals or any questions you have..." />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#2DD4BF] text-[#0B1120] font-semibold rounded-xl hover:bg-[#2DD4BF]/90 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
      </button>

      <p className="text-xs text-[#9BA8BB]/60 text-center">
        For immediate appointments, call <a href="tel:2816669211" className="text-[#2DD4BF]">(281) 666-9211</a> or{" "}
        <a href="https://www.vagaro.com/ivlytes/book-now" target="_blank" rel="noopener noreferrer" className="text-[#2DD4BF]">book online via Vagaro</a>.
      </p>
    </form>
  );
}
