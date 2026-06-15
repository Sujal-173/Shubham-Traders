"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/field";

export function LeadForm({ source = "Website Lead Form" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    const templateParams = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string || "",
      projectType: formData.get("projectType") as string || "Residential Solar",
      city: formData.get("city") as string || "",
      message: formData.get("message") as string || "",
      source,
      to_email: process.env.NEXT_PUBLIC_LEAD_EMAIL || "Shubhamsolarau@gmail.com"
    };

    try {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error("EmailJS configuration missing");
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Name</Label>
          <Input name="name" required placeholder="Your name" />
        </div>
        <div>
          <Label>Phone</Label>
          <Input name="phone" required placeholder="+91" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Project Type</Label>
          <Select name="projectType" defaultValue="Residential Solar">
            <option>Residential Solar</option>
            <option>Commercial Solar</option>
            <option>Industrial Solar</option>
            <option>Agricultural Solar</option>
          </Select>
        </div>
        <div>
          <Label>City</Label>
          <Input name="city" placeholder="Kasrawad, Khargone..." />
        </div>
      </div>
      <div>
        <Label>Requirement</Label>
        <Textarea name="message" placeholder="Monthly bill, rooftop size, capacity, or subsidy query" />
      </div>
      <Button disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Request Consultation"}</Button>
      {status === "success" ? <p className="text-sm font-bold text-energy">Thanks. Shubham Traders will contact you shortly.</p> : null}
      {status === "error" ? <p className="text-sm font-bold text-red-600">Something went wrong. Please call or WhatsApp us directly.</p> : null}
    </form>
  );
}
